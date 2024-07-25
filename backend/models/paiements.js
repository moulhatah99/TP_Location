const pool = require('../config/db');

const Paiement = {
  async create(Paiement) {
    const { reservation_id, montant, methode_paiement, date_paiement, statut } = payment;
    const query = `INSERT INTO Paiements (reservation_id, montant, methode_paiement, date_paiement, statut) VALUES (?, ?, ?, ?, ?)`;
    const result = await pool.query(query, [reservation_id, montant, methode_paiement, date_paiement, statut]);
    return result.insertId;
  }
};

module.exports = Paiement;
