const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const STRIPE_SECRET_KEY = require('./config/keys_dev').STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_SECRET_KEY);

const db = require('./config/keys_dev').mongoURI;

const PORT = process.env.PORT || 5000;

const server = express();

// Import Routers
const PetsRouter = require('./routers/pets');

server.use(bodyParser.json());
server.use(cors({
    origin: true,
    credentials: true,
}));

// Using Routers
server.use('/pets', PetsRouter);



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