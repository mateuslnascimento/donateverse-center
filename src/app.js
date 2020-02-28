'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const router = express.router();

mongoose.connect();

app.use(
    bodyParser.json({
        limit: '5mb'
    }),
    bodyParser.urlencoded({
        extended: false,
    })
);

export default app;