const express = require('express');
const PaymentRouter = express.Router();
const STRIPE_SECRET_KEY = require('../config/keys_dev').STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_SECRET_KEY);

PaymentRouter.post('', (req, res) => {
    return stripe.charges.create({
        amount: req.body.amount,
        currency: req.body.currency,
        source: req.body.source,
        description: req.body.description,
    })
    .then(result => res.status(200).json(result))
    .catch(error => console.log(error));
});

module.exports = PaymentRouter;