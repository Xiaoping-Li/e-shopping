const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const session = require('express-session');

const SESSION_SECRET = require('./config/keys_dev').SESSION_SECRET;
const Users = require('./models/User');
const db = require('./config/keys_dev').mongoURI;

const PORT = process.env.PORT || 5000;

const server = express();

// Import Routers
const PetsRouter = require('./routers/pets');
const UsersRouter = require('./routers/Users');
const OrdersRouter = require('./routers/Orders');
const CartsRouter = require('./routers/Carts');
const PaymentRouter = require('./routers/Payment');

server.use(bodyParser.json());
server.use(cors({
    origin: true,
    credentials: true,
}));
server.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

// Middleware: Validate user for all the routers, except '/signin' and '/singup'
server.use((req, res, next) => {
    if (req.originalUrl === '/signin' || req.originalUrl === '/signup') return next();
    if (!req.session.email) {
        res.json({msg: "User is not logged in"});
        return;
    } 
    next();
});

// Sign Up User
server.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 11, (err, hashedPW) => {
        if (err) {
            res.status(422).json({"error": err});
        } else {
            const user = req.body;
            user.password = hashedPW;
            Users
                .create(user)
                .then(result => res.status(200).json({success: true, result}))
                .catch(err => console.log(err));
        }
    });
});

// Sign In User
server.post('/signin', (req, res) => {
    const { email } = req.body;
    Users
        .findOne({ email })
        .then(user => {
            const hashedPW = user.password;
            bcrypt
                .compare(req.body.password, hashedPW)
                .then(result => {
                    if (!result) throw new Error();
                    req.session.email = req.body;
                    req.user = user;
                    // user.password cound not be deleted, change to undefined to hide the password
                    req.user.password = undefined;
                    req.user.creatAt = undefined;
                    req.user.__v = undefined;
                    res.json({success: true, user: req.user});
                })
                .catch(err => res.json({msg: "Failed when comparing password"}));
        })
        .catch(err => res.json({msg: "Failed to find the user"}));
});

// Sign Out User
server.post('/signout', (req, res) => {
    delete req.session.email;
    delete req.user;
    res.json({success: true, msg: "User Sign Out", session: req.session});
});

// Using Routers
server.use('/pets', PetsRouter);
server.use('/users', UsersRouter);
server.use('/orders', OrdersRouter);
server.use('/carts', CartsRouter);
server.use('/payment', PaymentRouter);


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