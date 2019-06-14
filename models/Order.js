const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    status: {
        type: String,
        enum: ['Packaging', 'Delivering', 'Delivered'],
    },
    cartID: {
        type: Schema.Types.ObjectId,
        ref: 'cart',
    },
    token: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    address: {
        recipient: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zip: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

const OrderModel = mongoose.model('order', OrderSchema);

module.exports = OrderModel;