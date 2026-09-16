// Vercel Serverless Function - Email marketing capture (MailerLite)
// Adds/updates a subscriber in a MailerLite group so it can receive campaigns.
// Requires MAILERLITE_API_KEY and MAILERLITE_GROUP_ID env vars (set in Vercel project settings).

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};

  const isValidEmail = typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    console.error('MailerLite not configured: missing MAILERLITE_API_KEY or MAILERLITE_GROUP_ID');
    return res.status(503).json({ error: 'Email service not configured yet' });
  }

  try {
    const mlRes = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email,
        groups: [groupId]
      })
    });

    if (!mlRes.ok) {
      const errBody = await mlRes.json().catch(() => ({}));
      console.error('MailerLite error:', mlRes.status, errBody);
      return res.status(502).json({ error: 'Failed to save contact' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return res.status(500).json({ error: 'Failed to save contact' });
  }
}
