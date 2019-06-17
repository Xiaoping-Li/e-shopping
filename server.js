const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');

const SESSION_SECRET = require('./config/keys_dev').SESSION_SECRET;
const STRIPE_SECRET_KEY = require('./config/keys_dev').STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_SECRET_KEY);
const Users = require('./models/User');

const db = require('./config/keys_dev').mongoURI;

const PORT = process.env.PORT || 5000;

const server = express();

// Import Routers
const PetsRouter = require('./routers/pets');
const UsersRouter = require('./routers/Users');
const OrdersRouter = require('./routers/Orders');
const CartsRouter = require('./routers/Carts');

server.use(bodyParser.json());
server.use(cors({
    origin: true,
    credentials: true,
}));

// Sign Up User
server.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 11, (err, hashPW) => {
        if (err) {
            res.status(422).json({"error": err});
        } else {
            const user = req.body;
            user.password = hashPW;
            Users
                .create(user)
                .then(result => res.status(200).json({success: true, result}))
                .catch(err => console.log(err));
        }
    });
});

// Using Routers
server.use('/pets', PetsRouter);
server.use('/users', UsersRouter);
server.use('/orders', OrdersRouter);
server.use('/carts', CartsRouter);


// Charge customer with token
server.post('/payment', (req, res) => {
        return stripe.charges.create({
            amount: req.body.amount,
            currency: req.body.currency,
            source: req.body.source,
            description: req.body.description,
        })
        .then(result => res.status(200).json(result))
        .catch(error => console.log(error));
});


// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose
    .connect(db, {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

server.listen(PORT, () => console.log(`server listen on ${PORT}`));