// Vercel Serverless Function - Email marketing capture (Resend)
// Adds a contact to a Resend Audience so it can receive broadcasts.
// Requires RESEND_API_KEY and RESEND_AUDIENCE_ID env vars (set in Vercel project settings).

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

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    console.error('Resend not configured: missing RESEND_API_KEY or RESEND_AUDIENCE_ID');
    return res.status(503).json({ error: 'Email service not configured yet' });
  }

  try {
    const resendRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        unsubscribed: false
      })
    });

    // Resend returns 409 if the contact already exists - treat as success.
    if (!resendRes.ok && resendRes.status !== 409) {
      const errBody = await resendRes.json().catch(() => ({}));
      console.error('Resend error:', resendRes.status, errBody);
      return res.status(502).json({ error: 'Failed to save contact' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return res.status(500).json({ error: 'Failed to save contact' });
  }
}
