// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

// Handle registration form submission
app.post('/submit', (req, res) => {
  const { userid, password, confirm_password } = req.body;

  // Basic validation
  if (!userid || !password || !confirm_password) {
    return res.status(400).send('Error: All fields are required.');
  }

  if (password !== confirm_password) {
    return res.status(400).send('Error: Passwords do not match.');
  }

  // Log the received data to console
  console.log('----------------------------');
  console.log('New registration received!');
  console.log(`UserID: ${userid}`);
  console.log(`Password: ${password}`);
  console.log('----------------------------');

  // Send response back to the user
  res.send('Registration received! Check server console for UserID and Password.');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
