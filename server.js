const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/trigger', (req, res) => {
    const { userid, password } = req.body;

    console.log('----------------------------');
    console.log('Trigger received!');
    console.log(`UserID: ${userid}`);
    console.log(`Password: ${password}`);
    console.log('----------------------------');

    // Respond back
    res.send('Trigger received successfully!');
});

app.listen(port, () => {
    console.log(`Trigger server running at http://localhost:${port}`);
});
