const Vehicule = require('../models/vehicules');

//ajout vehicule
exports.addVehicule = async (req, res) => {
  try {
    const vehiculeId = await Vehicule.create(req.body);
    res.status(201).json({ vehiculeId });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du véhicule' });
  }
};

//recherche vehicule
exports.getVehicules = async (req, res) => {
  try {
    const vehicules = await Vehicule.getAll();
    res.status(200).json(vehicules);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des véhicules' });
  }
};

exports.getVehiculeById = async (req, res) => {
  try {
    const vehicule = await Vehicule.getById(req.params.id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Véhicule non trouvé' });
    }
    res.status(200).json(vehicule);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du véhicule' });
  }
};
