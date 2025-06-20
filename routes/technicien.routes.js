import express from 'express';
import { Technicien } from '../models/index.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const technicien = new Technicien(req.body);
    await technicien.save();
    res.status(201).json(technicien);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const techniciens = await Technicien.find();
    res.json(techniciens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch('/:id/status', async (req, res) => {
  try {
    const technicien = await Technicien.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(technicien);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
