import mongoose from 'mongoose';

// Schéma de base pour Personne
const personneSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  adresse: String
}, { discriminatorKey: 'role', timestamps: true });

// Modèle Personne de base
export const Personne = mongoose.model('Personne', personneSchema);

// Déclaration unique des discriminators
export const Utilisateur = Personne.discriminator('Utilisateur', new mongoose.Schema({
  description: String
}));

export const Technicien = Personne.discriminator('Technicien', new mongoose.Schema({
  status: Boolean
}));

export const Admin = Personne.discriminator('Admin', new mongoose.Schema({
  // Ajoute tes champs spécifiques ici si besoin
}));
