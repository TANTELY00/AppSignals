import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import utilisateurRoutes from './routes/utilisateur.routes.js';
import technicienRoutes from './routes/technicien.routes.js';
import adminRoutes from './routes/admin.routes.js';
import notificationRoutes from './routes/notification.routes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error(err));

// Routes
app.use('/utilisateurs', utilisateurRoutes);
app.use('/techniciens', technicienRoutes);
app.use('/admins', adminRoutes);
app.use('/notifications', notificationRoutes);

app.get('/', (req, res) => {
  res.send('API AppSignals opérationnelle 🚀');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
