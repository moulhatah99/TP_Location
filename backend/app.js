const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const authRoute = require('./routes/authRoute');
const vehiculeRoute = require('./routes/vehiculeRoute');
const reservationRoute = require('./routes/reservationRoute');
const paiementRoute = require('./routes/paiementRoute');
const avisRoute = require('./routes/avisRoute');

const app = express();  

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoute);
app.use('/api/vehicules', vehiculeRoute);
app.use('/api/reservations', reservationRoute);
app.use('/api/paiement', paiementRoute);
app.use('/api/avis', avisRoute);

module.exports = app;
