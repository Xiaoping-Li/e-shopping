const express = require('express');
const PetsRouter = express.Router();
const Pets = require('../models/Pet');

PetsRouter.post('', (req, res) => {
    const pet = req.body;
    Pets
        .create(pet)
        .then(pet => res.status(201).json(pet))
        .catch(err => console.log(err));
});

PetsRouter.get('', (req, res) => {
    const { category } = req.query;
    Pets
        .find({category})
        .then(pets => res.status(200).json(pets))
        .catch(err => console.log(err));
});


module.exports = PetsRouter;

