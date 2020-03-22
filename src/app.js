'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotEnv = require('dotenv').config();
const swagger = require('swagger-node-express');

const app = express();
const router = express.Router();

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

swagger.setAppHandler(app);
swagger.configure("http://localhost:9002/v1", "0.1")

module.exports = app; 