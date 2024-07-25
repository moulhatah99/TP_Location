const express = require('express');
const reservationController = require('../controllers/reservationsController');
const router = express.Router();

router.post('/', reservationController.createReservation);
router.get('/user/:userId', reservationController.getReservationsByUserId);
router.get('/:id', reservationController.getReservationById);
router.put('/:id', reservationController.updateReservationStatus);

module.exports = router;
