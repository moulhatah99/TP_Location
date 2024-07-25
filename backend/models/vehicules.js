const pool = require('../config/db');

const Vehicule = {
  async create(vehicule) {
    const { proprietaire_id, marque, modele, annee, plaque_immatriculation, statut, localisation, tarif_journalier } = vehicle;
    const query = `INSERT INTO Vehicules (proprietaire_id, marque, modele, annee, plaque_immatriculation, statut, localisation, tarif_journalier, cree_a, mis_a_jour_a) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`;
    const result = await pool.query(query, [proprietaire_id, marque, modele, annee, plaque_immatriculation, statut, localisation, tarif_journalier]);
    return result.insertId;
  },

  async getAll() {
    const query = `SELECT * FROM Vehicules`;
    const rows = await pool.query(query);
    return rows;
  },

  async getById(vehicule_id) {
    const query = `SELECT * FROM Vehicules WHERE vehicule_id = ?`;
    const rows = await pool.query(query, [vehicule_id]);
    return rows[0];
  }
};

module.exports = Vehicule;
