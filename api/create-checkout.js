import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { productId, productName, price, email } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: productName,
              description: "Custom dental appliance — dentist-prescribed, lab-fabricated. Includes impression kit, dentist review, branded case, and FSA/HSA Superbill.",
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email || undefined,
      success_url: "https://form.jotform.com/261957037836064?product=" + encodeURIComponent(productName) + "&price=" + price,
      cancel_url: process.env.NEXT_PUBLIC_SITE_URL || "https://theguardguy.vercel.app",
      payment_intent_data: {
        metadata: {
          product_id: String(productId),
          product_name: productName,
        },
      },
      custom_text: {
        submit: {
          message: "After payment you will be redirected to complete your HIPAA-secure clinical intake form. A licensed dentist cannot begin your case until the intake is complete.",
        },
      },
      allow_promotion_codes: true,
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: error.message });
  }
}
