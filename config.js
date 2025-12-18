/**
 * 🎮 FICHIER DE CONFIGURATION DU JEU
 * 
 * Ce fichier permet de modifier facilement les paramètres du jeu
 * sans toucher au code principal.
 * 
 * Modifiez les valeurs ci-dessous pour personnaliser votre expérience !
 */

// ===== CONFIGURATION GÉNÉRALE =====
export const GAME_CONFIG = {
    // Taille de la grille du donjon
    GRID_SIZE: 50,              // Cases de large/haut
    
    // Taille des cellules en pixels
    CELL_SIZE: 32,              // Pixels par case (augmenté pour meilleure visibilité)
    
    // Canvas et viewport sont maintenant calculés dynamiquement
    // dans game.js pour s'adapter à la taille de l'écran
    
    // Niveaux
    TOTAL_LEVELS: 50,           // Nombre total de niveaux
    LEVELS_PER_ZONE: 10,        // Niveaux par zone thématique
};

// ===== CONFIGURATION DES CLASSES =====
export const CLASS_CONFIG = {
    archer: {
        name: 'Archer',
        health: 80,             // Points de vie de départ
        damage: 15,             // Dégâts de base
        attackSpeed: 0.5,       // Temps entre attaques (secondes)
        range: Infinity,        // Portée d'attaque (cases)
        color: '#2ecc71'        // Couleur du personnage
    },
    
    knight: {
        name: 'Chevalier',
        health: 120,
        damage: 25,
        attackSpeed: 1,
        range: 1,
        color: '#3498db'
    },
    
    tank: {
        name: 'Bouclier',
        health: 180,
        damage: 40,
        attackSpeed: 1.5,
        range: 1,
        color: '#e67e22'
    },
    
    mage: {
        name: 'Magicien',
        health: 70,
        damage: 35,
        attackSpeed: 1.2,
        range: 4,
        color: '#9b59b6'
    }
};

// ===== CONFIGURATION DES ENNEMIS =====
export const ENEMY_CONFIG = {
    // Stats de base
    BASE_HEALTH: 50,            // Vie de base d'un ennemi normal
    BASE_DAMAGE: 10,            // Dégâts de base
    ATTACK_SPEED: 1,            // Vitesse d'attaque
    
    // Stats des boss
    BOSS_HEALTH_MULT: 4,        // Multiplicateur de vie pour les boss
    BOSS_DAMAGE_MULT: 3,        // Multiplicateur de dégâts pour les boss
    
    // XP
    NORMAL_XP: 20,              // XP d'un ennemi normal
    BOSS_XP: 100,               // XP d'un boss
    
    // Difficulté progressive
    DIFFICULTY_INCREMENT: 0.1,  // +10% par niveau dans une zone
    
    // Nombre d'ennemis
    MIN_ENEMIES: 5,             // Minimum d'ennemis par niveau
    ENEMY_SCALE_FACTOR: 0.2,    // Ennemis supplémentaires par niveau
};

// ===== CONFIGURATION DE LA GÉNÉRATION DE DONJON =====
export const DUNGEON_CONFIG = {
    // Nombre de salles
    MIN_ROOMS: 8,               // Minimum de salles
    MAX_EXTRA_ROOMS: 5,         // Salles supplémentaires aléatoires
    
    // Taille des salles
    MIN_ROOM_SIZE: 5,           // Taille minimale d'une salle
    MAX_ROOM_SIZE: 13,          // Taille maximale (min + cette valeur)
    
    // Marges
    ROOM_MARGIN: 2,             // Espace minimum entre les salles
    EDGE_MARGIN: 2,             // Marge depuis les bords de la carte
};

// ===== CONFIGURATION DU SYSTÈME DE PROGRESSION =====
export const PROGRESSION_CONFIG = {
    // XP
    INITIAL_XP_REQUIRED: 100,   // XP pour le niveau 2
    XP_MULTIPLIER: 1.5,         // Multiplicateur d'XP par niveau
    
    // Améliorations
    UPGRADES: {
        damage: {
            name: 'Dégâts',
            icon: '⚔️',
            value: 5            // Augmentation par niveau
        },
        health: {
            name: 'Vie Max',
            icon: '❤️',
            value: 20
        },
        speed: {
            name: 'Vitesse',
            icon: '⚡',
            value: -0.1         // Négatif = plus rapide
        },
        range: {
            name: 'Portée',
            icon: '🎯',
            value: 1
        }
    }
};

// ===== CONFIGURATION DES ZONES =====
export const ZONE_CONFIG = {
    1: {
        name: 'Forêt Mystique',
        colors: ['#2d5016', '#4a7c2f', '#6b9d4a'],
        enemyTypes: 6
    },
    2: {
        name: 'Grottes Obscures',
        colors: ['#2c2c3e', '#4a4a6a', '#6b6b8a'],
        enemyTypes: 6
    },
    3: {
        name: 'Terres de Lave',
        colors: ['#5c1010', '#ff4500', '#ff6347'],
        enemyTypes: 6
    },
    4: {
        name: 'Profondeurs Aquatiques',
        colors: ['#0f3460', '#1e90ff', '#4169e1'],
        enemyTypes: 6
    },
    5: {
        name: 'Cité Futuriste',
        colors: ['#1a1a2e', '#16c79a', '#0f3460'],
        enemyTypes: 6
    }
};

// ===== CONFIGURATION VISUELLE =====
export const VISUAL_CONFIG = {
    // Couleurs de l'interface
    PRIMARY_COLOR: '#ff6b9d',
    SECONDARY_COLOR: '#4ecdc4',
    ACCENT_COLOR: '#ffd93d',
    DANGER_COLOR: '#ff4757',
    SUCCESS_COLOR: '#2ed573',
    
    // Animations
    ANIMATION_SPEED: 0.3,       // Secondes
    
    // Combat log
    MAX_LOG_ENTRIES: 50,        // Messages maximum dans le log
};

// ===== MODE DEBUG =====
export const DEBUG_CONFIG = {
    ENABLED: false,              // Activer le mode debug
    SHOW_GRID: false,           // Afficher la grille
    SHOW_HITBOXES: false,       // Afficher les hitboxes
    GOD_MODE: false,            // Invincibilité
    INSTANT_KILL: false,        // Tuer en un coup
    SHOW_FPS: false,            // Afficher les FPS
};

// ===== CONFIGURATION AVANCÉE =====
export const ADVANCED_CONFIG = {
    // Performance
    TARGET_FPS: 60,
    
    // Collision
    COLLISION_BUFFER: 0,        // Buffer pour les collisions
    
    // Caméra
    CAMERA_SMOOTH: true,        // Caméra lisse
    CAMERA_SPEED: 0.1,          // Vitesse de suivi
    
    // Sauvegarde (pour futures versions)
    AUTO_SAVE: false,
    SAVE_INTERVAL: 30,          // Secondes
};

/**
 * 💡 GUIDE DE MODIFICATION
 * 
 * ÉQUILIBRAGE FACILE :
 * 
 * Rendre le jeu plus facile :
 * - Augmenter CLASS_CONFIG.*.health (vie des joueurs)
 * - Augmenter CLASS_CONFIG.*.damage (dégâts)
 * - Diminuer ENEMY_CONFIG.BASE_HEALTH
 * - Diminuer ENEMY_CONFIG.DIFFICULTY_INCREMENT
 * 
 * Rendre le jeu plus difficile :
 * - Diminuer CLASS_CONFIG.*.health
 * - Augmenter ENEMY_CONFIG.BASE_HEALTH
 * - Augmenter ENEMY_CONFIG.DIFFICULTY_INCREMENT
 * - Augmenter ENEMY_CONFIG.MIN_ENEMIES
 * 
 * Changer la progression :
 * - PROGRESSION_CONFIG.INITIAL_XP_REQUIRED (XP pour niv 2)
 * - PROGRESSION_CONFIG.XP_MULTIPLIER (croissance XP)
 * - PROGRESSION_CONFIG.UPGRADES.*.value (force des améliorations)
 * 
 * Modifier les donjons :
 * - DUNGEON_CONFIG.MIN_ROOMS (plus/moins de salles)
 * - DUNGEON_CONFIG.*_ROOM_SIZE (taille des salles)
 * - GAME_CONFIG.GRID_SIZE (taille totale du donjon)
 * 
 * ATTENTION : Des valeurs trop extrêmes peuvent casser l'équilibre du jeu !
 */