export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const JOTFORM_API_KEY = process.env.JOTFORM_API_KEY;
  const JOTFORM_FORM_ID = process.env.JOTFORM_FORM_ID || "261957037836064";
  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

  try {
    // Fetch Jotform submissions
    const jfRes = await fetch(
      `https://api.jotform.com/form/${JOTFORM_FORM_ID}/submissions?apiKey=${JOTFORM_API_KEY}&limit=100&orderby=created_at&direction=DESC`
    );
    const jfData = await jfRes.json();
    const submissions = jfData.content || [];

    // Parse Jotform submissions
    const jotformMap = {};
    submissions.forEach(sub => {
      const answers = sub.answers || {};
      let email = "", name = "", phone = "", state = "", product = "";
      Object.values(answers).forEach(a => {
        const q = (a.name || "").toLowerCase();
        if (q.includes("email")) email = a.answer || "";
        if (q.includes("name") && !q.includes("email")) name = typeof a.answer === "object" ? (a.answer.first + " " + a.answer.last).trim() : (a.answer || "");
        if (q.includes("phone")) phone = a.answer || "";
        if (q.includes("state")) state = a.answer || "";
        if (q.includes("product")) product = a.answer || "";
      });
      if (email) {
        jotformMap[email.toLowerCase()] = {
          submissionId: sub.id,
          name,
          email,
          phone,
          state,
          product,
          submittedAt: sub.created_at,
          status: sub.status,
        };
      }
    });

    // Fetch Stripe payments
    let stripePayments = [];
    if (STRIPE_SECRET_KEY) {
      const Stripe = (await import("stripe")).default;
      const stripe = new Stripe(STRIPE_SECRET_KEY);
      const charges = await stripe.paymentIntents.list({ limit: 100 });
      stripePayments = charges.data
        .filter(p => p.status === "succeeded")
        .map(p => ({
          orderId: "TGG-" + p.id.slice(-8).toUpperCase(),
          stripeId: p.id,
          email: (p.receipt_email || p.metadata?.email || "").toLowerCase(),
          amount: (p.amount / 100).toFixed(2),
          product: p.metadata?.product_name || p.description || "Custom Appliance",
          date: new Date(p.created * 1000).toLocaleDateString("en-US", {
            month: "short", day: "numeric", year: "numeric"
          }),
          timestamp: p.created,
        }));
    }

    // Merge Stripe + Jotform by email
    const patients = stripePayments.map(payment => {
      const jf = jotformMap[payment.email] || null;
      return {
        orderId: payment.orderId,
        stripeId: payment.stripeId,
        name: jf?.name || payment.email || "Unknown",
        email: payment.email,
        phone: jf?.phone || "",
        state: jf?.state || "",
        product: payment.product,
        amount: payment.amount,
        date: payment.date,
        timestamp: payment.timestamp,
        jotformSubmitted: !!jf,
        jotformSubmissionId: jf?.submissionId || null,
        jotformSubmittedAt: jf?.submittedAt || null,
        intakeStatus: jf ? "Submitted" : "Pending",
      };
    });

    // Also add Jotform submissions with no matching Stripe payment
    Object.values(jotformMap).forEach(jf => {
      const alreadyInList = patients.find(p => p.email === jf.email.toLowerCase());
      if (!alreadyInList) {
        patients.push({
          orderId: "N/A",
          name: jf.name,
          email: jf.email,
          phone: jf.phone,
          state: jf.state,
          product: jf.product,
          amount: "0.00",
          date: new Date(jf.submittedAt).toLocaleDateString("en-US", {
            month: "short", day: "numeric", year: "numeric"
          }),
          timestamp: new Date(jf.submittedAt).getTime() / 1000,
          jotformSubmitted: true,
          jotformSubmissionId: jf.submissionId,
          intakeStatus: "Submitted",
        });
      }
    });

    // Sort by most recent first
    patients.sort((a, b) => b.timestamp - a.timestamp);

    res.status(200).json({ patients, total: patients.length });

  } catch (error) {
    console.error("Portal data error:", error);
    res.status(500).json({ error: error.message, patients: [] });
  }
}
