const Reservation = require('../models/reservations');

//faire une reservation
exports.createReservation = async (req, res) => {
  try {
    const reservationId = await Reservation.create(req.body);
    res.status(201).json({ reservationId });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la réservation' });
  }
};

exports.getReservationsByUserId = async (req, res) => {
  try {
    const reservations = await Reservation.getByUserId(req.params.userId);
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des réservations' });
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.getById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: 'Réservation non trouvée' });
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la réservation' });
  }
};

//statut reservation
exports.updateReservationStatus = async (req, res) => {
  try {
    await Reservation.updateStatus(req.params.id, req.body.statut);
    res.status(200).json({ message: 'Statut de la réservation mis à jour' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du statut de la réservation' });
  }
};
