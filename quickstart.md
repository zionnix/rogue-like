# 🚀 Guide de Démarrage Rapide

## Installation en 3 étapes

### 1️⃣ Installer Node.js
Si tu n'as pas Node.js, télécharge-le sur [nodejs.org](https://nodejs.org/)

### 2️⃣ Lancer le jeu
Ouvre un terminal dans le dossier du jeu et exécute :

```bash
# Méthode 1 : Avec npm (recommandé)
npm install
npm start

# Méthode 2 : Directement avec Node
node server.js
```

### 3️⃣ Jouer !
Ouvre ton navigateur sur `http://localhost:3000`

---

## 🎮 Comment Jouer

### Commandes
- **Z** : Aller en haut
- **Q** : Aller à gauche
- **S** : Aller en bas
- **D** : Aller à droite
- **Clic gauche** : Attaquer (dans ta portée)

### Objectif
1. Choisis ta classe (Archer, Chevalier, Bouclier, ou Magicien)
2. Explore le donjon et tue les ennemis
3. Atteins la sortie (★) pour passer au niveau suivant
4. Gagne de l'XP et monte de niveau pour obtenir des améliorations
5. Affronte les BOSS tous les 10 niveaux
6. Survit aux 50 niveaux et vainc les 5 zones !

### Astuces
- **Archer** : Reste loin et kite les ennemis avec ta portée infinie
- **Chevalier** : Classe équilibrée, idéale pour débuter
- **Bouclier** : Tank les dégâts et frappe fort au corps à corps
- **Magicien** : Dégâts élevés mais fragile, garde tes distances !

---

## 🔧 Options Avancées

### Développement avec rechargement CSS
```bash
# Terminal 1
npm run watch:css

# Terminal 2
npm start
```

### Compiler le SCSS manuellement
```bash
npm run build:css
```

---

## 📱 Ouvrir dans le navigateur

Une fois le serveur lancé :
- Chrome/Edge : `http://localhost:3000`
- Firefox : `http://localhost:3000`
- Safari : `http://localhost:3000`

---

## ❓ Problèmes ?

### Le serveur ne démarre pas
- Vérifie que Node.js est installé : `node --version`
- Vérifie que le port 3000 est libre
- Essaie un autre port en modifiant `PORT` dans `server.js`

### Le jeu ne s'affiche pas
- Vérifie que tous les fichiers sont présents
- Regarde la console du navigateur (F12)
- Actualise la page (F5 ou Ctrl+R)

### Les styles ne fonctionnent pas
- Recompile le CSS : `npm run build:css`
- Vérifie que `style.css` existe

---

## 🎯 Structure des Fichiers

```
📁 dungeon-crawler/
├── 📄 index.html       ← Page principale
├── 📄 style.scss       ← Styles (source)
├── 📄 style.css        ← Styles (compilé)
├── 📄 game.js          ← Moteur de jeu
├── 📄 server.js        ← Serveur web
├── 📄 package.json     ← Config npm
├── 📄 README.md        ← Documentation complète
└── 📄 QUICKSTART.md    ← Ce fichier
```

---

**C'est parti pour l'aventure ! 🎮⚔️🏰**