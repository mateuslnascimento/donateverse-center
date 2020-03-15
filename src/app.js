'use strict';

const dotEnv = require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true});

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