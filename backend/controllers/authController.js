const User = require('../models/utilisateur');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//creation compte
exports.signup = async (req, res) => {
  try {
    const { nom, email, mot_de_passe, numero_telephone, adresse } = req.body;
    const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
    const userId = await User.create({ nom, email, mot_de_passe: hashedPassword, numero_telephone, adresse });
    res.status(201).json({ userId });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
  }
};

//connexion mdp
exports.login = async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body;
    const user = await User.findByEmail(email);
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

    const isMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!isMatch) return res.status(400).json({ message: 'Mot de passe incorrect' });

    const token = jwt.sign({ userId: user.utilisateur_id }, 'secret', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
};
