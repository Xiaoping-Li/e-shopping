const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Aquarium', 'Bird', 'Fluffy', 'Reptile'],
    },
    img: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

const PetModel = mongoose.model('pet', PetSchema);

module.exports = PetModel;