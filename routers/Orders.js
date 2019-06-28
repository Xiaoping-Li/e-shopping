const express = require('express');
const Orders = require('../models/Order');
const OrdersRouter = express.Router();


OrdersRouter.get('', (req, res) => {
    const { userID, status } = req.query;

    if (status) {
        Orders
            .findOne({userID, status})
            .then(result => res.status(200).json(result))
            .catch(err => console.log("Error when try to get pending order by ID: " + err));
    } else {
        Orders
            .find({userID, status: { $ne: "Pending" }})
            .sort('-createAt')
            .limit(20)
            .populate({ path: 'cartID', populate: { path: 'pets.pet'}})
            .then(result => res.status(200).json(result))
            .catch(err => console.log(err)); 
    }      
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
    const { total } = req.query;
    const { status } = req.query;
    const address = req.body;
      
    if (status) {
        Orders
            .updateOne({ _id: id }, { status })
            .then(result => res.status(200).json(result))
            .catch(err => console.log("Error when try to update order status: " + err));
    } else if (total) {
        Orders
            .updateOne({ _id: id }, { total })
            .then(result => res.status(200).json(result))
            .catch(err => console.log("Error when try to update order total amount: " + err));
        
    } else if (address) {
        Orders
            .updateOne({ _id: id }, { address })
            .then(result => res.status(200).json(result))
            .catch(err => console.log("Error when try to update order address: " + err));
    }   
})



module.exports = OrdersRouter;