const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending','Packaging', 'Delivering', 'Delivered'],
        default: 'Pending',
    },
    cartID: {
        type: Schema.Types.ObjectId,
        ref: 'cart',
        required: true,
    },
    token: String,
    subTotal: Number,
    address: {
        recipient: String,
        street: String,
        city: String,
        state: String,
        zip: String,
        country: {
            type: String,
            default: "US",
        },
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const OrderModel = mongoose.model('order', OrderSchema);

module.exports = OrderModel;