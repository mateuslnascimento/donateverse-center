'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import {connectionString} from './config';

const app = express();
const router = express.router();

mongoose.connect(connectionString);

import {DonationCenter} from './models/donationCenter';

import donationRoute from './routes';

app.use(
    bodyParser.json({
        limit: '5mb'
    }),
    bodyParser.urlencoded({
        extended: false,
    })
);

export default app; 