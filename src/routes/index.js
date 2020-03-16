'use strict';

const express = require('express');

const donationCenterController = require('../controllers/donationCenter');

const router = express.Router();

router.get('/', donationCenterController.get);
router.post('/', donationCenterController.post);
router.get('/:id', donationCenterController.getById);
router.put('/:id', donationCenterController.update);
router.delete('/:id', donationCenterController.remove);

module.exports = router;