const express = require('express');
const CartsRouter = express.Router();
const Carts = require('../models/Cart');
const Pets = require('../models/Pet');


// If "pending" cart exist, populate pets info
// Else return empty cart
CartsRouter.get('', (req, res) => {
    const { userID } = req.query;
    Carts
        .find({userID, status: "Pending"})
        .populate('pets.pet', '_id name img price count')
        .then(cart => {
            res.status(200).json(cart);   
        })
        .catch(err => console.log(err));
});

CartsRouter.put('', (req, res) => {
    const { userID } = req.query;
    const { petID } = req.query;
    const { status } = req.body;
    const newQuantity  = Number(req.body.new);
    const oldQuantity = Number(req.body.old);

    if (newQuantity && oldQuantity) {
        // Update cart item quantity with newQuantity
        Carts
            .updateOne(
                { userID, status: "Pending", "pets._id": petID },
                {$set: {
                    updatedAt: new Date(),
                    "pets.$.quantity": newQuantity,
                    }
                }
            )
            .then(result => {
                // If have enough in stock, update reserved quantity in Pets
                const delta = newQuantity - oldQuantity;
                return Pets
                    .updateOne(
                        {
                            _id: petID,
                            "reserved.userID": userID,
                            count: { $gte: delta }
                        },
                        {
                            $inc: { count: -delta },
                            $set: {
                                "reserved.$.quantity": newQuantity,
                                updatedAt: new Date()
                            }
                        }
                    );
            })
            .then(result => {
                // If no enough in stock, corresponding "reserved" will not be modified
                // In this case, rollback the update of cart item with oldQuantity
                if (result.n === 0) {
                    return Carts
                        .updateOne(
                            { userID, status: "Pending", "pets._id": petID },
                            {$set: {
                                updatedAt: new Date(),
                                "pets.$.quantity": oldQuantity,
                                }
                            }
                        )
                        .then(result => res.status(201).json({"msg": "Not enough in stock", result}))
                } else {
                    return res.status(201).json({success: true, result});
                }
            })
            .catch(err => console.log(err));

    } else if (newQuantity === 0) {
        // If newQuantity = 0, means user remove the item from cart 
        // 1. Remove the item from cart list
        // 2. Add reserved "oldQuantity" to pet.count, and remove the item from pet.reserved list
        Carts
            .updateOne(
                { userID, status: "Pending" },
                { 
                    $set: { updatedAt: new Date()},
                    $pull: { pets: { _id: petID }}
                }
            )
            .then(result => {
                return Pets
                    .updateOne(
                        {
                            _id: petID,
                            "reserved.userID": userID,
                        },
                        {
                            $inc: { count: oldQuantity },
                            $pull: { reserved: { userID }}
                        }
                    );
            })
            .then(result => res.status(201).json({msg: "Rollback pet from cart and reserved list", result}))
            .catch(err => console.log("Errors when remove cart item: " + err))
    } else if (petID) {
        // Push pet to cart, if cart doesn't exist, create one first
        Carts
            .updateOne(
                {userID, status: 'Pending'}, 
                { 
                    $set: { updatedAt: new Date()},
                    $push: { pets: { _id: petID, pet: petID }}
                },
                { upsert: true}
            )
            .then(result => {
                if (result.ok) {
                    // Reserve 1 pet for the user, update Pets with the new reservation
                    const quantity = 1;
                    return Pets
                        .updateOne(
                            { 
                                _id: petID, 
                                count: { $gte: quantity }
                            },
                            { 
                                $inc: { count: -quantity},
                                $push: {reserved: { userID, quantity }}
                            }
                        )
                }
            })
            .then(result => res.status(201).json(result))
            .catch(err => console.log("Error when try to add pet to cart: " + err));
    } else if (status) {
        // When change status to success, removed all the cart items from reserved list 
        Carts
            .find({userID, status: "Pending"})
            .then(cart => {
                const petsPromises = cart[0].pets.map(item => {
                    const id = item._id;
                    return Pets
                        .updateOne(
                            {
                                _id: id,
                                "reserved.userID": userID,
                            },
                            {
                                $pull: { reserved: { userID }}
                            }
                        )
                });

                return Promise.all(petsPromises);   
            })
            .then(result => {
                return Carts.updateOne(
                        { userID, status: 'Pending' }, 
                        { 
                            status: 'Success',
                            $set: { updatedAt: new Date()}, 
                        }
                    );
            })
            .then(result => res.status(201).json(result))
            .catch(err => console.log("Error when try to change cart status: " + err));

    }     
});


module.exports = CartsRouter;