const express = require('express');
const app = express();

// full syntax
// app.get('/', (req, res, next) => {})

app.get('/', (req, res) => {
    res.status(500).send("Hi");
});

app.listen(3000);