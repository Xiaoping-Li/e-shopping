const express = require('express');
const CartsRouter = express.Router();
const Carts = require('../models/Cart');

CartsRouter.post('', (req, res) => {
    const { cart } = req.body;
    Carts
        .create(cart)
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err));
});

CartsRouter.put('', (req, res) => {
    const { id } = req.query;
    const { update } = req.body;
    Carts
        .updateOne({_id: id}, update)
        .then(result => res.status(201).json(result))
        .catch(err => console.log(err));
});

module.exports = CartsRouter;