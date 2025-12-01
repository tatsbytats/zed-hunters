const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle registration form submission BEFORE static files
app.post('/submit', (req, res) => {
  const { userid, password, confirm_password } = req.body;

  if (!userid || !password || !confirm_password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (password !== confirm_password) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  console.log('----------------------------');
  console.log('New registration received!');
  console.log(`UserID: ${userid}`);
  console.log(`Password: ${password}`);
  console.log('----------------------------');

  res.json({
    userID: userid,
    password: password
  });
});

// Serve static frontend files for all other routes
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
