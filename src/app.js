'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/microservices?readPreference=primary';

const app = express();
const router = express.Router();

console.log(connectionString);
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

const {DonationCenter} = require('./models/donationCenter');

const donationRoute = require('./routes');

app.use(
    bodyParser.json({
        limit: '5mb'
    }),
    bodyParser.urlencoded({
        extended: false,
    }),
);

app.use('/DonationCenter', donationRoute);

module.exports = app; 