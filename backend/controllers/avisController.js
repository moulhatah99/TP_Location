const Avis = require('../models/Avis');

exports.createAvis = async (req, res) => {
  try {
    const avisId = await Avis.create(req.body);
    res.status(201).json({ avisId });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'avis' });
  }
};

exports.getAvisByVehiculeId = async (req, res) => {
  try {
    const reviews = await Avis.getByVehiculeId(req.params.vehiculeId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des avis' });
  }
};
