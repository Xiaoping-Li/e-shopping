const express = require('express');
const CartsRouter = express.Router();
const Carts = require('../models/Cart');

CartsRouter.get('', (req, res) => {
    const { userID } = req.query;
    Carts
        .find({userID, status: "Pending"})
        .then(cart => {
            if (cart.length) {
                res.status(200).json(cart);
            } else {
                return Carts.create({userID});
            }    
        })
        .then(cart => res.status(200).json(cart))
        .catch(err => console.log(err));
});

CartsRouter.post('', (req, res) => {
    const cart = req.body;
    Carts
        .create(cart)
        .then(result => {
            res.status(200).json(result);
            console.log(result);
        })
        .catch(err => console.log(err));
});

CartsRouter.put('', (req, res) => {
    const { id } = req.query;
    const update = req.body;
    Carts
        .updateOne({_id: id}, update)
        .then(result => res.status(201).json(result))
        .catch(err => console.log(err));
});

module.exports = CartsRouter;