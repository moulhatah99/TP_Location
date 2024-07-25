const express = require('express');
const vehiculeController = require('../controllers/vehiculeController');
const router = express.Router();

router.post('/', vehiculeController.addVehicule);
router.get('/', vehiculeController.getVehicules);
router.get('/:id', vehiculeController.getVehiculeById);

module.exports = router;
