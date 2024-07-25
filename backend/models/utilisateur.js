const pool = require('../config/db');

const User = {
  async create(user) {
    const { nom, email, mot_de_passe, numero_telephone, adresse } = user;
    const query = `INSERT INTO Utilisateurs (nom, email, mot_de_passe, numero_telephone, adresse, cree_a, mis_a_jour_a) VALUES (?, ?, ?, ?, ?, NOW(), NOW())`;
    const result = await pool.query(query, [nom, email, mot_de_passe, numero_telephone, adresse]);
    return result.insertId;
  },

  async findByEmail(email) {
    const query = `SELECT * FROM Utilisateurs WHERE email = ?`;
    const rows = await pool.query(query, [email]);
    return rows[0];
  }
};

module.exports = User;
