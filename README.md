# VanLife Frontend

Application frontend pour la plateforme VanLife, une plateforme de location de véhicules aménagés (van).

## À propos

VanLife Frontend est une application React moderne construite avec Vite, conçue pour permettre aux utilisateurs de naviguer, rechercher et louer des véhicules aménagés. L'application offre également une interface de gestion pour les propriétaires de véhicules.

### Origine du projet

Ce projet est basé sur le cours [Advanced React](https://scrimba.com/advanced-react-c02h) de Scrimba. Le cours fournissait la base d'une application de location de véhicules avec une interface frontend. 

### Extension du projet

Le projet a été étendu avec le développement d'un **backend NestJS complet** (`vanlife-backend/`) pour remplacer les données mockées par une véritable API REST. Cette extension inclut :

- Service d'authentification (cookie-session)
- Gestion des utilisateurs
- Gestion des véhicules
- Système de base de données
- Seeding de données

## Fonctionnalités

- **Authentification** : Inscription et connexion des utilisateurs
- **Catalogue de véhicules** : Parcourir et filtrer les véhicules disponibles
- **Détails du véhicule** : Visualiser les informations complètes d'un véhicule
- **Tableau de bord hôte** : Gérer les véhicules listés (pour les propriétaires)
- **Système de réservation** : Réserver un véhicule facilement
- **Interface responsive** : Optimisée pour tous les appareils

## Stack technologique

- **React** : Framework UI
- **Vite** : Build tool et dev server
- **React Router** : Gestion du routage
- **ESLint** : Linting et qualité du code

## Structure du projet

```
src/
├── assets/              # Ressources statiques (images, etc.)
├── components/          # Composants React réutilisables
├── layouts/            # Composants de mise en page
├── pages/              # Composants des pages principales
├── services/           # Services API et authentification
├── actions/            # Actions React Router
├── loaders/            # Loaders pour le pré-chargement de données
├── App.jsx             # Composant principal
└── main.jsx            # Point d'entrée de l'application
```

## Installation et démarrage

### Installation des dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

### Build pour la production

```bash
npm run build
```

### Lint avec ESLint

```bash
npm run lint
```

## Configuration du serveur API

L'application communique avec le backend VanLife. Assurez-vous que le serveur backend est en cours d'exécution avant de lancer l'application frontend.

Les endpoints API sont configurés dans le fichier `src/services/api.js`.
