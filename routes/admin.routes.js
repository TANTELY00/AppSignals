import express from 'express';
import { Admin } from '../models/index.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/:id/repondre', async (req, res) => {
  try {
    res.status(200).json({ message: `Admin ${req.params.id} a répondu : ${req.body.reponse}` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
