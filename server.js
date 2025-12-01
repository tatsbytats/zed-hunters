const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const TRIGGER_URL = process.env.TRIGGER_URL || 'YOUR_HOSTINGER_TRIGGER_URL';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/submit', async (req, res) => {
  try {
    const steamID = req.body.steamid || '';
    const userID = req.body.userid || '';
    const password = req.body.password || '';
    const confirm = req.body.confirm_password || '';

    if (!steamID || !userID || !password || !confirm) {
      return res.status(400).send('Error: All fields are required.');
    }

    if (password !== confirm) {
      return res.status(400).send('Error: Passwords do not match.');
    }

    const fullUrl = `${TRIGGER_URL}?steamid=${encodeURIComponent(steamID)}` +
      `&userid=${encodeURIComponent(userID)}` +
      `&instance={@InstanceName}` +
      `&users={@UserCount}` +
      `&uptime={@Uptime}` +
      `&payload={@Payload}`;

    await axios.get(fullUrl, { timeout: 10000 });

    res.send('Your whitelist request has been submitted successfully!');
  } catch (err) {
    console.error('Trigger request failed:', err && err.message ? err.message : err);
    res.status(500).send('Error: Unable to connect to Hostinger trigger. Check your URL and server configuration.');
  }
});

// Serve static site (index.html, script.js, styles.css)
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
