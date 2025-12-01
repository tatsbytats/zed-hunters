# ZedHunters — Node.js form handler

This repository contains a static frontend and a small Node.js Express server that handles the whitelist form submission and forwards a request to a Hostinger trigger URL.

Quick start

1. Install dependencies:

```powershell
cd "d:\Pogi Justine\Documents\ZedHunters"
npm install
```

2. Set the Hostinger trigger URL and run the server:

```powershell
$env:TRIGGER_URL = 'https://example.com/trigger'
npm start
```

3. Open `http://localhost:3000` in your browser and submit the form.

Notes

- The server listens on `PORT` or `3000` by default.
- The legacy `submit.php` remains in the repo but is no longer used by the form.
