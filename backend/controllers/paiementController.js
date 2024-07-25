const Paiement = require('../models/paiements');

exports.createPaiement = async (req, res) => {
  try {
    const paiementId = await Paiement.create(req.body);
    res.status(201).json({ paiementId });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du paiement' });
  }
};
