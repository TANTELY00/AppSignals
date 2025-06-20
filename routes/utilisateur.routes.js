import express from 'express';
import { Utilisateur } from '../models/index.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const utilisateur = new Utilisateur(req.body);
    await utilisateur.save();
    res.status(201).json(utilisateur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.find();
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
