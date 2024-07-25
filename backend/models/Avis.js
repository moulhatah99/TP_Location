// backend/models/Review.js
const pool = require('../config/db');

const Avis = {
  async create(Avis) {
    const { utilisateur_id, vehicule_id, note, commentaire } = review;
    const query = `INSERT INTO Avis (utilisateur_id, vehicule_id, note, commentaire, cree_a) VALUES (?, ?, ?, ?, NOW())`;
    const result = await pool.query(query, [utilisateur_id, vehicule_id, note, commentaire]);
    return result.insertId;
  },

  async getByVehiculeId(vehicule_id) {
    const query = `SELECT * FROM Avis WHERE vehicule_id = ?`;
    const rows = await pool.query(query, [vehicule_id]);
    return rows;
  }
};

module.exports = Avis;
