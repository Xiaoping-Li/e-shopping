const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'User name is required'],
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, 'Email or Phone number is required'],
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    thumbnail: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6HFhpwNrwiye9Qp_o5StOPngPZTTq-If5Fksap0fCCYUE5kusg',
    },
    address: {
        recipient: String,
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    },
    creatAt: {
        type: Date,
        default: Date.now,
    },
    reset_password_token: String,
    reset_password_expires: Date,
},
{runSettersOnQuery: true});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;