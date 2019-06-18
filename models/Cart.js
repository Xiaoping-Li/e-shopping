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
            type: Schema.Types.ObjectId,
            ref: 'pet',
        }
    ],
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const CartModel = mongoose.model('cart', CartSchema);

module.exports = CartModel;