const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const STRIPE_SECRET_KEY = require('./config/keys_dev').STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_SECRET_KEY);

const PORT = process.env.PORT || 5000;

const server = express();

server.use(bodyParser.json());
server.use(cors({
    origin: true,
    credentials: true,
}));

// Charge customer with token
server.post('/payment', (req, res) => {
    return stripe
})

server.listen(PORT, () => console.log(`server listen on ${PORT}`));