const express = require('express');
const avisController = require('../controllers/avisController');
const router = express.Router();

router.post('/', avisController.createAvis);
router.get('/vehicle/:vehicleId', avisController.getAvisByVehiculeId);

module.exports = router;
