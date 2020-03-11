'use strict';

import express from 'express';

import donationCenterController from '../controllers/donationCenter';

const router = express.Router();

router.get('/', donationCenterController.get);
router.get('/:id', donationCenterController.getById);
router.post('/', donationContdonationCenterControlleroller.post);
router.delete('/:id', donationCenterController.remove);