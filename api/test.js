const express = require('express');
const connectDB = require('../db');

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('Hello MongoDB!');
});

module.exports = app;
