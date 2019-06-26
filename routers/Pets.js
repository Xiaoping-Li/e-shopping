const express = require('express');
const Pets = require('../models/Pet');
const PetsRouter = express.Router();

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

PetsRouter.put('', (req, res) => {
    const { id } = req.query;
    const { count } = req.query;

    Pets
        .updateOne({_id: id}, { count: Number(count) })
        .then(result => res.status(201).json(result))
        .catch(err => console.log(err));
});

module.exports = PetsRouter;

