const express = require('express');
const OrdersRouter = express.Router();
const Orders = require('../models/Order');

OrdersRouter.get('', (req, res) => {
    const { userID, status } = req.query;

    Orders
        .findOne({userID, status})
        .then(result => res.status(200).json(result))
        .catch(err => console.log("Error when try to get pending order by ID: " + err));
     

    // Orders
    //     .find()
    //     .then(result => res.status(200).json(result))
    //     .catch(err => console.log(err));   
});

OrdersRouter.post('', (req, res) => {
    const order = req.body;
    Orders
        .create(order)
        .then(result => res.status(200).json(result))
        .catch(err => console.log("Error when try to create order: " + err));
});

OrdersRouter.put('', (req, res) => {
    const { id } = req.query;
    const address = req.body;
    Orders
        .updateOne({ _id: id }, { address })
        .then(result => res.status(200).json(result))
        .catch(err => console.log("Error when try to update order address: " + err));
})



module.exports = OrdersRouter;