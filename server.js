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
        return stripe.charges.create({
            amount: req.body.amount,
            currency: req.body.currency,
            source: req.body.source,
            description: req.body.description,
        })
        .then(result => res.status(200).json(result))
        .catch(error => console.log(error));
})

server.listen(PORT, () => console.log(`server listen on ${PORT}`));