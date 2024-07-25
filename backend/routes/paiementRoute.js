const express = require('express');
const paiementController = require('../controllers/paiementController');
const router = express.Router();

router.post('/', paiementController.createPaiement);

module.exports = router;
