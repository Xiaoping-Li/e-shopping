const express = require('express');
const UsersRouter = express.Router();
const Users = require('../models/User');

UsersRouter.get('', (req, res) => {
    Users
        .find()
        .then(result => res.status(200).json(result))
        .catch(err => console.log(err));
});

UsersRouter.put('', (req, res) => {
    const { id } = req.query;
    const update = req.body;
    Users
        .updateOne({_id: id}, {address: update})
        .then(result => res.status(201).json(result))
        .catch(err => console.log("Error when try to update user address: " + err));
});

module.exports = UsersRouter;