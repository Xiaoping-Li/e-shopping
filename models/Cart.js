const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Success'],
        default: 'Pending',
    },
    pets: [
        {
            pet: {
                type: Schema.Types.ObjectId,
                ref: 'pet',
            },
            amount: {
                type: Number,
                default: 1,
            } 
        }   
    ],
    createAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date, 
});

const CartModel = mongoose.model('cart', CartSchema);

module.exports = CartModel;