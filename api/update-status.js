export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { submissionId, status } = req.body;
  const JOTFORM_API_KEY = process.env.JOTFORM_API_KEY;

  try {
    const updateRes = await fetch(
      `https://api.jotform.com/submission/${submissionId}?apiKey=${JOTFORM_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `submission[status]=${encodeURIComponent(status)}`,
      }
    );
    const data = await updateRes.json();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
