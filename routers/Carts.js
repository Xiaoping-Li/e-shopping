const express = require('express');
const CartsRouter = express.Router();
const Carts = require('../models/Cart');

// If User has "Pending" cart, return this cart
// Else create a "Pending" cart, and return the new created cart
CartsRouter.get('', (req, res) => {
    const { userID } = req.query;
    Carts
        .find({userID, status: "Pending"})
        .populate('pets', '_id name img price count')
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
    const { petID } = req.query;
    const { status } = req.query;

    if (petID) {
        Carts
            .updateOne({_id: id}, { $push: { pets: petID }})
            .then(result => res.status(201).json(result))
            .catch(err => console.log(err));
    } else if (status) {
        Carts
            .updateOne({_id: id}, { status })
            .then(result => res.status(201).json(result))
            .catch(err => console.log(err));
    }
    
});

module.exports = CartsRouter;