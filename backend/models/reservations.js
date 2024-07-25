const pool = require('../config/db');

const Reservation = {
  async create(reservation) {
    const { utilisateur_id, vehicule_id, date_debut, date_fin, statut, prix_total } = reservation;
    const query = `INSERT INTO Reservations (utilisateur_id, vehicule_id, date_debut, date_fin, statut, prix_total, cree_a, mis_a_jour_a) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`;
    const result = await pool.query(query, [utilisateur_id, vehicule_id, date_debut, date_fin, statut, prix_total]);
    return result.insertId;
  },

  async getByUserId(utilisateur_id) {
    const query = `SELECT * FROM Reservations WHERE utilisateur_id = ?`;
    const rows = await pool.query(query, [utilisateur_id]);
    return rows;
  },

  async getById(reservation_id) {
    const query = `SELECT * FROM Reservations WHERE reservation_id = ?`;
    const rows = await pool.query(query, [reservation_id]);
    return rows[0];
  },

  async updateStatus(reservation_id, statut) {
    const query = `UPDATE Reservations SET statut = ?, mis_a_jour_a = NOW() WHERE reservation_id = ?`;
    await pool.query(query, [statut, reservation_id]);
  }
};

module.exports = Reservation;
