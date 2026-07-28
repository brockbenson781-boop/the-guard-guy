export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();

  const { trackingNumber } = req.body || req.query;
  if (!trackingNumber) return res.status(400).json({ error: "Tracking number required" });

  // Detect carrier from tracking number format
  const num = trackingNumber.replace(/\s/g, "").toUpperCase();
  let carrier = "usps";
  if (/^1Z/.test(num)) carrier = "ups";
  else if (/^\d{12}$/.test(num) || /^\d{15}$/.test(num)) carrier = "fedex";

  try {
    // USPS tracking via their free API
    if (carrier === "usps") {
      const USPS_USER_ID = process.env.USPS_USER_ID || "";
      if (!USPS_USER_ID) {
        // Return mock for testing
        return res.status(200).json({
          carrier: "USPS",
          trackingNumber: num,
          status: "In Transit",
          location: "Los Angeles, CA",
          estimatedDelivery: "Tomorrow",
          events: [
            { date: "Jul 27, 2026", time: "8:00 AM", description: "In Transit to Next Facility", location: "Los Angeles, CA" },
            { date: "Jul 26, 2026", time: "6:00 PM", description: "Departed Post Office", location: "Murrieta, CA" },
            { date: "Jul 26, 2026", time: "2:00 PM", description: "Accepted at Post Office", location: "Murrieta, CA" },
          ]
        });
      }
      const xml = `<TrackFieldRequest USERID="${USPS_USER_ID}"><Revision>1</Revision><ClientIp>127.0.0.1</ClientIp><SourceId>TheGuardGuy</SourceId><TrackID ID="${num}"></TrackID></TrackFieldRequest>`;
      const uspsRes = await fetch(`https://secure.shippingapis.com/ShippingAPI.dll?API=TrackV2&XML=${encodeURIComponent(xml)}`);
      const text = await uspsRes.text();
      const statusMatch = text.match(/<EventTime>(.*?)<\/EventTime>/);
      const descMatch = text.match(/<Event>(.*?)<\/Event>/);
      const cityMatch = text.match(/<EventCity>(.*?)<\/EventCity>/);
      return res.status(200).json({
        carrier: "USPS",
        trackingNumber: num,
        status: descMatch ? descMatch[1] : "Unknown",
        location: cityMatch ? cityMatch[1] : "",
        raw: text,
      });
    }

    // UPS tracking
    if (carrier === "ups") {
      return res.status(200).json({
        carrier: "UPS",
        trackingNumber: num,
        status: "In Transit",
        location: "Louisville, KY Hub",
        note: "UPS API key required for live tracking. Add UPS_ACCESS_KEY to environment variables.",
      });
    }

    return res.status(200).json({ carrier: "Unknown", trackingNumber: num, status: "Enter tracking number to check status" });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
