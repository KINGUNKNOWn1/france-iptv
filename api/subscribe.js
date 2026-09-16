// Vercel Serverless Function - Email marketing capture (Brevo)
// Adds/updates a contact in Brevo so it can receive campaigns and automations.
// Requires BREVO_API_KEY and BREVO_LIST_ID env vars (set in Vercel project settings).

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

  const { email, source, plan } = req.body || {};

  const isValidEmail = typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    console.error('Brevo not configured: missing BREVO_API_KEY or BREVO_LIST_ID');
    return res.status(503).json({ error: 'Email service not configured yet' });
  }

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email,
        listIds: [Number(listId)],
        updateEnabled: true,
        attributes: {
          SOURCE: source || 'website',
          PLAN: plan || undefined
        }
      })
    });

    if (!brevoRes.ok && brevoRes.status !== 204) {
      const errBody = await brevoRes.json().catch(() => ({}));
      console.error('Brevo error:', brevoRes.status, errBody);
      return res.status(502).json({ error: 'Failed to save contact' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    return res.status(500).json({ error: 'Failed to save contact' });
  }
}
