# Générateur de Citations d'Anime

Une application web moderne pour découvrir et partager des citations d'anime.

## Fonctionnalités

- Génération aléatoire de citations d'anime
- Recherche par personnage ou anime
- Filtrage par catégorie (motivation, amitié, amour, philosophie)
- Partage sur les réseaux sociaux
- Mode clair/sombre
- Interface responsive

## Installation

### Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn

### Backend

```bash
# Installation des dépendances
npm install

# Démarrer le serveur en mode développement
npm run dev
```

### Frontend

```bash
# Aller dans le dossier client
cd client

# Installation des dépendances
npm install

# Démarrer l'application React
npm start
```

## API Documentation

### Endpoints

- GET `/api/quotes/random` : Obtenir une citation aléatoire
- GET `/api/quotes/search` : Rechercher des citations (paramètres : character, anime, category)
- GET `/api/quotes/category/:category` : Obtenir des citations par catégorie

## Technologies utilisées

- Frontend : React.js, Material-UI
- Backend : Node.js, Express
- Base de données : MongoDB (à implémenter)
- Partage social : react-share
