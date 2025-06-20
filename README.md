# 📡 AppSignals – API de Gestion des Incidents

Application backend en **Node.js**, **Express** et **MongoDB** pour la gestion des utilisateurs, techniciens, administrateurs et notifications dans un système de gestion d’incidents.

---

## 📦 Installation & Configuration

### 1️⃣ Cloner le projet :
```bash
git clone https://github.com/TANTELY00/AppSignals.git
cd AppSignals

2️⃣ Installer les dépendances :
npm install

3️⃣ Créer un fichier .env à la racine du projet :
MONGO_URI=mongodb://localhost:27017/appsignals
PORT=5000

4️⃣ Lancer le serveur :
npm start


📡 L’API sera disponible sur : http://localhost:5000/


📡 API disponible
| Méthode | Endpoint                  | Description                             |
| :------ | :------------------------ | :-------------------------------------- |
| GET     | `/`                       | Test API en ligne                       |
| GET     | `/utilisateurs`           | Récupérer tous les utilisateurs         |
| POST    | `/utilisateurs`           | Créer un nouvel utilisateur             |
| GET     | `/techniciens`            | Récupérer tous les techniciens          |
| POST    | `/techniciens`            | Créer un technicien                     |
| PATCH   | `/techniciens/:id/status` | Mettre à jour le statut d’un technicien |
| GET     | `/admins`                 | Récupérer tous les admins               |
| POST    | `/admins`                 | Créer un admin                          |
| POST    | `/admins/:id/repondre`    | Admin répond à une notification         |
| GET     | `/notifications`          | Récupérer toutes les notifications      |
| POST    | `/notifications`          | Envoyer une notification                |


📋 Exemple de requêtes
👉 Créer un utilisateur :

POST /utilisateurs
{
  "nom": "Rabe",
  "prenom": "John",
  "adresse": "Antananarivo",
  "description": "Utilisateur système"
}


👉 Mettre à jour le statut d’un technicien :

PATCH /techniciens/ID/status

{
  "status": true
}


👉 Répondre à une notification en tant qu’admin :

POST /admins/ID/repondre

{
  "reponse": "Incident traité"
}


📂 Structure du projet
/models
│── index.js             <-- centralisation des modèles Personne/Utilisateur/Technicien/Admin
│── notification.js      <-- modèle Notification simple
/routes
│── utilisateur.routes.js
│── technicien.routes.js
│── admin.routes.js
│── notification.routes.js
server.js
package.json
.env
README.md


📚 Technologies utilisées

    Node.js v24+
    Express.js v5
    MongoDB + Mongoose
    dotenv
    nodemon

Lancer :
npm start

Aller sur : http://localhost:5000/

docker run -d --name mongo-appsignals -p 27017:27017 mongo:6.0
