const express = require('express');
const cors = require('cors');
const fs = require('fs');
const http = require('http'); // Import the http module if you plan to create an HTTP server.
const app = express();
const budget = require("./data.json");
const port = 3000;

app.use(cors());
app.get('/hello', (req, res) => {
res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
    });

app.listen(port, () => {
console.log(`Example API listening at http://localhost:${port}`);

});
