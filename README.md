# 🎮 Dungeon Crawler - Roguelike

Un roguelike dungeon crawler épique en pixel art avec génération procédurale de donjons, système de progression RPG et 5 zones thématiques !

![Dungeon Crawler](https://img.shields.io/badge/version-1.0.0-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![SCSS](https://img.shields.io/badge/SCSS-Compiled-pink)

## 🌟 Fonctionnalités

### 🏰 Génération Procédurale
- **50 niveaux uniques** générés avec l'algorithme BSP (Binary Space Partitioning)
- Chaque donjon est différent avec des salles et corridors aléatoires
- Grille de 50x50 cases pour une exploration profonde

### ⚔️ 4 Classes Jouables

1. **🏹 Archer**
   - Portée infinie
   - Attaque rapide
   - Vie faible
   - Dégâts faibles au début

2. **⚔️ Chevalier**
   - Attaque moyenne
   - Dégâts moyens
   - Vie moyenne
   - Portée: 1 case

3. **🛡️ Bouclier**
   - Attaque lente
   - Dégâts élevés
   - Vie haute
   - Combat corps à corps

4. **✨ Magicien**
   - Attaque lente
   - Dégâts élevés
   - Vie faible
   - Portée: 4 cases

### 🌍 5 Zones Thématiques (10 niveaux chacune)

1. **🌲 Zone 1: Forêt Mystique** (Niveaux 1-10)
2. **⛏️ Zone 2: Grottes Obscures** (Niveaux 11-20)
3. **🔥 Zone 3: Terres de Lave** (Niveaux 21-30)
4. **🌊 Zone 4: Profondeurs Aquatiques** (Niveaux 31-40)
5. **🤖 Zone 5: Cité Futuriste** (Niveaux 41-50)

### 📈 Système de Progression

- **Système d'XP et de niveaux**
- **Améliorations aléatoires** à chaque niveau:
  - ⚔️ Augmentation des dégâts
  - ❤️ Augmentation de la vie maximale
  - ⚡ Amélioration de la vitesse d'attaque
  - 🎯 Augmentation de la portée (sauf Archer)

### 👾 Ennemis et Boss

- **Difficulté progressive**: Les ennemis gagnent +10% de stats par niveau dans chaque zone
- **6 types d'ennemis** par zone
- **Boss épique** tous les 10 niveaux (fin de chaque zone)
- Multiplicateur de difficulté: x1.0 (niveau 1) à x1.9 (niveau 9)

## 🎮 Contrôles

- **ZQSD**: Déplacement du personnage
- **Clic gauche**: Attaquer (dans la portée de votre classe)
- **Auto-combat**: Les ennemis attaquent automatiquement quand ils sont à portée

## 🚀 Installation et Lancement

### Prérequis
- Node.js (v14 ou supérieur)
- npm

### Installation

```bash
# Cloner le projet
cd dungeon-crawler

# Installer les dépendances
npm install

# Compiler le SCSS
npm run build:css

# Lancer le serveur
npm start
```

Le jeu sera accessible sur `http://localhost:3000`

### Développement

Pour développer avec rechargement automatique du CSS:

```bash
# Terminal 1: Compiler le SCSS en mode watch
npm run watch:css

# Terminal 2: Lancer le serveur
npm start
```

## 📁 Structure du Projet

```
dungeon-crawler/
├── index.html          # Structure HTML du jeu
├── style.scss          # Styles SCSS (pixel art aesthetic)
├── style.css           # Styles CSS compilés
├── game.js             # Moteur de jeu principal
├── server.js           # Serveur Node.js simple
├── package.json        # Configuration npm
└── README.md           # Documentation
```

## 🎨 Architecture du Code

### game.js - Moteur de Jeu

```javascript
// Classes principales:
- DungeonGenerator     // Génération procédurale BSP
- Entity              // Classe de base pour joueur/ennemis
- Player              // Gestion du joueur et progression
- Enemy               // IA et comportement des ennemis
- Game                // Boucle de jeu et orchestration
```

### Système de Génération de Donjon

L'algorithme **BSP (Binary Space Partitioning)** génère des donjons organiques:

1. Création de salles aléatoires sans chevauchement
2. Connexion des salles par des corridors
3. Placement du spawn (première salle) et de la sortie (dernière salle)
4. Spawn stratégique des ennemis dans les différentes salles

### Système de Combat

- **Combat au tour par tour** basé sur la vitesse d'attaque
- Cooldown d'attaque pour chaque entité
- Vérification de portée avant l'attaque
- Système de dégâts avec feedback visuel
- Barres de vie pour tous les ennemis

## 🎯 Objectifs du Jeu

1. **Survivre** à travers les 50 niveaux
2. **Vaincre** tous les boss de chaque zone
3. **Améliorer** votre personnage avec les montées de niveau
4. **Explorer** les 5 zones thématiques uniques
5. **Maîtriser** les forces et faiblesses de votre classe

## 🔧 Technologies Utilisées

- **HTML5 Canvas** pour le rendu du jeu
- **JavaScript ES6+** pour la logique de jeu
- **SCSS** pour les styles avec architecture modulaire
- **Node.js** pour le serveur de développement
- **Algorithme BSP** pour la génération procédurale

## 🎨 Design et Esthétique

- **Pixel art** authentique avec rendu crisp
- **Police retro** Press Start 2P pour l'ambiance arcade
- **Palette de couleurs** distinctive par zone
- **Animations fluides** et feedback visuel
- **Interface HUD** complète avec stats en temps réel

## 🐛 Fonctionnalités à Venir (V2)

- [ ] Système d'inventaire complet
- [ ] Armes et équipements variés
- [ ] Objets de soin et potions
- [ ] Sprites pixel art personnalisés pour chaque entité
- [ ] Effets sonores et musique
- [ ] Sauvegarde de progression
- [ ] Leaderboard
- [ ] Mode multijoueur coopératif

## 🏆 Conseils de Gameplay

### Pour l'Archer 🏹
- Utilisez votre portée infinie pour kiter les ennemis
- Restez mobile et évitez le combat rapproché
- Priorisez les améliorations de dégâts

### Pour le Chevalier ⚔️
- Classe équilibrée idéale pour les débutants
- Gérez bien votre positionnement
- Mix d'améliorations équilibrées

### Pour le Bouclier 🛡️
- Tank les dégâts et foncez au corps à corps
- Votre vie élevée permet des erreurs
- Focus sur les améliorations de dégâts

### Pour le Magicien ✨
- Gardez vos distances (4 cases)
- Dégâts élevés mais fragile
- Positionnement crucial pour survivre

## 📊 Système de Difficulté

```
Zone 1 (Forêt)          → Multiplicateur: x1.0 - x1.9
Zone 2 (Grottes)        → Multiplicateur: x1.0 - x1.9
Zone 3 (Lave)           → Multiplicateur: x1.0 - x1.9
Zone 4 (Eau)            → Multiplicateur: x1.0 - x1.9
Zone 5 (Futuriste)      → Multiplicateur: x1.0 - x1.9

Boss (Niveau 10)        → Stats doublées + XP bonus
```

## 🤝 Contribution

Ce projet est ouvert aux améliorations ! N'hésite pas à:
- Reporter des bugs
- Suggérer des fonctionnalités
- Améliorer le code
- Créer des sprites pixel art

## 📝 Licence

MIT License - Libre d'utilisation et de modification

## 🎉 Crédits

Développé avec passion pour créer une expérience roguelike authentique et addictive !

---

**Bon jeu et que la chance soit avec toi dans les donjons ! 🎮⚔️**