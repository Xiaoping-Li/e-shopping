const express = require('express');
const STRIPE_SECRET_KEY = require('../config/keys_dev').STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_SECRET_KEY);
const PaymentRouter = express.Router();


PaymentRouter.post('', (req, res) => {
    const charge = req.body;
    return stripe.charges.create(charge)
    .then(result => res.status(200).json(result))
    .catch(error => console.log("Error when try to charge order: " + error));
});

module.exports = PaymentRouter;