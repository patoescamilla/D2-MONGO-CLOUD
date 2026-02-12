const express = require('express');
const connectDB = require('../db');

const app = express();

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello MongoDB!');
});

// 👇 ESTA LÍNEA ES CLAVE
module.exports = (req, res) => {
    return app(req, res);
};
