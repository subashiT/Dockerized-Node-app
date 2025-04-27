const express = require('express');
const app = express();
const port = 3000;

// Basic routes
app.get('/', (req, res) => {
    res.send('Hello, welcome to our Node.js app!');
});

app.get('/about', (req, res) => {
    res.send('This is a basic web app to test our CI/CD pipeline.');
});

// Start server
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
