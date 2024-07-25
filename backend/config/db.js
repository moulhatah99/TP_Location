const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'location_vehicule',
  connectionLimit: 5,
});

module.exports = pool;
