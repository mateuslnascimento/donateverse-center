'use strict';

import express from 'express';

import {donationController} from '../controllers/donationCenter';

const router = express.Router();

router.get('/', donationController.get);