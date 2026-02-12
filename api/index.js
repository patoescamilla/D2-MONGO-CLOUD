const express = require('express');
const connectDB = require('../db');
require('dotenv').config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Define a simple route
app.get('/api', (req, res) => {
    res.send('Hello MongoDB!');
});

module.exports = app;
