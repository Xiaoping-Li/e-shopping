const express = require('express');
const OrdersRouter = express.Router();
const Orders = require('../models/User');

OrdersRouter.post('', (req, res) => {
    const { order } = req.body;
    Orders
        .create(order)
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err));
});

OrdersRouter.get('', (req, res) => {
    const { id } = req.query;
    Orders
        .find({userID: id})
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err));
});

module.exports = OrdersRouter;