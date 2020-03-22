'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotEnv = require('dotenv').config();
const swaggerUi = require('swagger-node-express');
const app = express();
const router = express.Router();

const { swaggerDocument } = ('./swagger/document');

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

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