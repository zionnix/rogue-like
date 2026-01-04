// ===== CONFIGURATION DU JEU =====
const CONFIG = {
    GRID_SIZE: 80,
    CELL_SIZE: 48,
    SPRITE_SIZE: 80,  // Taille des sprites (personnages et ennemis)
    // Canvas et viewport seront calculés dynamiquement

    TOTAL_LEVELS: 50,
    LEVELS_PER_ZONE: 10,

    // Raretés des bonus
    RARITY: {
        COMMON: { name: 'Commun', color: '#2ecc71', chance: 0.50 },
        RARE: { name: 'Rare', color: '#3498db', chance: 0.30 },
        EPIC: { name: 'Épique', color: '#9b59b6', chance: 0.15 },
        LEGENDARY: { name: 'Légendaire', color: '#f39c12', chance: 0.05 }
    },
    
    // Classes de personnages
    CLASSES: {
        archer: {
            name: 'Archer',
            health: 80,
            damage: 15,
            attackSpeed: 0.5,
            range: 6,  // 1.5x la portée du mage (4 * 1.5 = 6)
            color: '#2ecc71'
        },
        knight: {
            name: 'Chevalier',
            description: 'Attaque automatiquement les ennemis proches ; récupère de la vie en tuant les adversaires.',
            health: 120,
            damage: 25,
            attackSpeed: 1,
            range: 1,
            color: '#3498db'
        },
        tank: {
            name: 'Bouclier',
            description: 'Riposte automatiquement quand un ennemi approche ; absorbe une part de la vie des ennemis tués.',
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
    },
    
    // Zones thématiques
    ZONES: {
        1: { name: 'Forêt Mystique', colors: ['#2d5016', '#4a7c2f', '#6b9d4a'] },
        2: { name: 'Grottes Obscures', colors: ['#2c2c3e', '#4a4a6a', '#6b6b8a'] },
        3: { name: 'Terres de Lave', colors: ['#5c1010', '#ff4500', '#ff6347'] },
        4: { name: 'Profondeurs Aquatiques', colors: ['#0f3460', '#1e90ff', '#4169e1'] },
        5: { name: 'Cité Futuriste', colors: ['#1a1a2e', '#16c79a', '#0f3460'] }
    },

    // Dialogues des héros par zone
    HERO_DIALOGUES: {
        archer: {
            1: [
                "Cette forêt... Je sens des présences hostiles partout. Mes flèches seront leurs dernières visions.",
                "L'air est lourd ici. Parfait pour la chasse. Voyons ce que ces bois cachent.",
                "On raconte que nul archer n'est revenu de cette forêt. Je serai l'exception.",
                "Chaque arbre pourrait cacher un ennemi. Mon arc ne tremblera pas.",
                "La forêt mystique... J'ai entendu des légendes. Il est temps de les vivre."
            ],
            2: [
                "Des grottes... La visibilité sera réduite. Mais mes oreilles sont aussi affûtées que mes flèches.",
                "L'obscurité ne me fait pas peur. J'ai chassé dans des nuits plus sombres.",
                "Ces cavernes résonnent de bruits inquiétants. Parfait pour masquer le sifflement de mes flèches.",
                "Qui sait quelles créatures rampent dans ces ténèbres ? Elles apprendront à me craindre.",
                "L'écho de ces grottes... Chaque flèche chantera deux fois."
            ],
            3: [
                "De la lave... La chaleur fera fondre mes ennemis avant même que mes flèches ne les atteignent.",
                "Ce terrain infernal ne m'arrêtera pas. J'ai survécu à pire.",
                "Les flammes éclairent mes cibles. Presque trop facile.",
                "Cette chaleur est insupportable... mais ma détermination l'est encore plus.",
                "Le feu consume tout ici. Sauf ma volonté de vaincre."
            ],
            4: [
                "L'eau... Mes flèches seront ralenties. Je devrai être plus précis que jamais.",
                "Ces profondeurs cachent des secrets anciens. Et des dangers mortels.",
                "Respirer est difficile ici. Mais viser reste naturel.",
                "L'eau déforme la lumière... Je dois ajuster chaque tir.",
                "Sous la surface, une nouvelle chasse commence."
            ],
            5: [
                "Quelle est cette technologie ? Peu importe, mes flèches restent mortelles.",
                "Le futur... Je ne comprends pas cet endroit, mais je sais comment y survivre.",
                "Ces machines brillantes ne m'impressionnent pas. Rien ne vaut un arc bien tendu.",
                "Même dans ce monde étrange, la précision reste la clé.",
                "Le passé rencontre le futur. Et le futur va perdre."
            ]
        },
        knight: {
            1: [
                "Mon épée frappe d'elle-même quand un ennemi s'approche ; chaque adversaire tombé me rend de la vigueur !",
                "Ces arbres ont vu trop de mal. Il est temps d'y apporter la justice.",
                "En avant ! Aucune créature ne résistera à ma lame.",
                "La forêt mystique... Un bon terrain pour prouver ma valeur.",
                "Mon honneur me guide. Ces ténèbres ne m'effraient pas."
            ],
            2: [
                "Dans ces grottes, ma lame frappe automatiquement les ennemis proches et me rend la vie de ceux que je terrasse !",
                "L'honneur d'un chevalier ne faiblit pas dans le noir.",
                "Que ces cavernes tremblent ! J'arrive.",
                "Même sans lumière, mon épée trouvera ses cibles.",
                "Ces profondeurs seront purifiées par l'acier."
            ],
            3: [
                "Même dans ces terres de feu, mes frappes automatiques reprennent la vie de mes ennemis pour me renforcer !",
                "La chaleur forge les meilleurs guerriers. Je suis prêt.",
                "Ces flammes témoigneront de ma victoire !",
                "Un vrai chevalier ne recule jamais, même face à l'enfer.",
                "Que la lave consume mes ennemis avant ma lame !"
            ],
            4: [
                "Sous l'eau, mes attaques automatiques frappent les ennemis proches ; je récupère une part de leur force en les tuant !",
                "Ces profondeurs cachent peut-être Excalibur... ou sa réplique.",
                "Un chevalier doit s'adapter. Je nagerai vers la victoire.",
                "L'honneur ne coule pas. Je me battrai même sous l'eau.",
                "Ces abysses apprendront à craindre la chevalerie !"
            ],
            5: [
                "La technologie ou la magie, mon épée frappe d'elle-même et puise la vie des vaincus pour me renforcer !",
                "Ce monde étrange ne changera pas mon code d'honneur.",
                "Machines ou monstres, tous tomberont devant ma lame.",
                "Le futur a peut-être oublié les chevaliers. Je vais leur rappeler.",
                "Même ici, l'honneur et le courage triompheront !"
            ]
        },
        tank: {
            1: [
                "Mon bouclier riposte automatiquement aux agresseurs proches et absorbe leur vie pour me soigner.",
                "Qu'ils viennent tous. Je suis un mur infranchissable.",
                "Ces arbres cachent des dangers ? Mon bouclier les accueillera.",
                "La forêt mystique ne brisera pas ma défense.",
                "Je suis le rempart. Rien ne passera."
            ],
            2: [
                "Dans l'obscurité, mon bouclier attaque automatiquement les ennemis proches et me rend une part de leur essence vitale.",
                "Ces grottes seront leur tombeau, pas le mien.",
                "Mon bouclier résonne dans ces cavernes. Un avertissement.",
                "Dans le noir, ma défense reste impénétrable.",
                "Que les ténèbres m'engloutissent. Je ressortirai victorieux."
            ],
            3: [
                "La chaleur brûle, mais mon bouclier frappe automatiquement ; je reprends de la vie sur ceux que je brise.",
                "Ces flammes ne feront que renforcer mon bouclier.",
                "Un vrai défenseur ne craint pas le feu. Je l'embrasse.",
                "La lave coule autour de moi. Je reste immobile comme la montagne.",
                "Que ce brasier teste ma résistance !"
            ],
            4: [
                "Sous l'eau, mon bouclier riposte automatiquement et siphonne la vie des ennemis pour me tenir debout.",
                "Ces profondeurs ne m'écraseront pas. Je suis plus lourd qu'elles.",
                "Sous l'eau, ma défense reste absolue.",
                "Les créatures marines apprendront la dureté de l'acier.",
                "Je coule vers le fond ? Non, je m'ancre pour combattre."
            ],
            5: [
                "Ces lumières étranges... Mon bouclier riposte automatiquement, et les vaincus me rendent leur force.",
                "La technologie contre l'acier ? L'acier gagne toujours.",
                "Ce monde bizarre ne changera pas ma stratégie : tenir bon.",
                "Machines ou bêtes, elles se briseront contre moi.",
                "Le futur a des armes puissantes ? J'ai une volonté plus forte."
            ]
        },
        mage: {
            1: [
                "Cette forêt pulse de magie ancienne... Je la sens dans mes veines.",
                "Les arbres murmurent des secrets. Je comprends leur langage.",
                "Ma magie prospérera dans cet environnement mystique.",
                "Les énergies ici sont instables... Parfait pour mes expériences.",
                "La forêt cache des pouvoirs oubliés. Je les réveillerai."
            ],
            2: [
                "L'obscurité amplifie ma magie. Ces grottes seront mon sanctuaire.",
                "Dans le noir, mes sorts brillent encore plus fort.",
                "Ces cavernes résonnent de pouvoir ancien. Je le sens.",
                "Les ténèbres ne sont qu'une toile pour ma lumière arcanique.",
                "Chaque ombre cache un secret magique. Je les découvrirai tous."
            ],
            3: [
                "Le feu élémentaire... Une source de pouvoir inépuisable !",
                "Ces flammes alimenteront mes sorts les plus destructeurs.",
                "La lave est chaos pur. Et le chaos est pouvoir.",
                "Je danse avec les flammes. Elles m'obéissent.",
                "Ce brasier infernal ? Un simple ingrédient pour ma magie."
            ],
            4: [
                "L'eau amplifie mes enchantements. Je suis dans mon élément.",
                "Ces profondeurs cachent une magie aquatique ancienne.",
                "Sous la surface, mes sorts prennent des formes nouvelles.",
                "L'eau est vie. L'eau est mort. L'eau est pouvoir.",
                "Les courants portent ma magie plus loin que jamais."
            ],
            5: [
                "Cette énergie... C'est de la magie sous une autre forme !",
                "La technologie n'est que de la magie que je ne comprends pas encore.",
                "Ces circuits brillent comme des runes. Fascinant.",
                "Le futur et la magie fusionnent ici. Je dois étudier.",
                "Même cette technologie cédera devant les arcanes anciennes."
            ]
        }
    },

    // Définition des bonus
    PERKS: {
        // COMMUN (50%)
        DOUBLE_SHOT: {
            id: 'double_shot',
            name: 'Tir Double',
            description: 'Tire 2 projectiles au lieu d\'1',
            icon: '🏹🏹',
            rarity: 'COMMON',
            classRestriction: ['archer', 'mage'],
            maxLevel: 1
        },
        DOUBLE_STRIKE: {
            id: 'double_strike',
            name: 'Frappe Double',
            description: 'Frappe 2 fois rapidement',
            icon: '⚔️⚔️',
            rarity: 'COMMON',
            classRestriction: ['knight', 'tank'],
            maxLevel: 1
        },
        ATTACK_SPEED: {
            id: 'attack_speed',
            name: 'Vitesse d\'Attaque',
            description: '-10% temps d\'attaque par niveau',
            icon: '⚡',
            rarity: 'COMMON',
            maxLevel: 5
        },
        MOVE_SPEED: {
            id: 'move_speed',
            name: 'Agilité',
            description: '+10% vitesse de déplacement par niveau',
            icon: '🏃',
            rarity: 'COMMON',
            maxLevel: 5
        }, 
        
        DAMAGE_BOOST: {
            id: 'damage_boost',
            name: 'Force',
            description: '+10% dégâts par niveau',
            icon: '💪',
            rarity: 'COMMON',
            maxLevel: 10
        },

        // RARE (30%)
        SHIELD: {
            id: 'shield',
            name: 'Bouclier Magique',
            description: 'Bouclier 3s+1s/niv, cooldown 10s',
            icon: '🛡️',
            rarity: 'RARE',
            maxLevel: 10
        },
        CRITICAL: {
            id: 'critical',
            name: 'Coup Critique',
            description: '15% à 100% de chance, 1.5x dégâts',
            icon: '💥',
            rarity: 'RARE',
            maxLevel: 10
        },
        KNOCKBACK: {
            id: 'knockback',
            name: 'Repousser',
            description: 'Repousse de 1 à 10 cases',
            icon: '👊',
            rarity: 'RARE',
            maxLevel: 10
        },
        
        HEALTH_BOOST: {
            id: 'health_boost',
            name: 'Vitalité',
            description: '+50 PV max et actuels (max 10 niveaux)',
            icon: '❤️',
            rarity: 'COMMON',
            maxLevel: 10
        },

        // EPIC (15%)
        FIREBALL: {
            id: 'fireball',
            name: 'Boules de Feu',
            description: '2+1/niv boules, brûlure 5dmg/s 3s',
            icon: '🔥',
            rarity: 'EPIC',
            maxLevel: 8
        },
        MAGIC_RINGS: {
            id: 'magic_rings',
            name: 'Anneaux Magiques',
            description: '1-5 anneaux (15dmg), niv.6 = permanent',
            icon: '🔮',
            rarity: 'EPIC',
            maxLevel: 6
        },

        // LEGENDARY (5%)
        SECOND_LIFE: {
            id: 'second_life',
            name: 'Seconde Vie',
            description: 'Revie avec 50% PV (unique)',
            icon: '💛',
            rarity: 'LEGENDARY',
            maxLevel: 1
        }
    }
};

// ===== GÉNÉRATION PROCÉDURALE DE DONJON =====
class DungeonGenerator {
    constructor(size, isBossLevel = false) {
        this.size = size;
        this.grid = [];
        this.cellType = [];  // 'wall', 'chamber', 'path'
        this.cellOrientation = [];  // 'horizontal', 'vertical' pour les paths
        this.rooms = [];
        this.isBossLevel = isBossLevel;
        this.bossRoom = null;
    }

    generate() {
        // Initialiser les grilles avec des murs
        this.grid = Array(this.size).fill(null).map(() =>
            Array(this.size).fill(1)
        );
        this.cellType = Array(this.size).fill(null).map(() =>
            Array(this.size).fill('wall')
        );
        this.cellOrientation = Array(this.size).fill(null).map(() =>
            Array(this.size).fill('horizontal')
        );

        if (this.isBossLevel) {
            // Générer une salle de boss spéciale au centre
            this.generateBossRoom();
        } else {
            // Générer des salles avec BSP (Binary Space Partitioning)
            this.generateRooms();

            // Connecter les salles avec des corridors
            this.connectRooms();
        }

        // Classifier les cellules passables comme chambre ou path
        this.classifyCells();

        return this.grid;
    }
    
    classifyCells() {
        // Marquer toutes les cellules qui ne sont pas des salles comme des paths
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                if (this.grid[y][x] === 0) {  // Passable
                    // Vérifier si c'est dans une salle
                    let inRoom = false;
                    for (const room of this.rooms) {
                        if (x >= room.x && x < room.x + room.width &&
                            y >= room.y && y < room.y + room.height) {
                            this.cellType[y][x] = 'chamber';
                            inRoom = true;
                            break;
                        }
                    }
                    if (!inRoom) {
                        this.cellType[y][x] = 'path';
                        // Déterminer l'orientation du path
                        this.determineCellOrientation(x, y);
                    }
                }
            }
        }
    }
    
    determineCellOrientation(x, y) {
        // Vérifier si le path a des connexions horizontales et/ou verticales
        const hasHorizontal = (x > 0 && this.grid[y][x - 1] === 0) || (x < this.size - 1 && this.grid[y][x + 1] === 0);
        const hasVertical = (y > 0 && this.grid[y - 1][x] === 0) || (y < this.size - 1 && this.grid[y + 1][x] === 0);
        
        // Si uniquement vertical ou plus de vertical que horizontal, c'est vertical
        if (hasVertical && !hasHorizontal) {
            this.cellOrientation[y][x] = 'vertical';
        } else {
            this.cellOrientation[y][x] = 'horizontal';
        }
    }
    
    generateBossRoom() {
        // Créer une grande salle carrée au centre pour le boss
        const roomSize = 20; // Grande salle carrée
        const centerX = Math.floor(this.size / 2 - roomSize / 2);
        const centerY = Math.floor(this.size / 2 - roomSize / 2);

        // Créer la salle de boss
        this.createRoom(centerX, centerY, roomSize, roomSize);
        this.bossRoom = { x: centerX, y: centerY, width: roomSize, height: roomSize };
        this.rooms.push(this.bossRoom);

        // Créer 4 petits couloirs menant à la salle (nord, sud, est, ouest)
        const corridorLength = 5;
        const corridorWidth = 3;

        // Couloir Nord
        this.createRoom(
            centerX + Math.floor(roomSize / 2) - 1,
            centerY - corridorLength,
            corridorWidth,
            corridorLength
        );

        // Couloir Sud
        this.createRoom(
            centerX + Math.floor(roomSize / 2) - 1,
            centerY + roomSize,
            corridorWidth,
            corridorLength
        );

        // Couloir Est
        this.createRoom(
            centerX + roomSize,
            centerY + Math.floor(roomSize / 2) - 1,
            corridorLength,
            corridorWidth
        );

        // Couloir Ouest
        this.createRoom(
            centerX - corridorLength,
            centerY + Math.floor(roomSize / 2) - 1,
            corridorLength,
            corridorWidth
        );
    }

    generateRooms() {
        const numRooms = 15 + Math.floor(Math.random() * 10);

        for (let i = 0; i < numRooms; i++) {
            const width = 6 + Math.floor(Math.random() * 10);
            const height = 6 + Math.floor(Math.random() * 10);
            const x = 2 + Math.floor(Math.random() * (this.size - width - 4));
            const y = 2 + Math.floor(Math.random() * (this.size - height - 4));

            // Vérifier les chevauchements
            let overlaps = false;
            for (const room of this.rooms) {
                if (this.roomsOverlap(
                    { x, y, width, height },
                    room
                )) {
                    overlaps = true;
                    break;
                }
            }

            if (!overlaps) {
                this.createRoom(x, y, width, height);
                this.rooms.push({ x, y, width, height });
            }
        }
    }
    
    roomsOverlap(room1, room2) {
        return !(
            room1.x + room1.width + 2 < room2.x ||
            room2.x + room2.width + 2 < room1.x ||
            room1.y + room1.height + 2 < room2.y ||
            room2.y + room2.height + 2 < room1.y
        );
    }
    
    createRoom(x, y, width, height) {
        for (let i = x; i < x + width; i++) {
            for (let j = y; j < y + height; j++) {
                if (i >= 0 && i < this.size && j >= 0 && j < this.size) {
                    this.grid[j][i] = 0;
                }
            }
        }
    }
    
    connectRooms() {
        for (let i = 0; i < this.rooms.length - 1; i++) {
            const room1 = this.rooms[i];
            const room2 = this.rooms[i + 1];
            
            const x1 = Math.floor(room1.x + room1.width / 2);
            const y1 = Math.floor(room1.y + room1.height / 2);
            const x2 = Math.floor(room2.x + room2.width / 2);
            const y2 = Math.floor(room2.y + room2.height / 2);
            
            this.createCorridor(x1, y1, x2, y2);
        }
    }
    
    createCorridor(x1, y1, x2, y2) {
        let x = x1;
        let y = y1;
        
        while (x !== x2) {
            if (x >= 0 && x < this.size && y >= 0 && y < this.size) {
                this.grid[y][x] = 0;
            }
            x += x < x2 ? 1 : -1;
        }
        
        while (y !== y2) {
            if (x >= 0 && x < this.size && y >= 0 && y < this.size) {
                this.grid[y][x] = 0;
            }
            y += y < y2 ? 1 : -1;
        }
    }
    
    findSpawnPoint() {
        // Si c'est un niveau de boss, spawner dans un couloir, pas dans la salle du boss
        if (this.isBossLevel && this.bossRoom) {
            const bossRoom = this.bossRoom;
            // Spawner dans le couloir nord (au-dessus de la salle)
            return {
                x: Math.floor(bossRoom.x + bossRoom.width / 2),
                y: bossRoom.y - 3 // 3 cases au-dessus de la salle
            };
        }

        const room = this.rooms[0];
        return {
            x: Math.floor(room.x + room.width / 2),
            y: Math.floor(room.y + room.height / 2)
        };
    }
    
    findExitPoint() {
        const room = this.rooms[this.rooms.length - 1];
        return {
            x: Math.floor(room.x + room.width / 2),
            y: Math.floor(room.y + room.height / 2)
        };
    }
}

// ===== ENTITÉS DU JEU =====
class Entity {
    constructor(x, y, health, damage, speed) {
        this.x = x;
        this.y = y;
        this.maxHealth = health;
        this.health = health;
        this.damage = damage;
        this.speed = speed;
        this.attackCooldown = 0;
    }
    
    takeDamage(amount) {
        this.health -= amount;
        return this.health <= 0;
    }
    
    canAttack() {
        return this.attackCooldown <= 0;
    }
    
    attack() {
        this.attackCooldown = this.speed;
        return this.damage;
    }
    
    update(deltaTime) {
        if (this.attackCooldown > 0) {
            this.attackCooldown -= deltaTime;
        }
    }
}

class Player extends Entity {
    constructor(x, y, classType) {
        const classData = CONFIG.CLASSES[classType];
        super(x, y, classData.health, classData.damage, classData.attackSpeed);
        
        this.classType = classType;
        this.className = classData.name;
        this.range = classData.range;
        this.color = classData.color;
        
        this.xp = 0;
        this.level = 1;
        this.xpToNext = 100;
        
        // Animation de marche
        this.isWalking = false;
        this.walkFrame = 0;
        this.walkAnimTimer = 0;
        this.walkAnimSpeed = 0.15; // Secondes par frame
        this.direction = 0; // 0=bas, 1=gauche, 2=droite, 3=haut
        
        this.upgrades = {
            damage: 0,
            health: 0,
            speed: 0,
            range: 0
        };

        // Système de perks/bonus
        this.perks = []; // Liste des perks actifs
        this.perkLevels = {}; // { perkId: level }
        this.perkEffects = {
            // Bouclier
            shieldActive: false,
            shieldTimer: 0,
            shieldCooldown: 0,
            shieldDuration: 0,

            // Coup critique
            criticalChance: 0,

            // Knockback
            knockbackDistance: 0,

            // Régénération
            regenActive: false,
            regenTimer: 0,
            regenAmount: 0,

            // Boules de feu
            fireballCooldown: 0,

            // Seconde vie
            hasSecondLife: false,
            secondLifeUsed: false,

            // Anneaux magiques
            ringsActive: false,
            ringsTimer: 0,

            // God Mode (debug only - activable via console)
            godMode: false,
            ringsCooldown: 0,
            ringsRotation: 0,
            ringsPermanent: false,
            ringsHitEnemies: new Set(), // Ennemis déjà touchés pendant cette activation

            // Bonus de stats
            attackSpeedBonus: 0,
            // Bonus de vitesse de déplacement (fraction, ex: 0.1 = +10% vitesse)
            moveSpeedBonus: 0,
            damageBonus: 0
        };

        // Effets de status
        this.statusEffects = []; // { type, duration, elapsed, data }
        // Statistiques de combat
        this.totalDamageDealt = 0; // Dégâts totaux infligés durant la partie
    }
    
    gainXP(amount) {
        // Si amount est 'level', donner assez d'XP pour monter d'un niveau
        if (amount === 'level') {
            this.xp = 0;
            this.levelUp();
            return;
        }
        
        this.xp += amount;
        
        while (this.xp >= this.xpToNext) {
            this.xp -= this.xpToNext;
            this.levelUp();
        }
    }
    
    levelUp() {
        this.level++;
        this.xpToNext = Math.floor(this.xpToNext * 1.5);

        // Jouer le son de montée de niveau
        if (game) {
            game.playSound('newLevel');
        }

        // Afficher l'écran de choix de perk
        game.showPerkChoice();
    }

    // Ajouter un perk
    addPerk(perkId) {
        if (!this.perkLevels[perkId]) {
            this.perkLevels[perkId] = 0;
        }

        const perkConfig = CONFIG.PERKS[Object.keys(CONFIG.PERKS).find(k => CONFIG.PERKS[k].id === perkId)];
        if (!perkConfig) return;

        if (this.perkLevels[perkId] < perkConfig.maxLevel) {
            this.perkLevels[perkId]++;

            // Ajouter à la liste des perks si c'est la première fois
            const existingPerk = this.perks.find(p => p.id === perkId);
            if (existingPerk) {
                existingPerk.level = this.perkLevels[perkId];
            } else {
                this.perks.push({
                    id: perkId,
                    name: perkConfig.name,
                    icon: perkConfig.icon,
                    rarity: perkConfig.rarity,
                    level: 1
                });
            }

            this.applyPerkEffect(perkId);
            if (window.game) window.game.addLog(`✨ ${perkConfig.name} niveau ${this.perkLevels[perkId]}!`, 'info');
        }
    }

    // Appliquer les effets d'un perk
    applyPerkEffect(perkId) {
        const level = this.perkLevels[perkId];

        switch(perkId) {
            case 'damage_boost':
                // Utiliser la nouvelle méthode applyUpgrade qui donne +10% au lieu de +5 fixe
                this.applyUpgrade('damage');
                break;

            case 'health_boost':
                // Utiliser la nouvelle méthode applyUpgrade qui donne +50 PV (max 10 niveaux)
                this.applyUpgrade('health');
                break;

            case 'attack_speed':
                this.perkEffects.attackSpeedBonus = level * 0.1;
                const baseSpeed = CONFIG.CLASSES[this.classType].attackSpeed;
                this.speed = baseSpeed * (1 - this.perkEffects.attackSpeedBonus);
                break;

            case 'shield':
                this.perkEffects.shieldDuration = 3 + level;
                break;

            case 'critical':
                // 15% au niveau 1, jusqu'à 100% au niveau 10
                const minChance = 0.15;
                const maxChance = 1.0;
                this.perkEffects.criticalChance = minChance + (maxChance - minChance) * (level / 10);
                break;

            case 'knockback':
                this.perkEffects.knockbackDistance = level;
                break;

            case 'second_life':
                this.perkEffects.hasSecondLife = true;
                break;

            case 'move_speed':
                // +10% de vitesse de déplacement par niveau
                // stocker comme fraction (0.1 = +10%)
                this.perkEffects.moveSpeedBonus = Math.min(0.8, level * 0.1);
                break;
        }
    }

    // Appliquer les upgrades de stats basiques
    applyUpgrade(upgradeType) {
        switch(upgradeType) {
            case 'damage':
                // +10% de la force actuelle (arrondi à l'inférieur)
                const damageBoost = Math.floor(this.damage * 0.10);
                this.damage += Math.max(1, damageBoost); // Minimum +1 pour éviter 0
                this.upgrades.damage++;
                break;

            case 'health':
                // Maximum 10 niveaux
                if (this.upgrades.health < 10) {
                    // +50 PV max
                    this.maxHealth += 50;
                    // +50 PV actuels (soigne en même temps)
                    this.health += 50;
                    this.upgrades.health++;
                }
                break;

            case 'speed':
                // -0.1s de cooldown
                this.speed = Math.max(0.1, this.speed - 0.1);
                this.upgrades.speed++;
                break;

            case 'range':
                // +1 case de portée (sauf pour l'archer qui a déjà infini)
                if (this.range !== Infinity) {
                    this.range++;
                }
                this.upgrades.range++;
                break;
        }
    }

    // Obtenir les dégâts calculés (avec critique, etc.)
    getCalculatedDamage() {
        let finalDamage = this.damage;

        // Appliquer le coup critique
        if (this.perkEffects.criticalChance > 0) {
            if (Math.random() < this.perkEffects.criticalChance) {
                finalDamage *= 1.5;
                return { damage: Math.floor(finalDamage), isCritical: true };
            }
        }

        return { damage: Math.floor(finalDamage), isCritical: false };
    }

    // Mise à jour des effets de perks
    updatePerks(deltaTime) {
        // Bouclier
        if (this.perkLevels['shield']) {
            // Cooldown
            if (this.perkEffects.shieldCooldown > 0) {
                this.perkEffects.shieldCooldown -= deltaTime;
            } else if (!this.perkEffects.shieldActive) {
                // Activer le bouclier automatiquement
                this.perkEffects.shieldActive = true;
                this.perkEffects.shieldTimer = this.perkEffects.shieldDuration;
            }

            // Durée du bouclier
            if (this.perkEffects.shieldActive) {
                this.perkEffects.shieldTimer -= deltaTime;
                if (this.perkEffects.shieldTimer <= 0) {
                    this.perkEffects.shieldActive = false;
                    this.perkEffects.shieldCooldown = 10; // 10 secondes de cooldown
                }
            }
        }

        // Régénération
        if (this.perkEffects.regenActive) {
            this.perkEffects.regenTimer -= deltaTime;
            const regenPerSecond = this.perkEffects.regenAmount / 3;
            this.health = Math.min(this.maxHealth, this.health + regenPerSecond * deltaTime);

            if (this.perkEffects.regenTimer <= 0) {
                this.perkEffects.regenActive = false;
            }
        }

        // Cooldown boules de feu
        if (this.perkEffects.fireballCooldown > 0) {
            this.perkEffects.fireballCooldown -= deltaTime;
        } else if (this.perkLevels.fireball > 0) {
            // Tirer une fireball sur l'ennemi le plus proche
            this.fireAutomaticFireball();
            this.perkEffects.fireballCooldown = 5; // 5 secondes entre chaque fireball
        }

        // Anneaux magiques
        if (this.perkLevels.magic_rings > 0) {
            const level = this.perkLevels.magic_rings;
            const isPermanent = level >= 6;

            // Gestion du cooldown et activation
            if (isPermanent) {
                // Niveau 6: anneaux permanents
                this.perkEffects.ringsActive = true;
                this.perkEffects.ringsPermanent = true;
            } else {
                // Niveaux 1-5: disparaît après un tour complet, 15 secondes de cooldown
                if (this.perkEffects.ringsActive) {
                    // La désactivation se fait dans la rotation quand on atteint 2π
                } else if (this.perkEffects.ringsCooldown > 0) {
                    this.perkEffects.ringsCooldown -= deltaTime;
                } else {
                    // Activer les anneaux
                    this.perkEffects.ringsActive = true;
                    this.perkEffects.ringsRotation = 0; // Commencer à 0
                    this.perkEffects.ringsHitEnemies.clear();
                }
            }

            // Rotation des anneaux (tour complet en 5 secondes)
            if (this.perkEffects.ringsActive) {
                this.perkEffects.ringsRotation += (deltaTime / 5) * Math.PI * 2;
                
                // Désactiver après un tour complet (sauf si permanent)
                if (this.perkEffects.ringsRotation >= Math.PI * 2) {
                    if (!this.perkEffects.ringsPermanent) {
                        this.perkEffects.ringsActive = false;
                        this.perkEffects.ringsCooldown = 15;
                        this.perkEffects.ringsHitEnemies.clear();
                        this.perkEffects.ringsRotation = 0;
                    } else {
                        this.perkEffects.ringsRotation -= Math.PI * 2;
                    }
                }
            }
        }

        // Effets de status (brûlure, etc.)
        for (let i = this.statusEffects.length - 1; i >= 0; i--) {
            const effect = this.statusEffects[i];
            effect.elapsed += deltaTime;

            if (effect.type === 'burn') {
                // Appliquer les dégâts de brûlure
                const damageInterval = 1.0; // 1 seconde
                if (Math.floor(effect.elapsed / damageInterval) > Math.floor((effect.elapsed - deltaTime) / damageInterval)) {
                    this.takeDamage(effect.data.damagePerSecond);
                    if (window.game) window.game.addFloatingText(this.x, this.y, `-${effect.data.damagePerSecond}`, '#ff6b00');
                }
            }

            if (effect.elapsed >= effect.duration) {
                this.statusEffects.splice(i, 1);
            }
        }
    }

    fireAutomaticFireball() {
        // Trouver l'ennemi le plus proche dans la portée de l'archer
        const archerRange = CONFIG.CLASSES.archer.range;
        const nearestEnemy = window.game ? window.game.findNearestEnemy(this.x, this.y, archerRange) : null;

        if (nearestEnemy) {
            // Créer une animation de fireball
            const fireballAnimation = new ProjectileAnimation(
                this.x, this.y,
                nearestEnemy.x, nearestEnemy.y,
                'fireball',
                8 // Vitesse moyenne
            );

            // Appliquer les dégâts et l'effet de brûlure à l'arrivée
            fireballAnimation.onComplete = () => {
                if (game.enemies.includes(nearestEnemy)) {
                    const fireballDamage = 20 * this.perkLevels.fireball;
                    const killed = nearestEnemy.takeDamage(fireballDamage);
                    // Compter les dégâts infligés par le joueur (fireball automatique)
                    this.totalDamageDealt += fireballDamage;

                    // Afficher les dégâts
                    if (window.game) window.game.addFloatingText(nearestEnemy.x, nearestEnemy.y, `-${fireballDamage} 🔥`, '#ff6b00');

                    // Appliquer l'effet de brûlure
                    if (killed) {
                        nearestEnemy.applyStatusEffect({
                            type: 'burn',
                            duration: 3,
                            data: { damagePerSecond: 5 }
                        });
                    } else {
                        // Retirer l'ennemi mort
                        game.enemies = game.enemies.filter(e => e !== nearestEnemy);
                        this.gainXP(nearestEnemy.xpValue);
                    }
                }
            };

            game.animations.push(fireballAnimation);
            if (window.game) window.game.addLog('🔥 Fireball automatique!', 'damage');
        }
    }

    // Prendre des dégâts (avec bouclier)
    takeDamage(amount) {
        console.log(`🎯 takeDamage appelé: -${amount} HP | Santé avant: ${this.health}/${this.maxHealth}`);
        console.log('   GodMode:', this.perkEffects.godMode, '| Shield:', this.perkEffects.shieldActive);

        // God Mode - Invincibilité (debug seulement)
        if (this.perkEffects.godMode) {
            console.log('🛡️ GOD MODE ACTIF - Dégâts bloqués');
            if (window.game) window.game.addFloatingText(this.x, this.y, 'GOD MODE', '#ffd700');
            return false;
        }

        // Si le bouclier est actif, bloquer les dégâts
        if (this.perkEffects.shieldActive) {
            console.log('🛡️ BOUCLIER ACTIF - Dégâts bloqués');
            if (window.game) {
                window.game.addFloatingText(this.x, this.y, 'BLOQUÉ!', '#3498db');
                window.game.playSound('shieldReflect');
            }
            return false;
        }

        this.health -= amount;
        // IMPORTANT: Clamp la santé à minimum 0 pour éviter les valeurs négatives
        this.health = Math.max(0, this.health);
        console.log(`💔 Santé après dégâts: ${this.health}/${this.maxHealth}`);

        // Seconde vie
        if (this.health <= 0 && this.perkEffects.hasSecondLife && !this.perkEffects.secondLifeUsed) {
            console.log('💛 SECONDE VIE ACTIVÉE! Retour à 50% HP');
            this.perkEffects.secondLifeUsed = true;
            this.health = Math.floor(this.maxHealth * 0.5);

            // Lancer l'animation de seconde vie
            if (window.game) window.game.playSecondLifeAnimation();
            return false;
        }

        const isDead = this.health <= 0;
        console.log(`   Retour isDead: ${isDead}`);
        if (isDead) {
            console.log('💀💀💀 JOUEUR DEVRAIT MOURIR! HP:', this.health);
        }

        return isDead;
    }
}

class Enemy extends Entity {
    constructor(x, y, level, zone, isBoss = false, enemyType = null) {
        let baseHealth, baseDamage;

        if (isBoss) {
            // Progression des PV des boss : 500 -> 2500
            // Zone 1: 500, Zone 2: 1000, Zone 3: 1500, Zone 4: 2000, Zone 5: 2500
            baseHealth = 500 * zone;
            baseDamage = 30;
        } else {
            baseHealth = 50;
            baseDamage = 10;
        }

        // Calcul du multiplicateur en fonction du niveau (seulement pour les ennemis normaux)
        const levelInZone = ((level - 1) % CONFIG.LEVELS_PER_ZONE) + 1;
        const multiplier = isBoss ? 1 : (1 + (levelInZone - 1) * 0.1);

        // Type d'ennemi (passé en paramètre ou melee par défaut)
        const combatType = enemyType || 'melee';

        // Ajuster la vie selon le type
        let healthMultiplier = 1;
        if (combatType === 'tank') {
            healthMultiplier = 2;   // 2x plus de vie
        } else if (combatType === 'small') {
            healthMultiplier = 0.5; // 2x moins de vie
        }

        const health = Math.floor(baseHealth * multiplier * healthMultiplier);
        const damage = Math.floor(baseDamage * multiplier);

        super(x, y, health, damage, 1);

        this.isBoss = isBoss;
        this.zone = zone;

        // XP selon le type d'ennemi
        if (isBoss) {
            this.xpValue = 'level'; // Spécial: donne un niveau complet
        } else if (combatType === 'tank') {
            this.xpValue = 50;
        } else if (combatType === 'small') {
            this.xpValue = 30;
        } else {
            this.xpValue = 20; // melee et ranged
        }

        // Type d'ennemi
        this.combatType = combatType;
        this.range = this.combatType === 'ranged' ? 4 : 1;

        // IA et mouvement
        this.moveTimer = 0;
        // Les petits monstres bougent 4x plus vite (4 cases/seconde)
        this.moveInterval = this.combatType === 'small' ? 0.25 : 1;
        this.isAggro = false;  // Est-ce que l'ennemi poursuit le joueur?
        this.currentRoom = null;

        // Visuel
        this.visualType = Math.floor(Math.random() * 6);
        this.spriteIndex = 0; // Sera défini lors du spawn

        // Effets de status
        this.statusEffects = []; // { type, duration, elapsed, data }
    }

    // Appliquer un effet de status (brûlure, etc.)
    applyStatusEffect(type, duration, data) {
        this.statusEffects.push({
            type: type,
            duration: duration,
            elapsed: 0,
            data: data
        });
    }

    // Mise à jour des effets de status
    updateStatusEffects(deltaTime) {
        for (let i = this.statusEffects.length - 1; i >= 0; i--) {
            const effect = this.statusEffects[i];
            effect.elapsed += deltaTime;

            if (effect.type === 'burn') {
                // Appliquer les dégâts de brûlure toutes les secondes
                const damageInterval = 1.0;
                if (Math.floor(effect.elapsed / damageInterval) > Math.floor((effect.elapsed - deltaTime) / damageInterval)) {
                    this.takeDamage(effect.data.damagePerSecond);
                    if (window.game) window.game.addFloatingText(this.x, this.y, `-${effect.data.damagePerSecond} 🔥`, '#ff6b00');
                }
            }

            if (effect.elapsed >= effect.duration) {
                this.statusEffects.splice(i, 1);
            }
        }
    }
}

// ===== CLASSE BOSS ZONE 1 - SYLVANUS (Forêt Mystique) =====
// Mécanique spéciale: Phase 1 (projectiles), Phase 2 (lianes + régénération)
class ForestBoss extends Enemy {
    constructor(x, y, level, zone) {
        super(x, y, level, zone, true, 'boss');
        
        // Statistiques de boss
        this.maxHealth = this.health;
        this.phase = 1; // Phase 1: projectiles, Phase 2: lianes
        this.phaseTransitionTriggered = false;
        this.bossType = 'forest'; // Identifiant du type de boss
        
        // Timers pour les attaques
        this.projectileTimer = 0;
        this.projectileInterval = 5; // 5 secondes entre projectiles
        
        this.vineTimer = 0;
        this.vineInterval = 3; // 3 secondes entre attaques de lianes
        
        this.regenTimer = 0;
        this.regenInterval = 5; // Régénération toutes les 5 secondes en phase 2
        
        this.contactDamageTimer = 0;
        this.contactDamageInterval = 0.8; // Dégâts de contact toutes les 0.8 secondes
        
        // Effets visuels
        this.rageAuraRadius = 0;
        this.rageAuraOpacity = 0;
        this.isEnraged = false;
        this.screenShakeIntensity = 0;
        this.flashWhiteIntensity = 0;
        
        // Animation de transition
        this.transitionAnimating = false;;
        this.transitionTimer = 0;
        this.transitionDuration = 3; // 3 secondes de cinématique
        
        // Lianes actives
        this.activeVines = [];
    }
    
    getHealthPercent() {
        return this.health / this.maxHealth;
    }
    
    update(deltaTime) {
        super.update(deltaTime);
        
        // Vérifier la transition de phase
        if (this.phase === 1 && this.getHealthPercent() <= 0.5 && !this.phaseTransitionTriggered) {
            this.triggerPhaseTransition();
        }
        
        // Animation de transition
        if (this.transitionAnimating) {
            this.updateTransition(deltaTime);
            return; // Pas d'autres actions pendant la transition
        }
        
        // Mettre à jour l'aura de rage en phase 2
        if (this.isEnraged) {
            this.rageAuraRadius = 80 + Math.sin(Date.now() / 200) * 10;
            this.rageAuraOpacity = 0.3 + Math.sin(Date.now() / 300) * 0.1;
        }
        
        // Mise à jour des timers d'attaque
        this.projectileTimer += deltaTime;
        this.contactDamageTimer += deltaTime;
        
        if (this.phase === 2) {
            this.vineTimer += deltaTime;
            this.regenTimer += deltaTime;
            
            // Régénération en phase 2 (quand < 25% de vie)
            if (this.getHealthPercent() <= 0.25 && this.regenTimer >= this.regenInterval) {
                this.regenTimer = 0;
                const regenAmount = Math.floor(this.maxHealth * 0.05); // 5% de vie max
                this.health = Math.min(this.maxHealth * 0.5, this.health + regenAmount); // Ne dépasse pas 50%
                if (typeof game !== 'undefined') {
                    if (window.game) window.game.addFloatingText(this.x, this.y, `+${regenAmount} 💚`, '#00ff00');
                    if (window.game) window.game.addLog('🌿 Le boss se régénère!', 'heal');
                }
            }
        }
        
        // Mise à jour des lianes actives
        for (let i = this.activeVines.length - 1; i >= 0; i--) {
            const vine = this.activeVines[i];
            vine.timer += deltaTime;
            vine.progress = Math.min(vine.timer / vine.duration, 1);
            
            if (vine.timer >= vine.duration + 0.5) {
                this.activeVines.splice(i, 1);
            }
        }
    }
    
    triggerPhaseTransition() {
        this.phaseTransitionTriggered = true;
        this.transitionAnimating = true;
        this.transitionTimer = 0;
        this.isEnraged = true;
        this.phase = 2; // Passer en phase 2 AVANT d'afficher le dialogue

        // Notifier le jeu de la transition
        if (typeof game !== 'undefined') {
            game.pauseGameForBossTransition(this);
        }
    }
    
    updateTransition(deltaTime) {
        this.transitionTimer += deltaTime;
        const progress = this.transitionTimer / this.transitionDuration;
        
        // Effets de transition
        if (progress < 0.3) {
            // Phase 1: écran qui tremble
            this.screenShakeIntensity = 10 * (progress / 0.3);
        } else if (progress < 0.7) {
            // Phase 2: flash blancs
            this.screenShakeIntensity = 10;
            this.flashWhiteIntensity = Math.sin((progress - 0.3) / 0.4 * Math.PI * 6) * 0.5;
        } else {
            // Phase 3: stabilisation
            this.screenShakeIntensity = 10 * (1 - (progress - 0.7) / 0.3);
            this.flashWhiteIntensity = 0;
        }
        
        if (this.transitionTimer >= this.transitionDuration) {
            this.transitionAnimating = false;
            this.screenShakeIntensity = 0;
            this.flashWhiteIntensity = 0;

            if (typeof game !== 'undefined') {
                game.resumeGameAfterBossTransition(this);
            }
        }
    }
    
    // Lancer un projectile vers le joueur
    fireProjectile(playerX, playerY) {
        if (this.projectileTimer < this.projectileInterval) return null;
        this.projectileTimer = 0;
        
        return {
            startX: this.x,
            startY: this.y,
            endX: playerX,
            endY: playerY,
            damage: Math.floor(this.damage * 0.8)
        };
    }
    
    // Lancer des lianes dans toutes les directions
    fireVines() {
        if (this.phase !== 2 || this.vineTimer < this.vineInterval) return [];
        this.vineTimer = 0;
        
        const vines = [];
        const directions = [
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 },
            { dx: 1, dy: 1 },
            { dx: -1, dy: 1 },
            { dx: 1, dy: -1 },
            { dx: -1, dy: -1 }
        ];
        
        for (const dir of directions) {
            const vine = {
                startX: this.x,
                startY: this.y,
                dx: dir.dx,
                dy: dir.dy,
                length: 8, // 8 cases de portée
                damage: 20,
                timer: 0,
                duration: 0.5, // 0.5 seconde pour atteindre la portée max
                progress: 0,
                hasHitPlayer: false
            };
            vines.push(vine);
            this.activeVines.push(vine);
        }
        
        return vines;
    }
    
    // Vérifier si une liane touche le joueur
    checkVineHit(playerX, playerY) {
        for (const vine of this.activeVines) {
            if (vine.hasHitPlayer) continue;
            
            const currentLength = Math.floor(vine.length * vine.progress);
            for (let i = 1; i <= currentLength; i++) {
                const vineX = vine.startX + vine.dx * i;
                const vineY = vine.startY + vine.dy * i;
                
                if (vineX === playerX && vineY === playerY) {
                    vine.hasHitPlayer = true;
                    return vine.damage;
                }
            }
        }
        return 0;
    }
    
    // Dégâts de contact (corps à corps)
    getContactDamage() {
        if (this.contactDamageTimer >= this.contactDamageInterval) {
            this.contactDamageTimer = 0;
            return Math.floor(this.damage * 0.5);
        }
        return 0;
    }
    
    // Rendu de l'aura de rage
    renderRageAura(ctx, screenX, screenY, cellSize) {
        if (!this.isEnraged) return;
        
        const gradient = ctx.createRadialGradient(
            screenX, screenY, 0,
            screenX, screenY, this.rageAuraRadius
        );
        gradient.addColorStop(0, `rgba(255, 0, 0, 0)`);
        gradient.addColorStop(0.5, `rgba(255, 0, 0, ${this.rageAuraOpacity * 0.5})`);
        gradient.addColorStop(1, `rgba(139, 0, 0, ${this.rageAuraOpacity})`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(screenX, screenY, this.rageAuraRadius, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Rendu des lianes
    renderVines(ctx, camera, cellSize) {
        for (const vine of this.activeVines) {
            const currentLength = Math.floor(vine.length * vine.progress);
            
            for (let i = 1; i <= currentLength; i++) {
                const vineX = vine.startX + vine.dx * i;
                const vineY = vine.startY + vine.dy * i;
                
                const screenX = (vineX - camera.x) * cellSize + cellSize / 2;
                const screenY = (vineY - camera.y) * cellSize + cellSize / 2;
                
                // Dessiner la liane
                ctx.fillStyle = vine.progress >= 1 ? '#2d5016' : '#4a7023';
                ctx.beginPath();
                ctx.arc(screenX, screenY, cellSize * 0.3, 0, Math.PI * 2);
                ctx.fill();
                
                // Épines
                ctx.fillStyle = '#1a3009';
                for (let j = 0; j < 4; j++) {
                    const angle = (j / 4) * Math.PI * 2 + Date.now() / 500;
                    const spikeX = screenX + Math.cos(angle) * cellSize * 0.35;
                    const spikeY = screenY + Math.sin(angle) * cellSize * 0.35;
                    ctx.beginPath();
                    ctx.arc(spikeX, spikeY, cellSize * 0.08, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
    }
}

// Boss de la Zone 2 - Cavernes
class CavernBoss extends Enemy {
    constructor(x, y, level, zone) {
        super(x, y, level, zone, true, 'boss');

        // Statistiques de boss
        this.maxHealth = this.health;
        this.phase = 1; // Phase 1: stalactites, Phase 2: obscurité, Phase 3: sphères noires
        this.phaseTransitionTriggered = {
            phase2: false,
            phase3: false
        };
        this.bossType = 'cavern';
        this.baseSpeed = 0.3; // Vitesse de base
        this.speed = this.baseSpeed;

        // Phase 1: Stalactites (100% - 60%)
        this.stalactiteTimer = 0;
        this.stalactiteInterval = 8; // Toutes les 8 secondes
        this.activeStalactites = []; // { x, y, timer, duration, state: 'warning'/'falling' }

        // Phase 2: Obscurité et téléportation (60% - 20%)
        this.darknessTimer = 0;
        this.darknessInterval = 5; // Toutes les 5 secondes
        this.isDark = false;
        this.darknessDuration = 3; // 3 secondes d'obscurité
        this.darknessElapsed = 0;

        // Phase 3: Sphères noires (20% - 0%)
        this.darkSpheres = []; // { x, y, moveTimer }
        this.spheresSpawned = false;

        // Effets visuels
        this.rageAuraRadius = 0;
        this.rageAuraOpacity = 0;
        this.isEnraged = false;
    }

    getHealthPercent() {
        return this.health / this.maxHealth;
    }

    update(deltaTime) {
        super.update(deltaTime);

        // Vérifier les transitions de phase
        const healthPercent = this.getHealthPercent();

        if (this.phase === 1 && healthPercent <= 0.6 && !this.phaseTransitionTriggered.phase2) {
            this.triggerPhase2();
        }

        if (this.phase === 2 && healthPercent <= 0.2 && !this.phaseTransitionTriggered.phase3) {
            this.triggerPhase3();
        }

        // Logique selon la phase
        if (this.phase === 1) {
            this.updatePhase1(deltaTime);
        } else if (this.phase === 2) {
            this.updatePhase2(deltaTime);
        } else if (this.phase === 3) {
            this.updatePhase3(deltaTime);
        }
    }

    // Phase 1: Stalactites
    updatePhase1(deltaTime) {
        this.stalactiteTimer += deltaTime;

        if (this.stalactiteTimer >= this.stalactiteInterval) {
            this.stalactiteTimer = 0;
            this.dropStalactites();
        }

        // Mettre à jour les stalactites actives
        for (let i = this.activeStalactites.length - 1; i >= 0; i--) {
            const stalactite = this.activeStalactites[i];
            stalactite.timer += deltaTime;

            if (stalactite.state === 'warning' && stalactite.timer >= stalactite.warningDuration) {
                stalactite.state = 'falling';
                stalactite.timer = 0;
            } else if (stalactite.state === 'falling' && stalactite.timer >= stalactite.fallingDuration) {
                // Vérifier si le joueur est touché
                if (window.game && window.game.player) {
                    const player = window.game.player;
                    if (player.x === stalactite.x && player.y === stalactite.y) {
                        player.takeDamage(30);
                        window.game.addFloatingText(player.x, player.y, '-30 💎', '#ff4757');
                    }
                }
                this.activeStalactites.splice(i, 1);
            }
        }
    }

    dropStalactites() {
        // Créer 20 stalactites aléatoires dans l'arène
        if (!window.game || !window.game.dungeon) return;

        const bossRoom = window.game.dungeon.bossRoom;
        if (!bossRoom) return;

        // Son de stalactites qui tombent
        if (window.game) {
            window.game.playSound('stoneFall');
        }

        for (let i = 0; i < 20; i++) {
            const x = bossRoom.x + Math.floor(Math.random() * bossRoom.width);
            const y = bossRoom.y + Math.floor(Math.random() * bossRoom.height);

            this.activeStalactites.push({
                x: x,
                y: y,
                timer: 0,
                warningDuration: 3, // 3 secondes d'avertissement
                fallingDuration: 0.2, // Animation de chute rapide
                state: 'warning'
            });
        }
    }

    // Phase 2: Obscurité et téléportation
    triggerPhase2() {
        this.phaseTransitionTriggered.phase2 = true;
        this.phase = 2;
        this.speed = this.baseSpeed * 1.3; // +30% de vitesse
        this.isEnraged = true;

        if (window.game) {
            window.game.pauseGameForBossTransition(this);
        }
    }

    updatePhase2(deltaTime) {
        // Continuer les stalactites de la phase 1
        this.updatePhase1(deltaTime);

        // Gérer l'obscurité
        this.darknessTimer += deltaTime;

        if (this.isDark) {
            this.darknessElapsed += deltaTime;
            if (this.darknessElapsed >= this.darknessDuration) {
                this.isDark = false;
                this.darknessElapsed = 0;
                this.darknessTimer = 0;
            }
        } else if (this.darknessTimer >= this.darknessInterval) {
            this.activateDarkness();
        }
    }

    activateDarkness() {
        this.isDark = true;
        this.darknessElapsed = 0;

        // Son de téléportation
        if (window.game) {
            window.game.playSound('teleport');
        }

        // Téléportation aléatoire
        if (window.game && window.game.dungeon) {
            const bossRoom = window.game.dungeon.bossRoom;
            if (bossRoom) {
                this.x = bossRoom.x + Math.floor(Math.random() * bossRoom.width);
                this.y = bossRoom.y + Math.floor(Math.random() * bossRoom.height);
            }
        }

        // Régénération de 40 PV
        this.health = Math.min(this.maxHealth, this.health + 40);

        if (window.game) {
            window.game.addFloatingText(this.x, this.y, '+40 💚', '#00ff00');
            window.game.addLog('🌑 L\'obscurité envahit la caverne!', 'damage');
        }
    }

    // Phase 3: Sphères noires mortelles
    triggerPhase3() {
        this.phaseTransitionTriggered.phase3 = true;
        this.phase = 3;
        this.spawnDarkSpheres();

        if (window.game) {
            window.game.pauseGameForBossTransition(this);
        }
    }

    updatePhase3(deltaTime) {
        // Continuer les phases précédentes
        this.updatePhase2(deltaTime);

        // Mettre à jour les sphères noires
        for (const sphere of this.darkSpheres) {
            sphere.moveTimer += deltaTime;

            if (sphere.moveTimer >= 1) { // 1 case par seconde
                sphere.moveTimer = 0;
                this.moveSphereTowardsPlayer(sphere);
            }
        }

        // Vérifier les collisions avec le joueur
        if (window.game && window.game.player) {
            const player = window.game.player;
            for (const sphere of this.darkSpheres) {
                if (sphere.x === player.x && sphere.y === player.y) {
                    window.game.gameOver(); // Fin du jeu immédiate
                }
            }
        }
    }

    spawnDarkSpheres() {
        if (this.spheresSpawned) return;
        this.spheresSpawned = true;

        // Créer 3 sphères noires à des positions aléatoires
        if (!window.game || !window.game.dungeon) return;

        const bossRoom = window.game.dungeon.bossRoom;
        if (!bossRoom) return;

        for (let i = 0; i < 3; i++) {
            const x = bossRoom.x + Math.floor(Math.random() * bossRoom.width);
            const y = bossRoom.y + Math.floor(Math.random() * bossRoom.height);

            this.darkSpheres.push({
                x: x,
                y: y,
                moveTimer: 0
            });
        }
    }

    moveSphereTowardsPlayer(sphere) {
        if (!window.game || !window.game.player) return;

        const player = window.game.player;
        const dx = Math.sign(player.x - sphere.x);
        const dy = Math.sign(player.y - sphere.y);

        // Déplacer d'une case vers le joueur
        if (Math.abs(player.x - sphere.x) > Math.abs(player.y - sphere.y)) {
            sphere.x += dx;
        } else {
            sphere.y += dy;
        }
    }

    // Rendu de l'aura de rage
    renderRageAura(ctx, screenX, screenY, cellSize) {
        ctx.save();
        ctx.globalAlpha = this.rageAuraOpacity;
        ctx.fillStyle = '#8B008B'; // Violet sombre pour les cavernes
        ctx.beginPath();
        ctx.arc(screenX, screenY, this.rageAuraRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // Rendu des stalactites
    renderStalactites(ctx, camera, cellSize) {
        for (const stalactite of this.activeStalactites) {
            const screenX = (stalactite.x - camera.x) * cellSize + cellSize / 2;
            const screenY = (stalactite.y - camera.y) * cellSize + cellSize / 2;

            if (stalactite.state === 'warning') {
                // Cercle rouge d'avertissement
                ctx.save();
                const alpha = 0.3 + Math.sin(stalactite.timer * 5) * 0.2;
                ctx.globalAlpha = alpha;
                ctx.fillStyle = '#ff0000';
                ctx.beginPath();
                ctx.arc(screenX, screenY, cellSize * 0.4, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#ff0000';
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.restore();
            } else if (stalactite.state === 'falling') {
                // Stalactite qui tombe
                ctx.fillStyle = '#696969';
                ctx.beginPath();
                ctx.moveTo(screenX, screenY - cellSize * 0.5);
                ctx.lineTo(screenX - cellSize * 0.2, screenY);
                ctx.lineTo(screenX + cellSize * 0.2, screenY);
                ctx.closePath();
                ctx.fill();
            }
        }
    }

    // Rendu des sphères noires
    renderDarkSpheres(ctx, camera, cellSize) {
        for (const sphere of this.darkSpheres) {
            const screenX = (sphere.x - camera.x) * cellSize + cellSize / 2;
            const screenY = (sphere.y - camera.y) * cellSize + cellSize / 2;

            // Sphère noire avec aura
            ctx.save();

            // Aura pulsante
            const pulse = Math.sin(Date.now() / 200) * 0.2 + 0.8;
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.arc(screenX, screenY, cellSize * 0.6 * pulse, 0, Math.PI * 2);
            ctx.fill();

            // Sphère principale
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.arc(screenX, screenY, cellSize * 0.4, 0, Math.PI * 2);
            ctx.fill();

            // Contour rouge
            ctx.strokeStyle = '#ff0000';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.restore();
        }
    }
}

// Boss de la Zone 3 - Volcan
class VolcanoBoss extends Enemy {
    constructor(x, y, level, zone) {
        super(x, y, level, zone, true, 'boss');

        // Statistiques de boss
        this.maxHealth = this.health;
        this.phase = 1; // Phase 1: boules de feu, Phase 2: murs de feu, Phase 3: course folle
        this.phaseTransitionTriggered = {
            phase2: false,
            phase3: false
        };
        this.bossType = 'volcano';
        this.baseSpeed = 0.3;
        this.speed = this.baseSpeed;

        // Phase 1: Boules de feu avec brûlure (100% - 50%)
        this.fireballTimer = 0;
        this.fireballInterval = 4; // Toutes les 4 secondes
        this.activeFireballs = []; // { x, y, vx, vy, hasHit }

        // Phase 2: Murs de feu (50% - 30%)
        this.fireWallTimer = 0;
        this.fireWallInterval = 3; // Toutes les 3 secondes en phase 1
        this.fireWallIntervalPhase2 = 2.4; // 1.25x plus fréquent en phase 2 (3 / 1.25 = 2.4)
        this.fireWalls = []; // { x, y, creationTime }

        // Phase 3: Course folle avec lave (30% - 0%)
        this.lavaTrail = []; // { x, y, creationTime }
        this.isRampaging = false;
        this.rampageTargetX = null;
        this.rampageTargetY = null;
        this.rampageMoveTimer = 0;
        this.rampageMoveInterval = 0.1; // Bouge très vite

        // Effets visuels
        this.rageAuraRadius = 0;
        this.rageAuraOpacity = 0;
        this.isEnraged = false;
    }

    getHealthPercent() {
        return this.health / this.maxHealth;
    }

    update(deltaTime) {
        super.update(deltaTime);

        // Vérifier les transitions de phase
        const healthPercent = this.getHealthPercent();

        if (this.phase === 1 && healthPercent <= 0.5 && !this.phaseTransitionTriggered.phase2) {
            this.triggerPhase2();
        }

        if (this.phase === 2 && healthPercent <= 0.3 && !this.phaseTransitionTriggered.phase3) {
            this.triggerPhase3();
        }

        // Logique selon la phase
        if (this.phase === 1) {
            this.updatePhase1(deltaTime);
        } else if (this.phase === 2) {
            this.updatePhase2(deltaTime);
        } else if (this.phase === 3) {
            this.updatePhase3(deltaTime);
        }

        // Mettre à jour les boules de feu
        for (let i = this.activeFireballs.length - 1; i >= 0; i--) {
            const fireball = this.activeFireballs[i];
            fireball.x += fireball.vx * deltaTime;
            fireball.y += fireball.vy * deltaTime;

            // Supprimer si sort de l'arène ou après 5 secondes
            if (!fireball.creationTime) fireball.creationTime = Date.now();
            if (Date.now() - fireball.creationTime > 5000) {
                this.activeFireballs.splice(i, 1);
                continue;
            }

            // Collision gérée dans updateVolcanoBossLogic pour éviter les problèmes d'accès à window.game
        }
    }

    // Phase 1: Boules de feu
    updatePhase1(deltaTime) {
        this.fireballTimer += deltaTime;

        if (this.fireballTimer >= this.fireballInterval) {
            this.fireballTimer = 0;
            this.shootFireballs();
        }
    }

    shootFireballs() {
        // Tirer 8 boules de feu dans toutes les directions
        const numFireballs = 8;
        for (let i = 0; i < numFireballs; i++) {
            const angle = (i / numFireballs) * Math.PI * 2;
            const speed = 3; // Cases par seconde

            this.activeFireballs.push({
                x: this.x,
                y: this.y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                hasHit: false,
                creationTime: Date.now()
            });
        }

        if (window.game) {
            // Son de boules de feu
            window.game.playSound('magicSpell');
            window.game.addLog('🔥 Le boss lance des boules de feu!', 'damage');
        }
    }

    // Phase 2: Murs de feu
    triggerPhase2() {
        this.phaseTransitionTriggered.phase2 = true;
        this.phase = 2;
        this.isEnraged = true;

        if (window.game) {
            window.game.pauseGameForBossTransition(this);
        }
    }

    updatePhase2(deltaTime) {
        // Phase 2: plus de boules de feu, seulement des murs de feu

        // Créer des murs de feu (fréquence augmentée de 1.25x)
        this.fireWallTimer += deltaTime;

        if (this.fireWallTimer >= this.fireWallIntervalPhase2) {
            this.fireWallTimer = 0;
            this.createFireWall();
        }
    }

    createFireWall() {
        if (!window.game || !window.game.dungeon) return;

        const bossRoom = window.game.dungeon.bossRoom;
        if (!bossRoom) return;

        // Créer un mur de 3 cases (3x1) à une position aléatoire
        const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';

        let startX, startY;
        if (orientation === 'horizontal') {
            startX = bossRoom.x + Math.floor(Math.random() * (bossRoom.width - 3));
            startY = bossRoom.y + Math.floor(Math.random() * bossRoom.height);
        } else {
            startX = bossRoom.x + Math.floor(Math.random() * bossRoom.width);
            startY = bossRoom.y + Math.floor(Math.random() * (bossRoom.height - 3));
        }

        // Son de création de murs
        if (window.game) {
            window.game.playSound('spawn');
        }

        // Créer les 3 cases du mur
        for (let i = 0; i < 3; i++) {
            const wallX = orientation === 'horizontal' ? startX + i : startX;
            const wallY = orientation === 'vertical' ? startY + i : startY;

            this.fireWalls.push({
                x: wallX,
                y: wallY,
                creationTime: Date.now()
            });
        }

        if (window.game) {
            window.game.addLog('🔥 Des murs de feu surgissent!', 'damage');
        }
    }

    checkFireWallCollision(playerX, playerY) {
        for (const wall of this.fireWalls) {
            // Dégâts si le joueur est adjacent (distance Manhattan <= 1) ou sur le mur lui-même
            const distance = Math.abs(wall.x - playerX) + Math.abs(wall.y - playerY);
            if (distance <= 1) {
                return 15; // Dégâts du mur de feu
            }
        }
        return 0;
    }

    // Phase 3: Course folle
    triggerPhase3() {
        this.phaseTransitionTriggered.phase3 = true;
        this.phase = 3;
        this.isRampaging = true;
        this.speed = this.baseSpeed * 1.5; // +50% de vitesse

        if (window.game) {
            window.game.pauseGameForBossTransition(this);
        }
    }

    updatePhase3(deltaTime) {
        // Continuer les phases précédentes
        this.updatePhase2(deltaTime);

        // Course folle
        this.rampageMoveTimer += deltaTime;

        if (this.rampageMoveTimer >= this.rampageMoveInterval) {
            this.rampageMoveTimer = 0;

            // Choisir une nouvelle cible aléatoire si nécessaire
            if (!this.rampageTargetX || !this.rampageTargetY ||
                (this.x === this.rampageTargetX && this.y === this.rampageTargetY)) {
                this.chooseRampageTarget();
            }

            // Se déplacer vers la cible
            this.moveTowardsRampageTarget();

            // Laisser une trace de lave
            this.lavaTrail.push({
                x: this.x,
                y: this.y,
                creationTime: Date.now()
            });

            // Limiter le nombre de cases de lave à 10 maximum
            if (this.lavaTrail.length > 10) {
                this.lavaTrail.shift(); // Supprimer la plus ancienne
            }
        }
    }

    chooseRampageTarget() {
        if (!window.game || !window.game.dungeon) return;

        const bossRoom = window.game.dungeon.bossRoom;
        if (!bossRoom) return;

        this.rampageTargetX = bossRoom.x + Math.floor(Math.random() * bossRoom.width);
        this.rampageTargetY = bossRoom.y + Math.floor(Math.random() * bossRoom.height);
    }

    moveTowardsRampageTarget() {
        if (!this.rampageTargetX || !this.rampageTargetY) return;

        const dx = Math.sign(this.rampageTargetX - this.x);
        const dy = Math.sign(this.rampageTargetY - this.y);

        // Mouvement diagonal ou droit
        if (Math.abs(this.rampageTargetX - this.x) > Math.abs(this.rampageTargetY - this.y)) {
            this.x += dx;
        } else {
            this.y += dy;
        }
    }

    checkLavaCollision(playerX, playerY) {
        for (const lava of this.lavaTrail) {
            // Dégâts si le joueur est exactement sur la lave OU adjacente
            const dx = Math.abs(lava.x - playerX);
            const dy = Math.abs(lava.y - playerY);
            if (dx <= 1 && dy <= 1 && (dx + dy <= 1 || (dx === 0 && dy === 0))) {
                return 15; // Dégâts de la lave
            }
        }
        return 0;
    }

    // Rendu de l'aura de rage
    renderRageAura(ctx, screenX, screenY, cellSize) {
        ctx.save();
        ctx.globalAlpha = this.rageAuraOpacity;
        ctx.fillStyle = '#ff4500'; // Orange rougeâtre pour le volcan
        ctx.beginPath();
        ctx.arc(screenX, screenY, this.rageAuraRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // Rendu des boules de feu
    renderFireballs(ctx, camera, cellSize) {
        for (const fireball of this.activeFireballs) {
            const screenX = (fireball.x - camera.x) * cellSize + cellSize / 2;
            const screenY = (fireball.y - camera.y) * cellSize + cellSize / 2;

            // Boule de feu avec effet de flamme
            ctx.save();

            // Aura de feu
            const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, cellSize * 0.5);
            gradient.addColorStop(0, 'rgba(255, 255, 100, 0.8)');
            gradient.addColorStop(0.3, 'rgba(255, 150, 0, 0.6)');
            gradient.addColorStop(0.7, 'rgba(255, 69, 0, 0.4)');
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(screenX, screenY, cellSize * 0.5, 0, Math.PI * 2);
            ctx.fill();

            // Noyau de la boule
            ctx.fillStyle = '#ffff00';
            ctx.beginPath();
            ctx.arc(screenX, screenY, cellSize * 0.2, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }
    }

    // Rendu des murs de feu
    renderFireWalls(ctx, camera, cellSize) {
        for (const wall of this.fireWalls) {
            const screenX = (wall.x - camera.x) * cellSize;
            const screenY = (wall.y - camera.y) * cellSize;

            // Utiliser le sprite fire_wall (on dessine un rectangle pour l'instant)
            ctx.save();

            // Effet de flamme animé
            const time = Date.now() / 100;
            const flameHeight = Math.sin(time + wall.x + wall.y) * cellSize * 0.1;

            ctx.fillStyle = '#ff4500';
            ctx.fillRect(screenX, screenY, cellSize, cellSize);

            // Flammes
            ctx.fillStyle = '#ff6600';
            ctx.fillRect(screenX, screenY - flameHeight, cellSize, cellSize + flameHeight);

            // Lueur
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = '#ffff00';
            ctx.fillRect(screenX + cellSize * 0.2, screenY + cellSize * 0.2, cellSize * 0.6, cellSize * 0.6);

            ctx.restore();
        }
    }

    // Rendu de la lave
    renderLava(ctx, camera, cellSize) {
        for (const lava of this.lavaTrail) {
            const screenX = (lava.x - camera.x) * cellSize;
            const screenY = (lava.y - camera.y) * cellSize;

            // Effet de lave animé
            ctx.save();

            const time = Date.now() / 200;
            const glow = Math.sin(time + lava.x + lava.y) * 0.3 + 0.7;

            // Base de lave
            ctx.fillStyle = '#8B0000';
            ctx.fillRect(screenX, screenY, cellSize, cellSize);

            // Lave brillante
            ctx.globalAlpha = glow;
            ctx.fillStyle = '#ff4500';
            ctx.fillRect(screenX + cellSize * 0.1, screenY + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);

            // Points brillants
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#ff6600';
            ctx.fillRect(screenX + cellSize * 0.3, screenY + cellSize * 0.3, cellSize * 0.4, cellSize * 0.4);

            ctx.restore();
        }
    }
}

class Healer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hasHealed = false; // Ne peut soigner qu'une fois par niveau
        this.animationTimer = 0; // Pour animation de flottement
    }

    // Soigne le joueur entre 30% et 100% de sa vie manquante
    heal(player) {
        if (this.hasHealed) return 0;

        const missingHealth = player.maxHealth - player.health;
        if (missingHealth <= 0) return 0; // Déjà pleine vie

        // Entre 30% et 100% de la vie manquante
        const healPercent = 0.3 + Math.random() * 0.7;
        const healAmount = Math.floor(missingHealth * healPercent);

        player.health = Math.min(player.maxHealth, player.health + healAmount);
        this.hasHealed = true;

        return healAmount;
    }

    update(deltaTime) {
        this.animationTimer += deltaTime;
    }
}

// ===== SYSTÈME D'ANIMATIONS =====
class Animation {
    constructor(x, y, duration) {
        this.x = x;
        this.y = y;
        this.duration = duration;
        this.elapsed = 0;
        this.finished = false;
        this.onComplete = null; // Callback appelée à la fin de l'animation
        this.hasTriggeredComplete = false;
    }
    
    update(deltaTime) {
        this.elapsed += deltaTime;
        if (this.elapsed >= this.duration && !this.hasTriggeredComplete) {
            this.finished = true;
            this.hasTriggeredComplete = true;
            if (this.onComplete) {
                this.onComplete();
            }
        }
    }
    
    render(ctx, camera, cellSize) {
        // Override dans les sous-classes
    }
}

// Animation de projectile (flèche, boule magique)
class ProjectileAnimation extends Animation {
    constructor(startX, startY, endX, endY, type, speed = 15) {
        super(startX, startY, 0.5);
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.type = type; // 'arrow' ou 'magic'
        this.speed = speed;
        
        // Calculer la durée en fonction de la distance
        const distance = Math.hypot(endX - startX, endY - startY);
        this.duration = distance / speed;
    }
    
    update(deltaTime) {
        super.update(deltaTime);
    }
    
    render(ctx, camera, cellSize) {
        const progress = Math.min(this.elapsed / this.duration, 1);
        const currentX = this.startX + (this.endX - this.startX) * progress;
        const currentY = this.startY + (this.endY - this.startY) * progress;

        const screenX = (currentX - camera.x) * cellSize + cellSize / 2;
        const screenY = (currentY - camera.y) * cellSize + cellSize / 2;

        if (this.type === 'arrow') {
            this.renderArrow(ctx, screenX, screenY, cellSize);
        } else if (this.type === 'magic') {
            this.renderMagicBall(ctx, screenX, screenY, cellSize);
        } else if (this.type === 'fireball') {
            this.renderFireball(ctx, screenX, screenY, cellSize);
        }
    }
    
    renderArrow(ctx, x, y, cellSize) {
        // Calculer l'angle de la flèche
        const angle = Math.atan2(this.endY - this.startY, this.endX - this.startX);
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        
        // Flèche en pixel art
        const size = cellSize * 0.6;
        ctx.fillStyle = '#8b4513'; // Marron pour le bois
        ctx.fillRect(-size/2, -2, size * 0.7, 4);
        
        ctx.fillStyle = '#c0c0c0'; // Gris pour la pointe
        ctx.beginPath();
        ctx.moveTo(size/2 - 2, 0);
        ctx.lineTo(size/2 + 4, 0);
        ctx.lineTo(size/2, -3);
        ctx.lineTo(size/2, 3);
        ctx.closePath();
        ctx.fill();
        
        // Plumes
        ctx.fillStyle = '#ff6b6b';
        ctx.fillRect(-size/2 - 2, -3, 4, 2);
        ctx.fillRect(-size/2 - 2, 1, 4, 2);
        
        ctx.restore();
    }
    
    renderMagicBall(ctx, x, y, cellSize) {
        const progress = this.elapsed / this.duration;
        const size = cellSize * 0.4;
        
        // Effet de pulsation
        const pulse = 1 + Math.sin(this.elapsed * 20) * 0.2;
        
        // Aura extérieure
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * pulse);
        gradient.addColorStop(0, 'rgba(100, 149, 237, 0.8)');
        gradient.addColorStop(0.5, 'rgba(65, 105, 225, 0.4)');
        gradient.addColorStop(1, 'rgba(65, 105, 225, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size * pulse, 0, Math.PI * 2);
        ctx.fill();
        
        // Boule centrale
        ctx.fillStyle = '#6495ED';
        ctx.beginPath();
        ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        
        // Centre brillant
        ctx.fillStyle = '#B0C4DE';
        ctx.beginPath();
        ctx.arc(x - size * 0.15, y - size * 0.15, size * 0.25, 0, Math.PI * 2);
        ctx.fill();
        
        // Particules
        for (let i = 0; i < 3; i++) {
            const angle = (this.elapsed * 5 + i * Math.PI * 2 / 3);
            const px = x + Math.cos(angle) * size * 0.8;
            const py = y + Math.sin(angle) * size * 0.8;

            ctx.fillStyle = 'rgba(173, 216, 230, 0.6)';
            ctx.fillRect(px - 1, py - 1, 2, 2);
        }
    }

    renderFireball(ctx, x, y, cellSize) {
        const size = cellSize * 0.5;

        // Effet de pulsation plus intense
        const pulse = 1 + Math.sin(this.elapsed * 15) * 0.3;

        // Traînée de feu (simplifiée sans référence camera)
        for (let i = 1; i < 5; i++) {
            const trailAlpha = 0.3 * (1 - i * 0.2);
            const trailSize = size * 0.4 * (1 - i * 0.15);

            ctx.fillStyle = `rgba(255, 107, 0, ${trailAlpha})`;
            ctx.beginPath();
            ctx.arc(x, y, trailSize, 0, Math.PI * 2);
            ctx.fill();
        }

        // Aura extérieure (orange/rouge)
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * pulse);
        gradient.addColorStop(0, 'rgba(255, 69, 0, 0.9)');
        gradient.addColorStop(0.4, 'rgba(255, 140, 0, 0.6)');
        gradient.addColorStop(0.7, 'rgba(255, 69, 0, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Boule centrale (rouge-orange)
        ctx.fillStyle = '#ff4500';
        ctx.beginPath();
        ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Centre brillant (jaune)
        ctx.fillStyle = '#ffff00';
        ctx.beginPath();
        ctx.arc(x - size * 0.15, y - size * 0.15, size * 0.3, 0, Math.PI * 2);
        ctx.fill();

        // Flammes/particules autour
        for (let i = 0; i < 5; i++) {
            const angle = (this.elapsed * 10 + i * Math.PI * 2 / 5);
            const px = x + Math.cos(angle) * size * 0.7;
            const py = y + Math.sin(angle) * size * 0.7;

            ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
            ctx.fillRect(px - 2, py - 2, 4, 4);
        }
    }

}

// Animation de coup de mêlée (chevalier, bouclier)
class MeleeAnimation extends Animation {
    constructor(playerX, playerY, targetX, targetY, type) {
        super(playerX, playerY, 0.3);
        this.playerX = playerX;
        this.playerY = playerY;
        this.targetX = targetX;
        this.targetY = targetY;
        this.type = type; // 'knight' ou 'tank'
    }
    
    render(ctx, camera, cellSize) {
        const progress = this.elapsed / this.duration;
        
        // Animation en 3 phases: montée (0-0.4), frappe (0.4-0.6), retour (0.6-1)
        let offsetProgress;
        if (progress < 0.4) {
            offsetProgress = progress / 0.4; // Montée
        } else if (progress < 0.6) {
            offsetProgress = 1; // Pic de la frappe
        } else {
            offsetProgress = 1 - (progress - 0.6) / 0.4; // Retour
        }
        
        const dx = this.targetX - this.playerX;
        const dy = this.targetY - this.playerY;
        const distance = Math.hypot(dx, dy);
        const dirX = dx / distance;
        const dirY = dy / distance;
        
        // Position de l'effet
        const effectX = this.playerX + dirX * offsetProgress * 0.6;
        const effectY = this.playerY + dirY * offsetProgress * 0.6;
        
        const screenX = (effectX - camera.x) * cellSize + cellSize / 2;
        const screenY = (effectY - camera.y) * cellSize + cellSize / 2;
        
        if (this.type === 'knight') {
            this.renderKnightSlash(ctx, screenX, screenY, cellSize, offsetProgress);
        } else if (this.type === 'tank') {
            this.renderTankSmash(ctx, screenX, screenY, cellSize, offsetProgress);
        }
    }
    
    renderKnightSlash(ctx, x, y, cellSize, progress) {
        const angle = Math.atan2(this.targetY - this.playerY, this.targetX - this.playerX);
        const slashLength = cellSize * 1.2 * progress;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI / 4 * (1 - progress));
        
        // Traînée d'épée
        const gradient = ctx.createLinearGradient(0, 0, slashLength, 0);
        gradient.addColorStop(0, 'rgba(192, 192, 192, 0)');
        gradient.addColorStop(0.5, 'rgba(192, 192, 192, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(slashLength, 0);
        ctx.stroke();
        
        // Effet d'impact
        if (progress > 0.8) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.beginPath();
            ctx.arc(slashLength, 0, cellSize * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    renderTankSmash(ctx, x, y, cellSize, progress) {
        const size = cellSize * 1.5 * progress;
        
        // Effet d'onde de choc
        ctx.save();
        
        // Cercle d'impact principal
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, 'rgba(255, 165, 0, 0.6)');
        gradient.addColorStop(0.5, 'rgba(255, 140, 0, 0.3)');
        gradient.addColorStop(1, 'rgba(255, 140, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        
        // Lignes d'impact
        if (progress > 0.5) {
            ctx.strokeStyle = 'rgba(255, 200, 0, 0.8)';
            ctx.lineWidth = 3;
            
            for (let i = 0; i < 4; i++) {
                const angle = i * Math.PI / 2 + this.elapsed * 10;
                const length = size * 0.8;
                
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(
                    x + Math.cos(angle) * length,
                    y + Math.sin(angle) * length
                );
                ctx.stroke();
            }
        }
        
        // Particules de poussière
        for (let i = 0; i < 6; i++) {
            const angle = i * Math.PI / 3 + this.elapsed * 5;
            const dist = size * 0.6;
            const px = x + Math.cos(angle) * dist;
            const py = y + Math.sin(angle) * dist;
            
            ctx.fillStyle = 'rgba(139, 69, 19, 0.5)';
            ctx.fillRect(px - 2, py - 2, 4, 4);
        }
        
        ctx.restore();
    }
}

// Boss de la Zone 4 - Aquatique
class AquaticBoss extends Enemy {
    constructor(x, y, level, zone) {
        super(x, y, level, zone, true, 'boss');

        // Statistiques de boss
        this.maxHealth = this.health;
        this.phase = 1; // Phase 1: vague frontale, Phase 2: bulles explosives, Phase 3: dialogue backstory
        this.phaseTransitionTriggered = {
            phase2: false,
            phase3: false
        };
        this.bossType = 'aquatic';
        this.baseSpeed = 0.3;
        this.speed = this.baseSpeed;

        // Phase 1: Vague frontale (100% - 50%)
        this.waveTimer = 0;
        this.waveInterval = 3; // Toutes les 3 secondes
        this.activeWaves = []; // { x, y, direction, travelDistance, damage: 50 }
        this.waveSpeed = 2; // 1 case par 0.5 sec = 2 cases par seconde
        this.isPreparingWave = false;
        this.wavePrepTime = 0;

        // Phase 2: Bulles explosives (50% - 30%)
        this.bubbleTimer = 0;
        this.bubbleInterval = 3; // Toutes les 3 secondes
        this.activeBubbles = []; // { x, y, timer, duration: 2 } - comme les bombes du boss 5

        // Phase 3: Dialogue backstory (30% - 0%)
        this.hasTriggeredBackstoryDialogue = false;

        // Effets visuels
        this.rageAuraRadius = 0;
        this.rageAuraOpacity = 0;
        this.isEnraged = false;
    }

    getHealthPercent() {
        return this.health / this.maxHealth;
    }

    update(deltaTime) {
        super.update(deltaTime);

        // Vérifier les transitions de phase
        const healthPercent = this.getHealthPercent();

        if (this.phase === 1 && healthPercent <= 0.5 && !this.phaseTransitionTriggered.phase2) {
            this.triggerPhase2();
        }

        if (this.phase === 2 && healthPercent <= 0.3 && !this.phaseTransitionTriggered.phase3) {
            this.triggerPhase3();
        }

        // Logique selon la phase
        if (this.phase === 1) {
            this.updatePhase1(deltaTime);
        } else if (this.phase === 2) {
            this.updatePhase2(deltaTime);
        } else if (this.phase === 3) {
            this.updatePhase3(deltaTime);
        }

        // Mettre à jour les vagues (seulement en phase 1)
        if (this.phase === 1) {
            for (let i = this.activeWaves.length - 1; i >= 0; i--) {
                const wave = this.activeWaves[i];

                // Déplacer la vague
                if (wave.direction === 'horizontal') {
                    wave.x += wave.vx * deltaTime;
                    wave.travelDistance += Math.abs(wave.vx * deltaTime);
                } else {
                    wave.y += wave.vy * deltaTime;
                    wave.travelDistance += Math.abs(wave.vy * deltaTime);
                }

                // Supprimer si trop loin ou après 5 secondes
                if (!wave.creationTime) wave.creationTime = Date.now();
                if (Date.now() - wave.creationTime > 5000 || wave.travelDistance > 20) {
                    this.activeWaves.splice(i, 1);
                }
            }
        }

        // Mettre à jour les bulles actives (EXACTEMENT comme les bombes du boss 5)
        for (let i = this.activeBubbles.length - 1; i >= 0; i--) {
            const bubble = this.activeBubbles[i];
            bubble.timer += deltaTime;

            if (bubble.timer >= bubble.duration) {
                // La bulle explose
                if (window.game) {
                    // Son d'explosion de bulle
                    window.game.playSound('bubblePop');

                    const player = window.game.player;
                    const distance = Math.abs(player.x - bubble.x) + Math.abs(player.y - bubble.y);

                    if (distance <= 9) {
                        player.takeDamage(40);
                        window.game.addFloatingText(player.x, player.y, '-40 💧', '#4169e1');
                    }
                }
                this.activeBubbles.splice(i, 1);
            }
        }
    }

    // Phase 1: Vague frontale
    updatePhase1(deltaTime) {
        this.waveTimer += deltaTime;

        if (this.waveTimer >= this.waveInterval) {
            this.waveTimer = 0;
            this.createWave();
        }
    }

    createWave() {
        if (!window.game || !window.game.player) return;

        const player = window.game.player;

        // Déterminer la direction de la vague (vers le joueur)
        const dx = player.x - this.x;
        const dy = player.y - this.y;

        // Vague horizontale si le joueur est plus loin horizontalement
        const isHorizontal = Math.abs(dx) > Math.abs(dy);

        if (isHorizontal) {
            // Vague horizontale
            const direction = dx > 0 ? 1 : -1;
            this.activeWaves.push({
                x: this.x,
                y: this.y,
                vx: direction * this.waveSpeed,
                vy: 0,
                direction: 'horizontal',
                travelDistance: 0,
                damage: 50,
                creationTime: Date.now()
            });
        } else {
            // Vague verticale
            const direction = dy > 0 ? 1 : -1;
            this.activeWaves.push({
                x: this.x,
                y: this.y,
                vx: 0,
                vy: direction * this.waveSpeed,
                direction: 'vertical',
                travelDistance: 0,
                damage: 50,
                creationTime: Date.now()
            });
        }

        if (window.game) {
            // Son de vague
            window.game.playSound('waveSpell');
            window.game.addLog('🌊 Le boss lance une vague!', 'damage');
        }
    }

    checkWaveCollision(playerX, playerY) {
        for (const wave of this.activeWaves) {
            // Collision si le joueur est proche de la vague
            const dx = Math.abs(wave.x - playerX);
            const dy = Math.abs(wave.y - playerY);

            if (wave.direction === 'horizontal') {
                // Vague horizontale : vérifier hauteur similaire et proche horizontalement
                if (dy <= 1 && dx <= 2) {
                    return wave.damage;
                }
            } else {
                // Vague verticale : vérifier largeur similaire et proche verticalement
                if (dx <= 1 && dy <= 2) {
                    return wave.damage;
                }
            }
        }
        return 0;
    }

    checkBubbleCollision(playerX, playerY) {
        for (const bubble of this.activeBubbles) {
            // Collision si le joueur est proche de la bulle (distance euclidienne)
            const dx = bubble.x - playerX;
            const dy = bubble.y - playerY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= 1.5) {
                return 40; // Dégâts de la bulle
            }
        }
        return 0;
    }

    // Phase 2: Bulles explosives
    triggerPhase2() {
        this.phaseTransitionTriggered.phase2 = true;
        this.phase = 2;
        this.isEnraged = true;
        
        // Nettoyer les vagues de phase 1
        this.activeWaves = [];

        if (window.game) {
            window.game.pauseGameForBossTransition(this);
        }
    }

    updatePhase2(deltaTime) {
        // Phase 2: Seulement les bulles (pas de vagues)

        // Créer des bulles explosives
        this.bubbleTimer += deltaTime;

        if (this.bubbleTimer >= this.bubbleInterval) {
            this.bubbleTimer = 0;
            this.dropBubbles();
        }
    }

    dropBubbles() {
        if (!window.game || !window.game.dungeon) return;

        const bossRoom = window.game.dungeon.bossRoom;
        if (!bossRoom) return;

        // Créer 10 bulles aléatoires dans l'arène
        for (let i = 0; i < 10; i++) {
            const bubbleX = bossRoom.x + Math.floor(Math.random() * bossRoom.width);
            const bubbleY = bossRoom.y + Math.floor(Math.random() * bossRoom.height);

            this.activeBubbles.push({
                x: bubbleX,
                y: bubbleY,
                timer: 0,
                duration: 2 // 2 secondes avant explosion
            });
        }

        if (window.game) {
            window.game.addLog('💧 Des bulles explosives apparaissent!', 'damage');
        }
    }


    // Phase 3: Dialogue backstory
    triggerPhase3() {
        this.phaseTransitionTriggered.phase3 = true;
        this.phase = 3;
        this.hasTriggeredBackstoryDialogue = false;

        if (window.game) {
            window.game.pauseGameForBossBackstory(this);
        }
    }

    updatePhase3(deltaTime) {
        // Phase 3: Continuer les bulles explosives pendant le dialogue
        this.updatePhase2(deltaTime);
    }

    // Rendu de l'aura de rage
    renderRageAura(ctx, screenX, screenY, cellSize) {
        ctx.save();
        ctx.globalAlpha = this.rageAuraOpacity;
        ctx.fillStyle = '#1e90ff'; // Bleu pour l'eau
        ctx.beginPath();
        ctx.arc(screenX, screenY, this.rageAuraRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // Rendu des vagues
    renderWaves(ctx, camera, cellSize) {
        for (const wave of this.activeWaves) {
            const screenX = (wave.x - camera.x) * cellSize;
            const screenY = (wave.y - camera.y) * cellSize;

            ctx.save();

            // Effet de vague animé
            const time = Date.now() / 200;
            const waveHeight = Math.sin(time + wave.x + wave.y) * cellSize * 0.2;

            // Base de la vague
            ctx.fillStyle = '#1e90ff';
            if (wave.direction === 'horizontal') {
                ctx.fillRect(screenX, screenY - cellSize * 0.5, cellSize * 2, cellSize);
            } else {
                ctx.fillRect(screenX - cellSize * 0.5, screenY, cellSize, cellSize * 2);
            }

            // Crête de la vague
            ctx.globalAlpha = 0.7;
            ctx.fillStyle = '#4169e1';
            if (wave.direction === 'horizontal') {
                ctx.fillRect(screenX, screenY - cellSize * 0.5 - waveHeight, cellSize * 2, cellSize * 0.5);
            } else {
                ctx.fillRect(screenX - cellSize * 0.5 - waveHeight, screenY, cellSize * 0.5, cellSize * 2);
            }

            // Écume
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#ffffff';
            if (wave.direction === 'horizontal') {
                ctx.fillRect(screenX + cellSize * 1.5, screenY - cellSize * 0.3, cellSize * 0.3, cellSize * 0.6);
            } else {
                ctx.fillRect(screenX - cellSize * 0.3, screenY + cellSize * 1.5, cellSize * 0.6, cellSize * 0.3);
            }

            ctx.restore();
        }
    }

    // Rendu des bulles
    renderBubbles(ctx, camera, cellSize) {
        for (const bubble of this.activeBubbles) {
            const screenX = (bubble.x - camera.x) * cellSize + cellSize / 2;
            const screenY = (bubble.y - camera.y) * cellSize + cellSize / 2;

            ctx.save();

            // Animation de pulsation
            const pulse = 0.5 + (bubble.timer / bubble.duration) * 0.5;
            const radius = cellSize * 0.4 * pulse;

            // Zone d'explosion 3x3 (cercle rouge transparent)
            ctx.globalAlpha = 0.2 + (bubble.timer / bubble.duration) * 0.3;
            ctx.fillStyle = '#4169e1'; // Bleu
            ctx.beginPath();
            ctx.arc(screenX, screenY, cellSize * 1.5, 0, Math.PI * 2);
            ctx.fill();

            // Bulle elle-même
            ctx.globalAlpha = 1;
            ctx.fillStyle = bubble.timer > bubble.duration * 0.7 ? '#1e90ff' : '#4169e1';
            ctx.beginPath();
            ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
            ctx.fill();

            // Reflet brillant
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.beginPath();
            ctx.arc(screenX - radius * 0.3, screenY - radius * 0.3, radius * 0.3, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }
    }
}

// Boss de la Zone 5 - Cité Futuriste
class FuturisticBoss extends Enemy {
    constructor(x, y, level, zone) {
        super(x, y, level, zone, true, 'boss');

        // Stocker level et zone pour les drones
        this.level = level;
        this.zone = zone;

        // Statistiques de boss (héritées du constructor parent, ne pas écraser)
        this.maxHealth = this.health; // Sauvegarder la santé max calculée par le parent
        this.phase = 1; // Phase 1: lasers, Phase 2: bouclier, Phase 3: drones, Phase 4: bombes
        this.phaseTransitionTriggered = {
            phase2: false,
            phase3: false,
            phase4: false
        };
        this.bossType = 'futuristic';
        this.baseSpeed = 0.3; // 30% de vitesse constante
        this.speed = this.baseSpeed;

        // Phase 1: Lasers X/Y (100% - 75%)
        this.laserTimer = 0;
        this.laserInterval = 3; // Toutes les 3 secondes
        this.activeLasers = []; // { x, y, direction, hasHit }

        // Phase 2: Bouclier (75% - 50%)
        this.shieldActive = false;
        this.shieldTimer = 0;
        this.shieldCooldown = 0;
        this.shieldDuration = 2; // 2 secondes de bouclier (niveau 1)
        this.shieldInterval = 5; // Toutes les 5 secondes

        // Phase 3: Drones tueurs (50% - 25%)
        this.dronesSpawned = false;
        this.activeDrones = []; // Les drones seront des ennemis dans le jeu

        // Phase 4: Bombes (25% - 0%)
        this.bombTimer = 0;
        this.bombInterval = 6; // Toutes les 6 secondes
        this.activeBombs = []; // { x, y, timer, duration: 3 }

        // Effets visuels
        this.rageAuraRadius = 0;
        this.rageAuraOpacity = 0;
        this.isEnraged = false;
    }

    getHealthPercent() {
        return this.health / this.maxHealth;
    }

    update(deltaTime) {
        super.update(deltaTime);

        // Vérifier les transitions de phase
        const healthPercent = this.getHealthPercent();

        if (this.phase === 1 && healthPercent <= 0.75 && !this.phaseTransitionTriggered.phase2) {
            this.triggerPhase2();
        }

        if (this.phase === 2 && healthPercent <= 0.5 && !this.phaseTransitionTriggered.phase3) {
            this.triggerPhase3();
        }

        if (this.phase === 3 && healthPercent <= 0.25 && !this.phaseTransitionTriggered.phase4) {
            this.triggerPhase4();
        }

        // Logique selon la phase
        if (this.phase === 1) {
            this.updatePhase1(deltaTime);
        } else if (this.phase === 2) {
            this.updatePhase2(deltaTime);
        } else if (this.phase === 3) {
            this.updatePhase3(deltaTime);
        } else if (this.phase === 4) {
            this.updatePhase4(deltaTime);
        }

        // Mettre à jour les bombes actives
        for (let i = this.activeBombs.length - 1; i >= 0; i--) {
            const bomb = this.activeBombs[i];
            bomb.timer += deltaTime;

            if (bomb.timer >= bomb.duration) {
                // La bombe explose
                if (window.game) {
                    // Son d'explosion de bombe
                    window.game.playSound('bomb');

                    const player = window.game.player;
                    const distance = Math.abs(player.x - bomb.x) + Math.abs(player.y - bomb.y);

                    if (distance <= 9) {
                        player.takeDamage(40);
                        window.game.addFloatingText(player.x, player.y, '-40 💣', '#ff4757');
                    }
                }
                this.activeBombs.splice(i, 1);
            }
        }
    }

    // Phase 1: Lasers X/Y (100% - 75%)
    updatePhase1(deltaTime) {
        this.laserTimer += deltaTime;

        if (this.laserTimer >= this.laserInterval) {
            this.laserTimer = 0;
            this.shootLasers();
        }
    }

    shootLasers() {
        // Tirer des lasers dans les 4 directions cardinales (X et Y)
        const directions = [
            { dx: 1, dy: 0, name: 'east' },
            { dx: -1, dy: 0, name: 'west' },
            { dx: 0, dy: 1, name: 'south' },
            { dx: 0, dy: -1, name: 'north' }
        ];

        for (const dir of directions) {
            this.activeLasers.push({
                x: this.x,
                y: this.y,
                dx: dir.dx,
                dy: dir.dy,
                direction: dir.name,
                hasHit: false,
                creationTime: Date.now()
            });
        }

        if (window.game) {
            // Son de laser
            window.game.playSound('laser');
            window.game.addLog('⚡ Le boss tire des lasers!', 'damage');
        }
    }

    // Phase 2: Bouclier (75% - 50%)
    triggerPhase2() {
        this.phaseTransitionTriggered.phase2 = true;
        this.phase = 2;
        this.isEnraged = true;

        if (window.game) {
            window.game.pauseGameForBossTransition(this);
        }
    }

    updatePhase2(deltaTime) {
        // NE PLUS tirer de lasers après la phase 1

        // Gérer le bouclier (seulement en phase 2, pas après)
        if (this.phase === 2) {
            if (this.shieldActive) {
                this.shieldTimer -= deltaTime;
                if (this.shieldTimer <= 0) {
                    this.shieldActive = false;
                    this.shieldCooldown = this.shieldInterval;
                    if (window.game) {
                        window.game.addLog('🛡️ Le bouclier du boss s\'éteint!', 'info');
                    }
                }
            } else if (this.shieldCooldown > 0) {
                this.shieldCooldown -= deltaTime;
            } else {
                // Activer le bouclier
                this.shieldActive = true;
                this.shieldTimer = this.shieldDuration;
                if (window.game) {
                    // Son de bouclier activé (joué en boucle tant que le bouclier est actif)
                    window.game.playSound('shield');
                    window.game.addLog('🛡️ Le boss active son bouclier!', 'warning');
                }
            }
        }
    }

    // Phase 3: Drones (50% - 25%)
    triggerPhase3() {
        this.phaseTransitionTriggered.phase3 = true;
        this.phase = 3;

        // Désactiver le bouclier quand on passe à la phase 3
        this.shieldActive = false;
        this.shieldTimer = 0;
        this.shieldCooldown = 0;

        if (window.game) {
            window.game.pauseGameForBossTransition(this);
            this.spawnDrones();
        }
    }

    spawnDrones() {
        if (!window.game || !window.game.dungeon) return;

        // Son d'apparition des drones
        window.game.playSound('spawn');

        const bossRoom = window.game.dungeon.bossRoom;
        if (!bossRoom) return;

        // Créer 3 drones tueurs avec les stats de tireur à distance
        for (let i = 0; i < 3; i++) {
            let droneX, droneY;
            let attempts = 0;

            do {
                droneX = bossRoom.x + Math.floor(Math.random() * bossRoom.width);
                droneY = bossRoom.y + Math.floor(Math.random() * bossRoom.height);
                attempts++;
            } while (
                attempts < 50 &&
                ((droneX === this.x && droneY === this.y) ||
                (window.game.player && droneX === window.game.player.x && droneY === window.game.player.y))
            );

            const drone = new Enemy(droneX, droneY, this.level, this.zone, false, 'ranged');
            drone.spriteIndex = 100; // Index spécial pour bot_volant
            drone.isDrone = true; // Marqueur pour le rendu
            this.activeDrones.push(drone);
            window.game.enemies.push(drone);
        }

        this.dronesSpawned = true;
        if (window.game) {
            window.game.addLog('🤖 Le boss invoque des drones tueurs!', 'damage');
        }
    }

    updatePhase3() {
        // Phase 3: Seulement les drones (pas de lasers ni bouclier)
        // Les drones sont déjà spawned, pas besoin de logique spéciale
    }

    // Phase 4: Bombes (25% - 0%)
    triggerPhase4() {
        this.phaseTransitionTriggered.phase4 = true;
        this.phase = 4;

        if (window.game) {
            window.game.pauseGameForBossTransition(this);
        }
    }

    updatePhase4(deltaTime) {
        // Phase 4: Seulement les bombes (pas de lasers ni bouclier)

        // Lâcher des bombes
        this.bombTimer += deltaTime;

        if (this.bombTimer >= this.bombInterval) {
            this.bombTimer = 0;
            this.dropBomb();
        }
    }

    dropBomb() {
        // Lâcher une bombe à la position du boss
        this.activeBombs.push({
            x: this.x,
            y: this.y,
            timer: 0,
            duration: 3
        });

        if (window.game) {
            window.game.addLog('💣 Le boss lâche une bombe!', 'warning');
        }
    }

    takeDamage(amount) {
        // Si le bouclier est actif, bloquer les dégâts
        if (this.shieldActive) {
            if (window.game) {
                window.game.addFloatingText(this.x, this.y, 'BLOQUÉ! 🛡️', '#4a90e2');
                window.game.playSound('shieldReflect');
            }
            return;
        }

        super.takeDamage(amount);

        // Empêcher la santé de descendre en dessous de 0
        if (this.health < 0) {
            this.health = 0;
        }
    }
}


// ===== MOTEUR DE JEU PRINCIPAL =====


// ===== MOTEUR DE JEU PRINCIPAL =====
class Game {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');

        // Cacher le curseur par défaut sur le canvas
        this.canvas.style.cursor = 'none';

        // Configuration dynamique du canvas
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.state = 'menu'; // menu, playing, gameover, victory
        this.currentLevel = 1;
        this.selectedClass = null; // Stocker la classe sélectionnée
        this.dungeon = null;
        this.player = null;
        this.enemies = [];
        this.healers = []; // PNJ soigneurs
        this.healingRooms = []; // Salles de soins
        this.exit = null;
        
        // Boss avancé
        this.currentBoss = null;
        this.bossTransitioning = false;
        this.bossTransitionBoss = null;
        
        this.keys = {};
        this.mousePos = { x: 0, y: 0 };
        
        this.lastTime = 0;
        this.camera = { x: 0, y: 0 };
        
        // Système d'animations
        this.animations = [];

        // Textes flottants (dégâts, XP, etc.)
        this.floatingTexts = [];

        // Particules (sang, etc.)
        this.particles = [];

        // Taches de sang au sol
        this.bloodStains = [];
        
        // Charger les sprites des personnages
        this.sprites = {
            archer: new Image(),
            knight: new Image(),
            mage: new Image(),
            tank: new Image(),
            healer: new Image() 
        };

        this.sprites.archer.src = './pixel_art/hero/archer.png';
        this.sprites.knight.src = './pixel_art/hero/knight.png';
        this.sprites.mage.src = './pixel_art/hero/magic men.png';
        this.sprites.tank.src = './pixel_art/hero/tank.png';
        this.sprites.healer.src = './pixel_art/helping/healer.png';
        
        // Charger les images de zones (tuiles)
        // TEXTURES DÉSACTIVÉES - Utilisation des couleurs à la place
        /*
        this.zoneImages = {};
        for (let zone = 1; zone <= 5; zone++) {
            this.zoneImages[zone] = {
                chamber: new Image(),
                path: new Image(),
                wall: new Image()
            };
            this.zoneImages[zone].chamber.src = `./pixel_art/zone/${zone}/chamber.jpg`;
            this.zoneImages[zone].path.src = `./pixel_art/zone/${zone}/path.jpg`;
            this.zoneImages[zone].wall.src = `./pixel_art/zone/${zone}/wall.jpg`;
        }
        */
        
        // ===== SYSTÈME AUDIO =====
        this.sounds = {
            // Son de clic pour tous les boutons
            click: new Audio('./sound_design/click.mp3'),

            // Sons de progression
            newLevel: new Audio('./sound_design/new_level.mp3'),
            newWorld: new Audio('./sound_design/level_up.mp3'),

            // Musiques de fond
            menuMusic: new Audio('./sound_design/theme_menu.mp3'),

            // Musiques par zone (monde)
            zoneMusic: {
                1: new Audio('./sound_design/level1.mp3'),
                2: new Audio('./sound_design/level2.mp3'),
                3: new Audio('./sound_design/level3.mp3'),
                4: new Audio('./sound_design/level4.mp3'),
                5: new Audio('./sound_design/level5.mp3')
            },

            // Musiques de boss
            bossMusic: {
                1: new Audio('./sound_design/boss1.mp3'),
                2: new Audio('./sound_design/boss2.mp3'),
                3: new Audio('./sound_design/boss3.mp3'),
                4: new Audio('./sound_design/boss4.mp3'),
                5: new Audio('./sound_design/boss5.mp3')
            },

            // Sons spéciaux
            angelTheme: new Audio('./sound_design/angel_theme.mp3'),
            victory: new Audio('./sound_design/victory.mp3'),
            gameOver: new Audio('./sound_design/gameOver.mp3'),

            // Sons d'ambiance
            ambientLevel4: new Audio('./sound_design/ambiant_level4.mp3'),
            stoneFall: new Audio('./sound_design/stone_fall.mp3'),

            // Sons de pas selon la zone
            stepOnGrass: new Audio('./sound_design/stepOnGrass.mp3'),
            stepOnRock: new Audio('./sound_design/stepOnRock.mp3'),
            stepOnSand: new Audio('./sound_design/stepOnSand.mp3'),
            stepOnSteel: new Audio('./sound_design/steponSteal.mp3'),

            // Sons d'attaque
            arrow: new Audio('./sound_design/arrow.mp3'),
            hit: new Audio('./sound_design/hit.mp3'),
            swordHit: new Audio('./sound_design/sword_hit.mp3'),
            magicSpell: new Audio('./sound_design/magic_spell.mp3'),

            // Sons des boss
            liane: new Audio('./sound_design/liane.mp3'),
            teleport: new Audio('./sound_design/teleport.mp3'),
            spawn: new Audio('./sound_design/spawn.mp3'),
            waveSpell: new Audio('./sound_design/wave_spell.mp3'),
            bubblePop: new Audio('./sound_design/bubble_pop.mp3'),
            laser: new Audio('./sound_design/laser.mp3'),
            bomb: new Audio('./sound_design/bomb.mp3'),
            shield: new Audio('./sound_design/shield.mp3'),
            shieldReflect: new Audio('./sound_design/shield_reflect.mp3')
        };

        // Configuration des volumes
        this.soundVolume = 0.5;
        this.musicVolume = 0.3;

        // Configurer les volumes et les boucles pour les musiques
        this.sounds.menuMusic.volume = this.musicVolume;
        this.sounds.menuMusic.loop = true;

        Object.values(this.sounds.zoneMusic).forEach(music => {
            music.volume = this.musicVolume;
            music.loop = true;
        });

        Object.values(this.sounds.bossMusic).forEach(music => {
            music.volume = this.musicVolume;
            music.loop = true;
        });

        // Configurer le volume des sons
        this.sounds.click.volume = this.soundVolume;
        this.sounds.newLevel.volume = this.soundVolume;
        this.sounds.newWorld.volume = this.soundVolume;
        this.sounds.angelTheme.volume = this.musicVolume;
        this.sounds.victory.volume = this.musicVolume;
        this.sounds.gameOver.volume = this.musicVolume;
        this.sounds.ambientLevel4.volume = this.soundVolume * 0.6; // Plus doux
        this.sounds.stoneFall.volume = this.soundVolume * 0.6; // Plus doux

        // Sons de pas - volume bas pour être subtil
        this.sounds.stepOnGrass.volume = this.soundVolume * 0.3;
        this.sounds.stepOnRock.volume = this.soundVolume * 0.3;
        this.sounds.stepOnSand.volume = this.soundVolume * 0.3;
        this.sounds.stepOnSteel.volume = this.soundVolume * 0.3;

        // Précharger les sons courts pour une réactivité immédiate
        this.sounds.click.preload = 'auto';
        this.sounds.click.load();
        this.sounds.newLevel.preload = 'auto';
        this.sounds.newLevel.load();
        this.sounds.newWorld.preload = 'auto';
        this.sounds.newWorld.load();

        this.currentMusic = null;
        this.isBossMusic = false;

        // Timers pour sons d'ambiance
        this.ambientTimer = 0;
        this.ambientInterval = 0; // Sera défini aléatoirement

        // Cooldown de déplacement
        this.movementCooldown = 0;
        this.movementDelay = 0.2; // 0.2 secondes entre chaque déplacement

        // ===== FONCTIONS AUDIO HELPER =====
        this.playSound = (soundName) => {
            if (this.sounds[soundName]) {
                const sound = this.sounds[soundName];
                sound.currentTime = 0;
                sound.play().catch(e => console.log('Audio play failed:', e));
            }
        };

        this.playMusic = (musicType, zone = null) => {
            // Arrêter la musique actuelle
            if (this.currentMusic) {
                this.currentMusic.pause();
                this.currentMusic.currentTime = 0;
            }

            let newMusic = null;
            if (musicType === 'menu') {
                newMusic = this.sounds.menuMusic;
                this.isBossMusic = false;
            } else if (musicType === 'zone' && zone) {
                // Utiliser la musique basée sur le niveau actuel
                const musicZone = this.getMusicZoneForLevel(this.currentLevel);
                newMusic = this.sounds.zoneMusic[musicZone];
                this.isBossMusic = false;
            } else if (musicType === 'boss' && zone) {
                newMusic = this.sounds.bossMusic[zone];
                this.isBossMusic = true;
            }

            if (newMusic) {
                this.currentMusic = newMusic;
                newMusic.play().catch(e => console.log('Music play failed:', e));
            }
        };

        // Déterminer quelle musique de niveau jouer en fonction du niveau actuel
        this.getMusicZoneForLevel = (level) => {
            // Niveaux 1-9: level1.mp3
            if (level >= 1 && level <= 9) return 1;
            // Niveaux 11-19: level2.mp3
            if (level >= 11 && level <= 19) return 2;
            // Niveaux 21-29: level3.mp3
            if (level >= 21 && level <= 29) return 3;
            // Niveaux 31-39: level4.mp3
            if (level >= 31 && level <= 39) return 4;
            // Niveaux 41-49: level5.mp3
            if (level >= 41 && level <= 49) return 5;

            // Par défaut, retourner la zone calculée normalement
            return Math.ceil(level / CONFIG.LEVELS_PER_ZONE);
        };

        this.stopMusic = () => {
            if (this.currentMusic) {
                this.currentMusic.pause();
                this.currentMusic.currentTime = 0;
                this.currentMusic = null;
            }
        };

        // Charger les sprites des ennemis par zone
        this.enemySprites = {
            1: { // Zone 1 - Forêt Mystique
                melee: [],
                ranged: [],
                tank: [],
                small: []
            },
            2: { // Zone 2 - Grottes Obscures
                melee: [],
                ranged: [],
                tank: [],
                small: []
            },
            3: { // Zone 3 - Terres de Lave
                melee: [],
                ranged: [],
                tank: [],
                small: []
            },
            4: { // Zone 4 - Profondeurs Aquatiques
                melee: [],
                ranged: [],
                tank: [],
                small: []
            },
            5: { // Zone 5 - Cité Futuriste
                melee: [],
                ranged: [],
                tank: [],
                small: []
            }
        };

        // Charger les sprites des boss
        this.bossSprites = {};
        this.bossTalkSprites = {};

        // Boss Zone 1
        const boss1 = new Image();
        boss1.src = './pixel_art/boss/boss_1.png';
        this.bossSprites[1] = boss1;

        const bossTalk1 = new Image();
        bossTalk1.src = './pixel_art/boss_talk/boss_1.png';
        this.bossTalkSprites[1] = bossTalk1;
        
        // Zone 1 - Mélée
        const melee1 = new Image();
        melee1.src = './pixel_art/ennemi/zone1/green_knif_men.png';
        this.enemySprites[1].melee.push(melee1);

        const melee2 = new Image();
        melee2.src = './pixel_art/ennemi/zone1/human_mad.png';
        this.enemySprites[1].melee.push(melee2);

        // Zone 1 - Arché (ranged)
        const ranged1 = new Image();
        ranged1.src = './pixel_art/ennemi/zone1/witch.png';
        this.enemySprites[1].ranged.push(ranged1);

        const ranged2 = new Image();
        ranged2.src = './pixel_art/ennemi/zone1/gobelin_witch.png';
        this.enemySprites[1].ranged.push(ranged2);

        const ranged3 = new Image();
        ranged3.src = './pixel_art/ennemi/zone1/gun_gobelin.png';
        this.enemySprites[1].ranged.push(ranged3);

        // Zone 1 - Tank
        const tank1 = new Image();
        tank1.src = './pixel_art/ennemi/zone1/tank_monster.png';
        this.enemySprites[1].tank.push(tank1);

        // Zone 1 - Small (rapide)
        const small1 = new Image();
        small1.src = './pixel_art/ennemi/zone1/crazy_gobelin.png';
        this.enemySprites[1].small.push(small1);

        // Boss Zone 2
        const boss2 = new Image();
        boss2.src = './pixel_art/boss/boss_2.png';
        this.bossSprites[2] = boss2;

        const bossTalk2 = new Image();
        bossTalk2.src = './pixel_art/boss_talk/boss_2.png';
        this.bossTalkSprites[2] = bossTalk2;

        // Zone 2 - Mélée
        const melee2_1 = new Image();
        melee2_1.src = './pixel_art/ennemi/zone2/cc_gobelin2.png';
        this.enemySprites[2].melee.push(melee2_1);

        const melee2_2 = new Image();
        melee2_2.src = './pixel_art/ennemi/zone2/cc_goblin.png';
        this.enemySprites[2].melee.push(melee2_2);

        // Zone 2 - Ranged
        const ranged2_1 = new Image();
        ranged2_1.src = './pixel_art/ennemi/zone2/crystal_witch.png';
        this.enemySprites[2].ranged.push(ranged2_1);

        const ranged2_2 = new Image();
        ranged2_2.src = './pixel_art/ennemi/zone2/witch_stone.png';
        this.enemySprites[2].ranged.push(ranged2_2);

        // Zone 2 - Tank
        const tank2_1 = new Image();
        tank2_1.src = './pixel_art/ennemi/zone2/tank.png';
        this.enemySprites[2].tank.push(tank2_1);

        // Zone 2 - Small (rapide)
        const small2_1 = new Image();
        small2_1.src = './pixel_art/ennemi/zone2/bat.png';
        this.enemySprites[2].small.push(small2_1);

        // Boss Zone 3
        const boss3 = new Image();
        boss3.src = './pixel_art/boss/boss_3.png';
        this.bossSprites[3] = boss3;

        const bossTalk3 = new Image();
        bossTalk3.src = './pixel_art/boss_talk/boss_3.png';
        this.bossTalkSprites[3] = bossTalk3;

        // Zone 3 - Terres de Lave (réutiliser sprites zone 1 comme base)
        const melee3_1 = new Image();
        melee3_1.src = './pixel_art/ennemi/zone1/green_knif_men.png';
        this.enemySprites[3].melee.push(melee3_1);

        const melee3_2 = new Image();
        melee3_2.src = './pixel_art/ennemi/zone1/human_mad.png';
        this.enemySprites[3].melee.push(melee3_2);

        // Zone 3 - Ranged
        const ranged3_1 = new Image();
        ranged3_1.src = './pixel_art/ennemi/zone1/witch.png';
        this.enemySprites[3].ranged.push(ranged3_1);

        const ranged3_2 = new Image();
        ranged3_2.src = './pixel_art/ennemi/zone1/gobelin_witch.png';
        this.enemySprites[3].ranged.push(ranged3_2);

        // Zone 3 - Tank
        const tank3_1 = new Image();
        tank3_1.src = './pixel_art/ennemi/zone1/tank_monster.png';
        this.enemySprites[3].tank.push(tank3_1);

        // Zone 3 - Small
        const small3_1 = new Image();
        small3_1.src = './pixel_art/ennemi/zone1/crazy_gobelin.png';
        this.enemySprites[3].small.push(small3_1);

        // Boss Zone 4
        const boss4 = new Image();
        boss4.src = './pixel_art/boss/boss_4.png';
        this.bossSprites[4] = boss4;

        const bossTalk4 = new Image();
        bossTalk4.src = './pixel_art/boss_talk/boss_4.png';
        this.bossTalkSprites[4] = bossTalk4;

        // Zone 4 - Profondeurs Aquatiques (réutiliser sprites zone 2)
        const melee4_1 = new Image();
        melee4_1.src = './pixel_art/ennemi/zone2/cc_gobelin2.png';
        this.enemySprites[4].melee.push(melee4_1);

        const melee4_2 = new Image();
        melee4_2.src = './pixel_art/ennemi/zone2/cc_goblin.png';
        this.enemySprites[4].melee.push(melee4_2);

        // Zone 4 - Ranged
        const ranged4_1 = new Image();
        ranged4_1.src = './pixel_art/ennemi/zone2/crystal_witch.png';
        this.enemySprites[4].ranged.push(ranged4_1);

        const ranged4_2 = new Image();
        ranged4_2.src = './pixel_art/ennemi/zone2/witch_stone.png';
        this.enemySprites[4].ranged.push(ranged4_2);

        // Zone 4 - Tank
        const tank4_1 = new Image();
        tank4_1.src = './pixel_art/ennemi/zone2/tank.png';
        this.enemySprites[4].tank.push(tank4_1);

        // Zone 4 - Small
        const small4_1 = new Image();
        small4_1.src = './pixel_art/ennemi/zone2/bat.png';
        this.enemySprites[4].small.push(small4_1);

        // Boss Zone 5
        const boss5 = new Image();
        boss5.src = './pixel_art/boss/boss_5.png';
        this.bossSprites[5] = boss5;

        const bossTalk5 = new Image();
        bossTalk5.src = './pixel_art/boss_talk/boss_5.png';
        this.bossTalkSprites[5] = bossTalk5;

        // Zone 5 - Cité Futuriste (réutiliser sprites zone 1)
        const melee5_1 = new Image();
        melee5_1.src = './pixel_art/ennemi/zone1/green_knif_men.png';
        this.enemySprites[5].melee.push(melee5_1);

        const melee5_2 = new Image();
        melee5_2.src = './pixel_art/ennemi/zone1/human_mad.png';
        this.enemySprites[5].melee.push(melee5_2);

        // Zone 5 - Ranged
        const ranged5_1 = new Image();
        ranged5_1.src = './pixel_art/ennemi/zone1/witch.png';
        this.enemySprites[5].ranged.push(ranged5_1);

        const ranged5_2 = new Image();
        ranged5_2.src = './pixel_art/ennemi/zone1/gobelin_witch.png';
        this.enemySprites[5].ranged.push(ranged5_2);

        // Zone 5 - Tank
        const tank5_1 = new Image();
        tank5_1.src = './pixel_art/ennemi/zone1/tank_monster.png';
        this.enemySprites[5].tank.push(tank5_1);

        // Zone 5 - Small
        const small5_1 = new Image();
        small5_1.src = './pixel_art/ennemi/zone1/crazy_gobelin.png';
        this.enemySprites[5].small.push(small5_1);

        this.setupEventListeners();
    }
    
    resizeCanvas() {
        // Obtenir la taille du conteneur du canvas
        const container = document.getElementById('game-canvas-container');
        const hud = document.getElementById('hud');
        const upgradesBar = document.getElementById('upgrades-bar');
        
        // Calculer la hauteur disponible
        const hudHeight = hud ? hud.getBoundingClientRect().height : 100;
        const upgradesHeight = upgradesBar ? upgradesBar.getBoundingClientRect().height : 80;
        
        const width = window.innerWidth;
        const height = window.innerHeight - hudHeight - upgradesHeight;
        
        // Appliquer les dimensions au canvas
        this.canvas.width = width;
        this.canvas.height = Math.max(height, 300);
        
        // Calculer le viewport en fonction de la taille du canvas
        // Assurer des valeurs minimales pour éviter les erreurs
        this.viewportWidth = Math.max(15, Math.floor(this.canvas.width / CONFIG.CELL_SIZE));
        this.viewportHeight = Math.max(12, Math.floor(this.canvas.height / CONFIG.CELL_SIZE));
        
        console.log(`Canvas resized: ${this.canvas.width}x${this.canvas.height}, Viewport: ${this.viewportWidth}x${this.viewportHeight}`);
    }
    
    setupEventListeners() {
        // Menu principal
        document.getElementById('play-btn').addEventListener('click', () => {
            this.playSound('click');
            this.showScreen('class-selection');
        });

        document.getElementById('lore-btn').addEventListener('click', () => {
            this.playSound('click');
            this.showScreen('lore-screen');
        });

        document.getElementById('credits-btn').addEventListener('click', () => {
            this.playSound('click');
            this.showScreen('credits-screen');
        });

        document.getElementById('quit-btn').addEventListener('click', () => {
            this.playSound('click');
            window.close();
        });

        // Boutons retour et navigation lore
        document.getElementById('lore-back-btn').addEventListener('click', () => {
            this.playSound('click');
            this.showScreen('main-menu');
        });

        document.getElementById('lore-next-btn').addEventListener('click', () => {
            this.playSound('click');
            this.showScreen('lore-screen-2');
        });

        document.getElementById('lore-prev-btn').addEventListener('click', () => {
            this.playSound('click');
            this.showScreen('lore-screen');
        });

        document.getElementById('lore-back-btn-2').addEventListener('click', () => {
            this.playSound('click');
            this.showScreen('main-menu');
        });

        document.getElementById('credits-skip-btn').addEventListener('click', () => {
            this.playSound('click');
            this.showScreen('main-menu');
        });

        // Sélection de classe
        document.querySelectorAll('.class-card').forEach(card => {
            card.addEventListener('click', () => {
                this.playSound('click');
                const classType = card.dataset.class;
                this.startGame(classType);
            });
        });
        
        // Contrôles clavier
        document.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
            
            if (this.state === 'playing') {
                this.handlePlayerMovement();
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
        
        // Attaque au clic
        this.canvas.addEventListener('click', (e) => {
            if (this.state === 'playing') {
                this.handlePlayerAttack(e);
            }
        });
        
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mousePos.x = e.clientX - rect.left;
            this.mousePos.y = e.clientY - rect.top;
        });
        
        // Boutons restart
        document.getElementById('restart-btn').addEventListener('click', () => {
            this.playSound('click');
            window.location.href = 'https://zionnix.github.io/rogue-like/';
        });

        document.getElementById('victory-restart-btn').addEventListener('click', () => {
            this.playSound('click');
            window.location.href = 'https://zionnix.github.io/rogue-like/';
        });

        // Boutons retour au menu pendant le jeu
        document.getElementById('back-to-menu-btn').addEventListener('click', () => {
            this.playSound('click');
            this.state = 'menu';
            this.showScreen('main-menu');
        });

        document.getElementById('class-back-btn').addEventListener('click', () => {
            this.playSound('click');
            this.showScreen('main-menu');
        });

        // Système de dialogue
        this.dialogueState = {
            isTyping: false,
            fullText: '',
            currentIndex: 0,
            typingSpeed: 50, // ms par caractère
            lastZone: 0
        };

        // Event listeners pour le dialogue
        document.getElementById('zone-dialogue').addEventListener('click', (e) => {
            if (e.target.id !== 'dialogue-finish-btn') {
                this.skipDialogueTyping();
            }
        });

        document.getElementById('dialogue-finish-btn').addEventListener('click', () => {
            this.playSound('click');
            this.finishDialogue();
        });

        // Event listeners pour le dialogue de seconde vie
        document.getElementById('second-life-dialogue').addEventListener('click', (e) => {
            if (e.target.id !== 'second-dialogue-finish-btn') {
                this.nextSecondLifeDialogueMessage();
            }
        });

        document.getElementById('second-dialogue-finish-btn').addEventListener('click', () => {
            this.playSound('click');
            this.nextSecondLifeDialogueMessage();
        });

        // Event listeners pour le dialogue avec le boss
        document.getElementById('boss-dialogue').addEventListener('click', (e) => {
            console.log('[DEBUG] boss-dialogue clicked, target:', e.target.id);
            if (e.target.id !== 'boss-dialogue-finish-btn') {
                // Déterminer quel type de dialogue est actif
                console.log('[DEBUG] Has currentBossDefeatDialogue:', !!this.currentBossDefeatDialogue);
                if (this.currentBossDefeatDialogue) {
                    console.log('[DEBUG] Calling nextBossDefeatDialogueMessage');
                    this.nextBossDefeatDialogueMessage();
                } else {
                    console.log('[DEBUG] Calling nextBossDialogueMessage');
                    this.nextBossDialogueMessage();
                }
            }
        });

        document.getElementById('boss-dialogue-finish-btn').addEventListener('click', () => {
            this.playSound('click');
            // Déterminer quel type de dialogue est actif
            if (this.currentBossDefeatDialogue) {
                this.nextBossDefeatDialogueMessage();
            } else {
                this.nextBossDialogueMessage();
            }
        });
    }

    // Afficher le dialogue de zone
    showZoneDialogue(zone, classType) {
        const zoneData = CONFIG.ZONES[zone];
        const dialogues = CONFIG.HERO_DIALOGUES[classType]?.[zone];
        
        if (!dialogues || dialogues.length === 0) {
            this.finishDialogue();
            return;
        }

        // Choisir une phrase aléatoire
        const randomDialogue = dialogues[Math.floor(Math.random() * dialogues.length)];

        // Configurer l'image du héros selon la zone
        const heroImageMap = {
            archer: `./pixel_art/heros_talk/monde${zone}/archer.png`,
            knight: `./pixel_art/heros_talk/monde${zone}/knight.png`,
            mage: `./pixel_art/heros_talk/monde${zone}/magic men.png`,
            tank: `./pixel_art/heros_talk/monde${zone}/tank.png`
        };
        document.getElementById('dialogue-hero-image').src = heroImageMap[classType];

        // Configurer le titre de la zone
        document.getElementById('dialogue-zone-title').textContent = `Zone ${zone}: ${zoneData.name}`;

        // Réinitialiser l'état du dialogue
        this.dialogueState.fullText = randomDialogue;
        this.dialogueState.currentIndex = 0;
        this.dialogueState.isTyping = true;

        // Cacher le bouton et le curseur
        document.getElementById('dialogue-finish-btn').style.display = 'none';
        document.querySelector('.dialogue-cursor').classList.remove('visible');
        document.getElementById('dialogue-text').textContent = '';

        // Afficher l'écran de dialogue
        this.showScreen('zone-dialogue');

        // Démarrer l'animation de texte
        this.typeDialogue();
    }

    // Animation de frappe du texte
    typeDialogue() {
        if (!this.dialogueState.isTyping) return;

        const textElement = document.getElementById('dialogue-text');
        
        if (this.dialogueState.currentIndex < this.dialogueState.fullText.length) {
            textElement.textContent += this.dialogueState.fullText[this.dialogueState.currentIndex];
            this.dialogueState.currentIndex++;
            
            setTimeout(() => this.typeDialogue(), this.dialogueState.typingSpeed);
        } else {
            // Texte terminé
            this.dialogueState.isTyping = false;
            document.querySelector('.dialogue-cursor').classList.add('visible');
            document.getElementById('dialogue-finish-btn').style.display = 'block';
        }
    }

    // Afficher tout le texte immédiatement
    skipDialogueTyping() {
        if (this.dialogueState.isTyping) {
            this.dialogueState.isTyping = false;
            document.getElementById('dialogue-text').textContent = this.dialogueState.fullText;
            document.querySelector('.dialogue-cursor').classList.add('visible');
            document.getElementById('dialogue-finish-btn').style.display = 'block';
        }
    }

    // Finir le dialogue et lancer le jeu
    finishDialogue() {
        this.state = 'playing';
        this.showScreen('game-screen');

        // Forcer le redimensionnement et démarrer le jeu
        setTimeout(() => {
            this.resizeCanvas();
            this.updateHUD();
            this.render();
            
            if (!this.gameLoopStarted) {
                this.gameLoopStarted = true;
                requestAnimationFrame((time) => this.gameLoop(time));
            }
        }, 100);
    }
    
    startGame(classType) {
        this.selectedClass = classType; // Stocker la classe pour les redémarrages
        this.currentLevel = 1;
        this.generateLevel();
        
        const spawn = this.dungeon.findSpawnPoint();
        this.player = new Player(spawn.x, spawn.y, classType);
        
        // Mettre à jour l'avatar du joueur avec le sprite
        const avatarElement = document.querySelector('.player-avatar');
        const spriteMap = {
            archer: './pixel_art/hero/archer.png',
            knight: './pixel_art/hero/knight.png',
            mage: './pixel_art/hero/magic men.png',
            tank: './pixel_art/hero/tank.png'
        };
        avatarElement.style.backgroundImage = `url('${spriteMap[classType]}')`;
        avatarElement.style.backgroundSize = 'contain';
        avatarElement.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        
        this.spawnEnemies();
        
        // Initialiser le game loop flag
        this.gameLoopStarted = false;
        
        // Calculer la zone actuelle
        const currentZone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);
        this.dialogueState.lastZone = currentZone;
        
        // Afficher le dialogue de zone au lieu de lancer directement le jeu
        this.showZoneDialogue(currentZone, classType);
        
        // Les logs seront ajoutés après le dialogue
        this.addLog(`Bienvenue, ${this.player.className}!`, 'info');
        this.addLog('Utilisez ZQSD pour vous déplacer', 'info');
        this.addLog('Cliquez pour attaquer', 'info');
    }
    
    generateLevel() {
        const levelInZone = ((this.currentLevel - 1) % CONFIG.LEVELS_PER_ZONE) + 1;
        const isBossLevel = levelInZone === CONFIG.LEVELS_PER_ZONE;

        const generator = new DungeonGenerator(CONFIG.GRID_SIZE, isBossLevel);
        this.dungeon = generator;
        this.dungeon.grid = generator.generate();

        this.exit = this.dungeon.findExitPoint();

        // Marquer si c'est un niveau de boss
        this.isBossLevel = isBossLevel;
        this.bossRoomSealed = false; // Les portes ne sont pas encore scellées

        // Générer 0 à 2 salles de soins aléatoirement (sauf niveaux boss)
        this.generateHealingRooms();
    }

    generateHealingRooms() {
        this.healingRooms = [];
        this.healers = [];

        const levelInZone = ((this.currentLevel - 1) % CONFIG.LEVELS_PER_ZONE) + 1;
        const isBossLevel = levelInZone === CONFIG.LEVELS_PER_ZONE;

        // Pas de salles de soins sur les niveaux boss
        if (isBossLevel) return;

        // 0, 1 ou 2 salles de soins aléatoirement
        const numHealingRooms = Math.floor(Math.random() * 3); // 0, 1 ou 2

        if (numHealingRooms === 0) return;

        // Sélectionner des salles aléatoires (pas la première ni la dernière)
        const availableRooms = this.dungeon.rooms.slice(1, -1);

        if (availableRooms.length < numHealingRooms) return;

        // Mélanger et prendre les N premières
        const shuffled = [...availableRooms].sort(() => Math.random() - 0.5);
        const selectedRooms = shuffled.slice(0, numHealingRooms);

        for (const room of selectedRooms) {
            this.healingRooms.push(room);

            // Placer un soigneur au centre de la salle
            const healerX = Math.floor(room.x + room.width / 2);
            const healerY = Math.floor(room.y + room.height / 2);
            const healer = new Healer(healerX, healerY);
            this.healers.push(healer);
        }
    }
    
    // Calculer les probabilités de spawn en fonction du niveau
    getEnemyTypeForLevel(level) {
        // Niveau 1-3:  70% melee, 20% ranged, 7.5% tank, 2.5% small
        // Niveau 50:   20% melee, 20% ranged, 40% tank, 20% small
        // Interpolation linéaire entre les deux
        
        const progress = Math.min((level - 1) / 49, 1); // 0 au niveau 1, 1 au niveau 50
        
        // Probabilités de départ (niveau 1-3)
        const startMelee = 0.70;
        const startRanged = 0.20;
        const startTank = 0.075;
        const startSmall = 0.025;
        
        // Probabilités finales (niveau 50)
        const endMelee = 0.20;
        const endRanged = 0.20;
        const endTank = 0.40;
        const endSmall = 0.20;
        
        // Interpolation
        const meleeProb = startMelee + (endMelee - startMelee) * progress;
        const rangedProb = startRanged + (endRanged - startRanged) * progress;
        const tankProb = startTank + (endTank - startTank) * progress;
        // smallProb est le reste
        
        const roll = Math.random();
        if (roll < meleeProb) {
            return 'melee';
        } else if (roll < meleeProb + rangedProb) {
            return 'ranged';
        } else if (roll < meleeProb + rangedProb + tankProb) {
            return 'tank';
        } else {
            return 'small';
        }
    }
    
    spawnEnemies() {
        this.enemies = [];
        const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);
        const levelInZone = ((this.currentLevel - 1) % CONFIG.LEVELS_PER_ZONE) + 1;
        
        // Niveau 10 de chaque zone = boss
        const isBossLevel = levelInZone === CONFIG.LEVELS_PER_ZONE;
        
        if (isBossLevel) {
            let boss;
            
            // Spawner le boss approprié selon la zone
            if (zone === 1) {
                // Zone 1: Sylvanus - Boss de la Forêt (mécaniques spéciales)
                boss = new ForestBoss(
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    this.currentLevel,
                    zone
                );
                this.addLog('⚠️ SYLVANUS LE GARDIEN APPARAÎT!', 'damage');
            } else if (zone === 2) {
                // Zone 2: Boss des Cavernes
                boss = new CavernBoss(
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    this.currentLevel,
                    zone
                );
                this.addLog('⚠️ LE GARDIEN DES CAVERNES APPARAÎT!', 'damage');
            } else if (zone === 3) {
                // Zone 3: Boss du Volcan
                boss = new VolcanoBoss(
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    this.currentLevel,
                    zone
                );
                this.addLog('⚠️ LE GARDIEN DU VOLCAN APPARAÎT!', 'damage');
            } else if (zone === 4) {
                // Zone 4: Boss des Profondeurs Aquatiques
                boss = new AquaticBoss(
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    this.currentLevel,
                    zone
                );
                this.addLog('⚠️ LE GARDIEN DES PROFONDEURS APPARAÎT!', 'damage');
            } else if (zone === 5) {
                // Zone 5: Boss de la Cité Futuriste
                boss = new FuturisticBoss(
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    this.currentLevel,
                    zone
                );
                this.addLog('⚠️ LE GARDIEN CYBERNÉTIQUE APPARAÎT!', 'damage');
            } else {
                // Autres zones: Boss standard (pour l'instant)
                boss = new Enemy(
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    Math.floor(CONFIG.GRID_SIZE / 2),
                    this.currentLevel,
                    zone,
                    true // isBoss = true
                );
                this.addLog('⚠️ BOSS APPARU!', 'damage');
            }
            
            this.enemies.push(boss);
            this.currentBoss = boss; // Référence pour les mécaniques avancées

            // Lancer la musique de boss
            this.playMusic('boss', zone);
        } else {
            // Nombre d'ennemis qui augmente avec le niveau
            // Niveau 1: ~8, Niveau 25: ~35, Niveau 50: ~60
            const baseEnemies = 8;
            const maxEnemies = 60;
            const progress = (this.currentLevel - 1) / 49;
            const numEnemies = Math.floor(baseEnemies + (maxEnemies - baseEnemies) * progress);
            
            for (let i = 0; i < numEnemies; i++) {
                // Choisir une salle aléatoire qui n'est PAS une salle de soins
                let room;
                let attempts = 0;
                do {
                    room = this.dungeon.rooms[
                        Math.floor(Math.random() * this.dungeon.rooms.length)
                    ];
                    attempts++;
                } while (this.healingRooms.includes(room) && attempts < 50);

                // Si on n'a pas trouvé de salle valide après 50 tentatives, passer
                if (this.healingRooms.includes(room)) continue;

                const x = room.x + Math.floor(Math.random() * room.width);
                const y = room.y + Math.floor(Math.random() * room.height);

                // Ne pas spawner trop près du joueur
                const dist = Math.hypot(x - this.player.x, y - this.player.y);
                if (dist > 5) {
                    // Déterminer le type selon le niveau
                    const enemyType = this.getEnemyTypeForLevel(this.currentLevel);
                    const enemy = new Enemy(x, y, this.currentLevel, zone, false, enemyType);
                    enemy.currentRoom = room;
                    
                    // Assigner un sprite aléatoire pour ce type d'ennemi
                    if (this.enemySprites[zone] && this.enemySprites[zone][enemyType]) {
                        const spriteCount = this.enemySprites[zone][enemyType].length;
                        enemy.spriteIndex = Math.floor(Math.random() * spriteCount);
                    }
                    
                    this.enemies.push(enemy);
                }
            }
        }
    }
    
    handlePlayerMovement() {
        // Vérifier le cooldown de déplacement
        if (this.movementCooldown > 0) {
            return; // Ne pas bouger si le cooldown n'est pas terminé
        }

        let dx = 0;
        let dy = 0;

        if (this.keys['z']) dy = -1;
        if (this.keys['s']) dy = 1;
        if (this.keys['q']) dx = -1;
        if (this.keys['d']) dx = 1;

        if (dx !== 0 || dy !== 0) {
            const newX = this.player.x + dx;
            const newY = this.player.y + dy;
            
            // Définir la direction pour l'animation (0=bas, 1=gauche, 2=droite, 3=haut)
            if (dy > 0) this.player.direction = 0;      // Bas
            else if (dx < 0) this.player.direction = 1; // Gauche
            else if (dx > 0) this.player.direction = 2; // Droite
            else if (dy < 0) this.player.direction = 3; // Haut
            
            // Vérifier les collisions
            if (this.canMoveTo(newX, newY)) {
                this.player.x = newX;
                this.player.y = newY;

                // Réinitialiser le cooldown de déplacement (appliquer bonus de vitesse de déplacement)
                const speedBonus = (this.player.perkEffects && this.player.perkEffects.moveSpeedBonus) ? this.player.perkEffects.moveSpeedBonus : 0;
                const newDelay = Math.max(0.05, this.movementDelay * (1 - speedBonus));
                this.movementCooldown = newDelay;

                // Activer l'animation de marche
                this.player.isWalking = true;
                this.player.walkFrame = (this.player.walkFrame + 1) % 4;

                // Jouer le son de pas selon le niveau
                this.playFootstepSound();

                // Si c'est un niveau de boss et que le joueur entre dans la salle
                if (this.isBossLevel && !this.bossRoomSealed && this.dungeon.bossRoom) {
                    const bossRoom = this.dungeon.bossRoom;
                    if (newX >= bossRoom.x && newX < bossRoom.x + bossRoom.width &&
                        newY >= bossRoom.y && newY < bossRoom.y + bossRoom.height) {
                        this.sealBossRoom();
                    }
                }

                // Vérifier si on atteint la sortie
                if (newX === this.exit.x && newY === this.exit.y) {
                    if (this.enemies.length === 0) {
                        this.nextLevel();
                    } else {
                        this.addLog(`🔒 Éliminez tous les ennemis! (${this.enemies.length} restants)`, 'info');
                    }
                }
            }
            
            // Réinitialiser les touches pour éviter le mouvement continu
            this.keys = {};
        }
    }
    
    sealBossRoom() {
        if (!this.dungeon.bossRoom) return;

        this.bossRoomSealed = true;
        const bossRoom = this.dungeon.bossRoom;

        // Sceller les entrées de la salle en créant des murs
        // Couloir Nord
        for (let x = bossRoom.x + Math.floor(bossRoom.width / 2) - 1; x < bossRoom.x + Math.floor(bossRoom.width / 2) + 2; x++) {
            this.dungeon.grid[bossRoom.y - 1][x] = 1;
        }

        // Couloir Sud
        for (let x = bossRoom.x + Math.floor(bossRoom.width / 2) - 1; x < bossRoom.x + Math.floor(bossRoom.width / 2) + 2; x++) {
            this.dungeon.grid[bossRoom.y + bossRoom.height][x] = 1;
        }

        // Couloir Est
        for (let y = bossRoom.y + Math.floor(bossRoom.height / 2) - 1; y < bossRoom.y + Math.floor(bossRoom.height / 2) + 2; y++) {
            this.dungeon.grid[y][bossRoom.x + bossRoom.width] = 1;
        }

        // Couloir Ouest
        for (let y = bossRoom.y + Math.floor(bossRoom.height / 2) - 1; y < bossRoom.y + Math.floor(bossRoom.height / 2) + 2; y++) {
            this.dungeon.grid[y][bossRoom.x - 1] = 1;
        }

        this.addLog('⚔️ La salle du boss est scellée!', 'damage');

        // Déclencher le dialogue avec le boss
        this.showBossDialogue();
    }

    canMoveTo(x, y) {
        if (x < 0 || x >= CONFIG.GRID_SIZE || y < 0 || y >= CONFIG.GRID_SIZE) {
            return false;
        }

        if (this.dungeon.grid[y][x] === 1) {
            return false;
        }

        // Vérifier collision avec ennemis
        for (const enemy of this.enemies) {
            if (enemy.x === x && enemy.y === y) {
                return false;
            }
        }

        // Vérifier collision avec les murs de feu du boss volcano
        for (const enemy of this.enemies) {
            if (enemy.bossType === 'volcano' && enemy.fireWalls) {
                for (const wall of enemy.fireWalls) {
                    if (wall.x === x && wall.y === y) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
    
    // Vérifier la ligne de vue entre deux points (Bresenham's line algorithm)
    hasLineOfSight(x0, y0, x1, y1, canShootThroughWalls = false) {
        // Si le magicien peut tirer à travers les murs
        if (canShootThroughWalls) {
            return true;
        }
        
        const dx = Math.abs(x1 - x0);
        const dy = Math.abs(y1 - y0);
        const sx = x0 < x1 ? 1 : -1;
        const sy = y0 < y1 ? 1 : -1;
        let err = dx - dy;
        
        let x = x0;
        let y = y0;
        
        while (true) {
            // Ne pas vérifier la position de départ et d'arrivée
            if (!(x === x0 && y === y0) && !(x === x1 && y === y1)) {
                // Vérifier si c'est un mur
                if (x >= 0 && x < CONFIG.GRID_SIZE && y >= 0 && y < CONFIG.GRID_SIZE) {
                    if (this.dungeon.grid[y][x] === 1) {
                        return false; // Mur bloque la ligne de vue
                    }
                }
            }
            
            // Arrivé à destination
            if (x === x1 && y === y1) {
                break;
            }
            
            const e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x += sx;
            }
            if (e2 < dx) {
                err += dx;
                y += sy;
            }
        }
        
        return true;
    }
    
    handlePlayerAttack(e) {
        // Convertir position souris en position grille
        const worldX = this.camera.x + this.mousePos.x / CONFIG.CELL_SIZE;
        const worldY = this.camera.y + this.mousePos.y / CONFIG.CELL_SIZE;

        const targetX = Math.floor(worldX);
        const targetY = Math.floor(worldY);

        // Vérifier si on clique sur un soigneur
        const clickedHealer = this.healers.find(h => h.x === targetX && h.y === targetY);
        if (clickedHealer) {
            this.handleHealerInteraction(clickedHealer);
            return;
        }

        // Pour les classes corps-à-corps (tank, knight), les attaques sont automatiques;
        // empêcher le clic d'attaquer (mais laisser les clics sur les soigneurs)
        if (this.player && (this.player.classType === 'knight' || this.player.classType === 'tank')) {
            return;
        }

        if (!this.player.canAttack()) return;
        
        // Vérifier la portée
        const distance = Math.hypot(targetX - this.player.x, targetY - this.player.y);
        
        if (this.player.range === Infinity || distance <= this.player.range) {
            // Vérifier la ligne de vue (le magicien peut tirer à travers les murs)
            const canShootThroughWalls = this.player.classType === 'mage';
            
            if (!this.hasLineOfSight(this.player.x, this.player.y, targetX, targetY, canShootThroughWalls)) {
                this.addLog('Pas de ligne de vue!', 'info');
                return;
            }
            
            // Chercher un ennemi à cette position
            const target = this.enemies.find(e => 
                e.x === targetX && e.y === targetY
            );
            
            if (target) {
                // Préparer la fonction de dégâts qui sera appelée à la fin de l'animation
                const applyDamage = () => {
                    // Vérifier que la cible existe toujours
                    if (!this.enemies.includes(target)) return;

                    // Calculer les dégâts avec critical
                    const { damage, isCritical } = this.player.getCalculatedDamage();
                    const killed = target.takeDamage(damage);
                    // Compter les dégâts infligés par le joueur
                    if (this.player) this.player.totalDamageDealt += damage;

                    // Afficher les dégâts au-dessus de l'ennemi avec style critique
                    if (isCritical) {
                        this.addFloatingText(target.x, target.y, `-${damage} CRIT!`, '#ffcc00');
                        this.createCriticalEffect(target.x, target.y);
                    } else {
                        this.addFloatingText(target.x, target.y, `-${damage}`, '#ff6b6b');
                    }

                    // Appliquer le knockback si le perk est actif
                    if (this.player.perkEffects.knockbackDistance > 0 && !killed) {
                        this.applyKnockback(target, this.player.perkEffects.knockbackDistance);
                    }

                    if (killed) {
                        // Si c'est un boss, déclencher le dialogue de défaite
                        if (target.isBoss) {
                            this.defeatedBoss = target;
                            this.defeatedBoss.zone = target.zone; // Garder la zone
                            // Sauvegarder l'XP pour le donner après le dialogue
                            this.defeatedBoss.xpValue = target.xpValue;
                            // Ajouter des effets de sang
                            this.createBloodEffects(target.x, target.y);
                            // Retarder la suppression du boss pour l'animation
                            setTimeout(() => {
                                this.showBossDefeatDialogue();
                            }, 500);
                        } else {
                            // Soins à la mort pour Chevalier et Tank : récupère la vie du monstre (limitée par la vie max du joueur)
                            if (this.player && (this.player.classType === 'knight' || this.player.classType === 'tank')) {
                                const healAmount = Math.min(target.maxHealth, this.player.maxHealth - this.player.health);
                                if (healAmount > 0) {
                                    this.player.health = Math.min(this.player.maxHealth, this.player.health + healAmount);
                                    this.addFloatingText(this.player.x, this.player.y, `+${healAmount} ❤`, '#00ff00');
                                }
                            }

                            // Ennemis normaux: donner l'XP immédiatement
                            this.enemies = this.enemies.filter(e => e !== target);
                            this.player.gainXP(target.xpValue);
                            // Afficher l'XP gagné au-dessus du joueur
                            const xpText = target.xpValue === 'level' ? 'LEVEL UP!' : `+${target.xpValue} XP`;
                            this.addFloatingText(this.player.x, this.player.y, xpText, '#ffd93d');
                        }
                    }
                };
                
                // Déterminer le nombre d'attaques (double_shot ou double_strike)
                const numAttacks = ((this.player.classType === 'archer' || this.player.classType === 'mage') && this.player.perkLevels.double_shot) ? 2 :
                                  ((this.player.classType === 'knight' || this.player.classType === 'tank') &&
                                   this.player.perkLevels.double_strike) ? 2 : 1;

                // Créer les animations pour chaque attaque
                for (let attackNum = 0; attackNum < numAttacks; attackNum++) {
                    let animation;

                    // Délai entre les attaques si double
                    const delay = attackNum * 0.15; // 150ms entre chaque

                    // Créer l'animation selon la classe
                    if (this.player.classType === 'archer') {
                        // Animation de flèche
                        animation = new ProjectileAnimation(
                            this.player.x, this.player.y,
                            targetX, targetY,
                            'arrow'
                        );
                        // Jouer le son de flèche
                        if (attackNum === 0 || delay > 0) {
                            setTimeout(() => this.playSound('arrow'), delay * 1000);
                        }
                    } else if (this.player.classType === 'mage') {
                        // Animation de boule magique
                        animation = new ProjectileAnimation(
                            this.player.x, this.player.y,
                            targetX, targetY,
                            'magic',
                            10 // Plus lent que la flèche
                        );
                        // Jouer le son de sort magique
                        if (attackNum === 0 || delay > 0) {
                            setTimeout(() => this.playSound('magicSpell'), delay * 1000);
                        }
                    } else if (this.player.classType === 'knight') {
                        // Animation de coup d'épée
                        animation = new MeleeAnimation(
                            this.player.x, this.player.y,
                            targetX, targetY,
                            'knight'
                        );
                        // Jouer le son d'épée
                        if (attackNum === 0 || delay > 0) {
                            setTimeout(() => this.playSound('swordHit'), delay * 1000);
                        }
                    } else if (this.player.classType === 'tank') {
                        // Animation de coup de bouclier
                        animation = new MeleeAnimation(
                            this.player.x, this.player.y,
                            targetX, targetY,
                            'tank'
                        );
                        // Jouer le son de coup de bouclier
                        if (attackNum === 0 || delay > 0) {
                            setTimeout(() => this.playSound('hit'), delay * 1000);
                        }
                    }

                    // Attacher la callback de dégâts à l'animation
                    if (animation) {
                        // Appliquer un délai si c'est une attaque supplémentaire
                        if (delay > 0) {
                            setTimeout(() => {
                                animation.onComplete = applyDamage;
                                this.animations.push(animation);
                            }, delay * 1000);
                        } else {
                            animation.onComplete = applyDamage;
                            this.animations.push(animation);
                        }
                    }
                }

                // Déclencher le cooldown d'attaque
                this.player.attack();
            }
        }
    }

    applyKnockback(enemy, distance) {
        // Calculer la direction du knockback
        const dx = enemy.x - this.player.x;
        const dy = enemy.y - this.player.y;
        const length = Math.sqrt(dx * dx + dy * dy);

        if (length === 0) return;

        // Normaliser et multiplier par la distance
        const dirX = Math.round(dx / length);
        const dirY = Math.round(dy / length);

        // Pousser l'ennemi
        for (let i = 0; i < distance; i++) {
            const newX = enemy.x + dirX;
            const newY = enemy.y + dirY;

            // Vérifier que la nouvelle position est valide (pas un mur, pas hors limites)
            if (this.isWalkableForKnockback(newX, newY, enemy)) {
                enemy.x = newX;
                enemy.y = newY;
            } else {
                break; // Arrêter si on touche un mur
            }
        }

        // Effet visuel de knockback
        this.createKnockbackEffect(enemy.x, enemy.y);
    }

    // Vérifier si une case est accessible pour le knockback (murs seulement, pas les autres ennemis)
    isWalkableForKnockback(x, y, movingEnemy) {
        // Hors limites
        if (x < 0 || x >= CONFIG.GRID_SIZE || y < 0 || y >= CONFIG.GRID_SIZE) {
            return false;
        }
        
        // Mur
        if (this.dungeon.grid[y][x] === 1) {
            return false;
        }
        
        // Vérifier collision avec autres ennemis (pas soi-même)
        for (const enemy of this.enemies) {
            if (enemy !== movingEnemy && enemy.x === x && enemy.y === y) {
                return false;
            }
        }
        
        // Vérifier collision avec le joueur
        if (this.player.x === x && this.player.y === y) {
            return false;
        }
        
        return true;
    }

    createKnockbackEffect(x, y) {
        // Créer des particules pour l'effet de knockback
        for (let i = 0; i < 5; i++) {
            const angle = Math.random() * Math.PI * 2;
            const offsetX = Math.cos(angle) * 0.3;
            const offsetY = Math.sin(angle) * 0.3;

            this.floatingTexts.push({
                x: x + offsetX,
                y: y + offsetY,
                text: '💨',
                color: '#95a5a6',
                velocity: { x: offsetX, y: offsetY },
                life: 0.6,
                maxLife: 0.6
            });
        }
    }

    findNearestEnemy(x, y, maxRange = Infinity) {
        let nearestEnemy = null;
        let minDistance = Infinity;

        for (const enemy of this.enemies) {
            const distance = Math.hypot(enemy.x - x, enemy.y - y);
            if (distance < minDistance && distance <= maxRange) {
                minDistance = distance;
                nearestEnemy = enemy;
            }
        }

        return nearestEnemy;
    }

    createCriticalEffect(x, y) {
        // Créer un effet visuel pour les coups critiques
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const offsetX = Math.cos(angle) * 0.5;
            const offsetY = Math.sin(angle) * 0.5;

            this.floatingTexts.push({
                x: x + offsetX,
                y: y + offsetY,
                text: '⚡',
                color: '#ffcc00',
                velocity: { x: offsetX * 0.5, y: offsetY * 0.5 },
                life: 0.5,
                maxLife: 0.5
            });
        }
    }

    handleHealerInteraction(healer) {
        // Vérifier que le joueur est dans la même pièce que le soigneur
        const healerRoom = this.healingRooms.find(room => 
            healer.x >= room.x && healer.x < room.x + room.width &&
            healer.y >= room.y && healer.y < room.y + room.height
        );
        
        if (healerRoom) {
            const playerInRoom = 
                this.player.x >= healerRoom.x && this.player.x < healerRoom.x + healerRoom.width &&
                this.player.y >= healerRoom.y && this.player.y < healerRoom.y + healerRoom.height;
            
            if (!playerInRoom) {
                this.addLog('💚 Approchez-vous du soigneur pour être soigné!', 'info');
                return;
            }
        }

        if (healer.hasHealed) {
            this.addLog('💚 Ce soigneur vous a déjà aidé!', 'info');
            return;
        }

        const healAmount = healer.heal(this.player);

        if (healAmount > 0) {
            // Afficher le soin au-dessus du joueur
            this.addFloatingText(this.player.x, this.player.y, `+${healAmount} HP`, '#2ecc71');

            // Créer une animation de particules de soin
            this.createHealingEffect(this.player.x, this.player.y);

            this.addLog(`💚 Le soigneur vous a restauré ${healAmount} points de vie!`, 'heal');
            this.updateHUD();
        } else {
            this.addLog('💚 Vous êtes déjà en pleine santé!', 'info');
        }
    }

    createHealingEffect(x, y) {
        // Créer plusieurs particules de soin autour du joueur
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const offsetX = Math.cos(angle) * 0.5;
            const offsetY = Math.sin(angle) * 0.5;

            this.floatingTexts.push({
                x: x + offsetX,
                y: y + offsetY,
                text: '✨',
                color: '#2ecc71',
                duration: 1.0,
                elapsed: 0,
                offsetY: 0
            });
        }
    }

    createReviveEffect(x, y) {
        // Créer un effet visuel de résurrection
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            const offsetX = Math.cos(angle) * 0.7;
            const offsetY = Math.sin(angle) * 0.7;

            this.floatingTexts.push({
                x: x + offsetX,
                y: y + offsetY,
                text: '💛',
                color: '#f39c12',
                duration: 1.5,
                elapsed: 0,
                offsetY: 0
            });
        }
    }

    // Mettre à jour les sons d'ambiance selon le niveau
    updateAmbientSounds(deltaTime) {
        // Incrémenter le timer
        this.ambientTimer += deltaTime;

        // Si le timer atteint l'intervalle, jouer un son d'ambiance
        if (this.ambientTimer >= this.ambientInterval) {
            // Réinitialiser le timer
            this.ambientTimer = 0;

            // Déterminer quel son jouer selon le niveau
            if (this.currentLevel >= 31 && this.currentLevel <= 40) {
                // Niveaux 31-40 : ambiant_level4.mp3 toutes les 3-9 secondes
                this.playSound('ambientLevel4');
                this.ambientInterval = 3 + Math.random() * 6; // 3 à 9 secondes
            } else if (this.currentLevel >= 11 && this.currentLevel <= 19) {
                // Niveaux 11-19 : stone_fall.mp3 toutes les 4-15 secondes
                this.playSound('stoneFall');
                this.ambientInterval = 4 + Math.random() * 11; // 4 à 15 secondes
            } else {
                // Pour les autres niveaux, définir un intervalle par défaut
                this.ambientInterval = 10; // Pas de son d'ambiance
            }
        }
    }

    // Jouer le son de pas selon le niveau
    playFootstepSound() {
        // Déterminer quel son de pas jouer selon le niveau
        if (this.currentLevel >= 1 && this.currentLevel <= 10) {
            // Niveaux 1-10 : herbe
            this.playSound('stepOnGrass');
        } else if (this.currentLevel >= 11 && this.currentLevel <= 30) {
            // Niveaux 11-30 : roche
            this.playSound('stepOnRock');
        } else if (this.currentLevel >= 31 && this.currentLevel <= 40) {
            // Niveaux 31-40 : sable
            this.playSound('stepOnSand');
        } else if (this.currentLevel >= 41 && this.currentLevel <= 50) {
            // Niveaux 41-50 : acier
            this.playSound('stepOnSteel');
        }
    }

    // Animation de seconde vie
    playSecondLifeAnimation() {
        console.log('🔥 playSecondLifeAnimation appelée!');

        // Jouer le thème de l'ange
        this.playSound('angelTheme');

        // Mettre le jeu en pause
        this.state = 'second_life_animation';

        // Configurer l'image du héros selon la zone actuelle
        const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);
        const heroImageMap = {
            archer: `./pixel_art/heros_talk/monde${zone}/archer.png`,
            knight: `./pixel_art/heros_talk/monde${zone}/knight.png`,
            mage: `./pixel_art/heros_talk/monde${zone}/magic men.png`,
            tank: `./pixel_art/heros_talk/monde${zone}/tank.png`
        };

        const heroImage = document.getElementById('second-life-hero-image');
        heroImage.src = heroImageMap[this.player.classType];

        // Forcer le redémarrage des animations CSS
        const container = document.querySelector('.second-life-container');
        const hero = document.querySelector('.second-life-hero');
        const heart = document.querySelector('.second-life-heart');
        const text = document.querySelector('.second-life-text');

        // Retirer et réajouter les classes pour relancer les animations
        [hero, heart, text].forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // Force reflow
        });
        
        // Réappliquer les animations
        setTimeout(() => {
            hero.style.animation = '';
            heart.style.animation = '';
            text.style.animation = '';
            heroImage.style.animation = '';
            heroImage.style.filter = 'brightness(0) invert(1)';
        }, 10);

        // Afficher l'écran d'animation
        this.showScreen('second-life-screen');

        // Après l'animation (3.5 secondes), revenir au jeu
        setTimeout(() => {
            this.finishSecondLifeAnimation();
        }, 3500);
    }

    // Fin de l'animation de seconde vie
    finishSecondLifeAnimation() {
        // Afficher le dialogue entre l'ange et le héros
        this.showSecondLifeDialogue();
    }

    // Afficher le dialogue après la résurrection
    showSecondLifeDialogue() {
        // Dialogues de l'ange et réponses des héros
        const angelMessage = "Tu as frôlé les ténèbres, Porteur de Lumière.\n\nJe t'ai ramené… mais je ne pourrai pas le refaire.\n\nCette seconde chance est la dernière.\n\nFais attention à ta vie, maintenant.";

        const heroResponses = {
            archer: "Je sais.\n\nMais tant qu'il est là-bas, prisonnier des ombres…\n\nJe ne peux pas abandonner.\n\nMême si c'est ma dernière chance.",
            knight: "Merci, ange gardien.\n\nJe ne mourrai plus en lâche.\n\nSi je tombe à nouveau… ce sera en me battant jusqu'au bout.",
            tank: "Une dernière ligne de défense.\n\nC'est tout ce qu'il me faut.\n\nJe ne reculerai pas.",
            mage: "La mort… je l'ai vue de près.\n\nLa Dernière Lumière vacille.\n\nJe dois continuer. Même si tout s'effondre."
        };

        // Configurer le dialogue
        this.currentDialogue = {
            messages: [
                { speaker: 'angel', text: angelMessage },
                { speaker: 'hero', text: heroResponses[this.player.classType] }
            ],
            currentIndex: 0,
            currentCharIndex: 0,
            typingSpeed: 30, // ms par caractère
            isTyping: false
        };

        // Afficher l'écran de dialogue
        const dialogueContainer = document.getElementById('second-life-dialogue');
        const angelImage = document.getElementById('dialogue-angel-image');
        const heroImage = document.getElementById('dialogue-second-hero-image');
        const dialogueText = document.getElementById('second-dialogue-text');
        const continueBtn = document.getElementById('second-dialogue-finish-btn');

        // Images
        angelImage.src = './pixel_art/helping_talk/angel.png';
        const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);
        const heroImageMap = {
            archer: `./pixel_art/heros_talk/monde${zone}/archer.png`,
            knight: `./pixel_art/heros_talk/monde${zone}/knight.png`,
            mage: `./pixel_art/heros_talk/monde${zone}/magic men.png`,
            tank: `./pixel_art/heros_talk/monde${zone}/tank.png`
        };
        heroImage.src = heroImageMap[this.player.classType];

        // Masquer le bouton au début
        continueBtn.style.display = 'none';

        // Afficher l'écran
        this.showScreen('second-life-dialogue');
        this.state = 'second_life_dialogue';

        // Démarrer l'affichage du premier message
        this.typeNextDialogueMessage();
    }

    // Taper le prochain message du dialogue
    typeNextDialogueMessage() {
        if (!this.currentDialogue) return;

        const message = this.currentDialogue.messages[this.currentDialogue.currentIndex];
        if (!message) {
            // Fin du dialogue
            this.endSecondLifeDialogue();
            return;
        }

        const dialogueText = document.getElementById('second-dialogue-text');
        const angelContainer = document.querySelector('.dialogue-angel');
        const heroContainer = document.querySelector('.dialogue-second-hero');

        // Mettre en surbrillance le bon personnage
        if (message.speaker === 'angel') {
            angelContainer.classList.add('active');
            heroContainer.classList.remove('active');
        } else {
            angelContainer.classList.remove('active');
            heroContainer.classList.add('active');
        }

        // Réinitialiser le texte
        dialogueText.textContent = '';
        this.currentDialogue.currentCharIndex = 0;
        this.currentDialogue.isTyping = true;

        // Animation de frappe
        this.typeDialogueCharacter();
    }

    // Taper un caractère du dialogue
    typeDialogueCharacter() {
        if (!this.currentDialogue || !this.currentDialogue.isTyping) return;

        const message = this.currentDialogue.messages[this.currentDialogue.currentIndex];
        const dialogueText = document.getElementById('second-dialogue-text');
        const continueBtn = document.getElementById('second-dialogue-finish-btn');

        if (this.currentDialogue.currentCharIndex < message.text.length) {
            dialogueText.textContent += message.text[this.currentDialogue.currentCharIndex];
            this.currentDialogue.currentCharIndex++;

            setTimeout(() => this.typeDialogueCharacter(), this.currentDialogue.typingSpeed);
        } else {
            // Message terminé
            this.currentDialogue.isTyping = false;

            // Afficher le bouton "Continuer" ou "Reprendre"
            if (this.currentDialogue.currentIndex < this.currentDialogue.messages.length - 1) {
                continueBtn.textContent = 'Continuer ➤';
            } else {
                continueBtn.textContent = 'Reprendre le combat ⚔️';
            }
            continueBtn.style.display = 'block';
        }
    }

    // Passer au message suivant du dialogue
    nextSecondLifeDialogueMessage() {
        if (!this.currentDialogue) return;

        // Si encore en train de taper, afficher tout le texte
        if (this.currentDialogue.isTyping) {
            const message = this.currentDialogue.messages[this.currentDialogue.currentIndex];
            document.getElementById('second-dialogue-text').textContent = message.text;
            this.currentDialogue.isTyping = false;
            this.currentDialogue.currentCharIndex = message.text.length;

            const continueBtn = document.getElementById('second-dialogue-finish-btn');
            if (this.currentDialogue.currentIndex < this.currentDialogue.messages.length - 1) {
                continueBtn.textContent = 'Continuer ➤';
            } else {
                continueBtn.textContent = 'Reprendre le combat ⚔️';
            }
            continueBtn.style.display = 'block';
            return;
        }

        // Passer au message suivant
        this.currentDialogue.currentIndex++;

        if (this.currentDialogue.currentIndex < this.currentDialogue.messages.length) {
            this.typeNextDialogueMessage();
        } else {
            this.endSecondLifeDialogue();
        }
    }

    // Terminer le dialogue de seconde vie
    endSecondLifeDialogue() {
        this.currentDialogue = null;
        this.state = 'playing';
        this.showScreen('game-screen');

        // Afficher l'indicateur de seconde vie utilisée
        document.getElementById('second-life-indicator').style.display = 'flex';

        // Logs et effets visuels dans le jeu
        this.addLog('💛 SECONDE VIE ACTIVÉE!', 'heal');
        this.addFloatingText(this.player.x, this.player.y, 'SECONDE VIE!', '#f39c12');
        this.createReviveEffect(this.player.x, this.player.y);

        // Mettre à jour le HUD
        this.updateHUD();
    }

    // ===== DIALOGUE AVEC LE BOSS =====

    // Afficher le dialogue avec le boss
    showBossDialogue() {
        const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);

        // Dialogues du boss zone 1 - 5 variantes
        const bossMessages = {
            1: [
                "Porteur de Lumière…\n\nTu oses défier les ténèbres ?\n\nJe suis le gardien de ce royaume d'ombres.\n\nTon espoir finira ici.",
                "Enfin… Un nouveau challenger.\n\nCombien de héros ont péri dans cette salle…\n\nTu ne seras qu'un de plus.",
                "Les ombres murmurent ton nom.\n\nElles attendent ta chute.\n\nMoi aussi.",
                "Tu sens cette aura ?\n\nC'est la mort qui t'entoure.\n\nBienvenue dans mon domaine.",
                "Personne ne franchit cette porte.\n\nPersonne ne me vainc.\n\nJamais."
            ]
        };

        // Dialogues spéciaux pour l'Archer et le Boss 1 (amoureux)
        const archerBoss1Romance = [
            "Toi…\n\nPourquoi es-tu revenue ?\n\nTu sais que je ne peux pas te laisser passer.\n\nMême si… mon cœur le voudrait.",
            "À chaque fois que nos regards se croisent…\n\nJe ressens ce conflit déchirant.\n\nMon devoir contre… ce sentiment.\n\nPourquoi rends-tu tout si compliqué ?",
            "Tu es revenue.\n\nJ'espérais… et redoutais ce moment.\n\nNous sommes ennemis, mais…\n\nMon âme ne peut s'y résoudre.",
            "Chaque flèche que tu décoches…\n\nPerce mon armure et mon cœur.\n\nMais je dois te combattre.\n\nC'est mon destin maudit.",
            "Pourquoi fallait-il que ce soit toi ?\n\nDans un autre monde, nous aurions…\n\nMais ici, seule la lame décide.\n\nPardonne-moi."
        ];

        const archerBoss1HeroResponses = [
            "Je suis désolée…\n\nMais celui que j'aime est prisonnier ici.\n\nMême si tu occupes mes pensées…\n\nJe dois aller de l'avant.\n\nPardonne-moi.",
            "Chaque fois que je te vois…\n\nMon cœur hésite.\n\nMais je ne peux pas abandonner.\n\nMême pour toi.\n\nMême pour nous.",
            "Tu rends tout si difficile…\n\nCes sentiments, cette mission…\n\nMais je dois choisir.\n\nEt mon choix est fait.\n\nEn garde.",
            "Je voudrais qu'il existe une autre voie…\n\nOù nous ne serions pas ennemis.\n\nMais ce n'est pas notre destin.\n\nBattons-nous… une dernière fois.",
            "Mon cœur saigne déjà…\n\nAvant même que la bataille ne commence.\n\nMais je ne peux reculer.\n\nPour lui. Pour moi. Pour nous deux."
        ];

        // Réponses des héros selon leur classe - 5 variantes pour chaque
        const heroResponses = {
            archer: {
                1: [
                    "Gardien des ténèbres…\n\nJe n'ai pas peur de toi.\n\nJe suis venu reprendre ce que tu as volé.\n\nEn garde!",
                    "Mes flèches ont déjà abattu des dizaines d'ennemis.\n\nTu ne seras qu'une cible de plus.\n\nPrépare-toi!",
                    "La précision de mon arc…\n\nNe laisse aucune chance.\n\nTu tomberas comme les autres.",
                    "Je suis venue de loin.\n\nPour sauver celui que j'aime.\n\nRien ne m'arrêtera. Personne.",
                    "Chaque flèche porte mon espoir.\n\nMa détermination.\n\nTu ne peux pas gagner."
                ]
            },
            knight: {
                1: [
                    "Un gardien des ombres…\n\nJ'ai affronté pire que toi.\n\nMon honneur ne vacillera pas.\n\nBattons-nous!",
                    "Par mon serment de chevalier…\n\nJe ne reculerai pas.\n\nTon règne s'achève ici!",
                    "L'honneur exige que je te combatte.\n\nLa justice exige que je te vainque.\n\nEn garde, démon!",
                    "Ma lame a été forgée dans le courage.\n\nTrempée dans la loyauté.\n\nElle ne connaît pas la peur!",
                    "Je suis le bouclier des innocents.\n\nL'épée de la justice.\n\nTombe, créature des ombres!"
                ]
            },
            mage: {
                1: [
                    "Les ténèbres…\n\nElles m'appellent depuis si longtemps.\n\nMais la Dernière Lumière brille encore.\n\nJe te vaincrai!",
                    "Magie contre ombre.\n\nLumière contre ténèbres.\n\nVoyons qui l'emportera!",
                    "J'ai étudié les arcanes interdits.\n\nPour ce moment précis.\n\nTa fin approche!",
                    "La Dernière Lumière vacille…\n\nMais elle ne s'éteindra pas.\n\nPas aujourd'hui!",
                    "Les étoiles m'ont montré ta défaite.\n\nLe destin est écrit.\n\nAccepte-le!"
                ]
            },
            tank: {
                1: [
                    "Un gardien.\n\nParfait.\n\nJe suis le mur qui ne s'effondre jamais.\n\nViens!",
                    "Tu peux frapper.\n\nEncore et encore.\n\nJe tiendrai. Toujours.",
                    "Ma défense est impénétrable.\n\nMa volonté, inébranlable.\n\nTu ne passeras pas!",
                    "Chaque coup que je reçois…\n\nMe rend plus fort.\n\nFrappe-moi de toutes tes forces!",
                    "Je suis la forteresse vivante.\n\nLe rempart indestructible.\n\nTu t'écraseras contre moi!"
                ]
            }
        };

        // Choisir un dialogue aléatoire
        let bossMessage, heroMessage;

        // Cas spécial : Archer et Boss 1 (relation amoureuse)
        if (this.player.classType === 'archer' && zone === 1) {
            const randomIndex = Math.floor(Math.random() * archerBoss1Romance.length);
            bossMessage = archerBoss1Romance[randomIndex];
            heroMessage = archerBoss1HeroResponses[randomIndex];
        } else {
            // Dialogue normal
            const bossDialogues = bossMessages[zone] || ["Prépare-toi à l'affrontement final!"];
            const randomBossIndex = Math.floor(Math.random() * bossDialogues.length);
            bossMessage = bossDialogues[randomBossIndex];

            const heroDialogues = heroResponses[this.player.classType]?.[zone] || ["Je ne reculerai pas!"];
            const randomHeroIndex = Math.floor(Math.random() * heroDialogues.length);
            heroMessage = heroDialogues[randomHeroIndex];
        }

        // Configurer le dialogue
        this.currentBossDialogue = {
            messages: [
                { speaker: 'boss', text: bossMessage },
                { speaker: 'hero', text: heroMessage }
            ],
            currentIndex: 0,
            currentCharIndex: 0,
            typingSpeed: 30,
            isTyping: false
        };

        // Afficher l'écran de dialogue
        const bossImage = document.getElementById('dialogue-boss-image');
        const heroImage = document.getElementById('dialogue-boss-hero-image');
        const bossName = document.getElementById('boss-name');
        const heroName = document.getElementById('boss-hero-name');
        const continueBtn = document.getElementById('boss-dialogue-finish-btn');

        // Images - Première rencontre = Phase 1
        bossImage.src = `./pixel_art/boss_talk/phase_1/boss_${zone}.png`;
        bossName.textContent = `Gardien de la Zone ${zone}`;

        // Image du héros selon sa classe et la zone
        const heroImageMap = {
            archer: `./pixel_art/heros_talk/monde${zone}/archer.png`,
            knight: `./pixel_art/heros_talk/monde${zone}/knight.png`,
            mage: `./pixel_art/heros_talk/monde${zone}/magic men.png`,
            tank: `./pixel_art/heros_talk/monde${zone}/tank.png`
        };
        heroImage.src = heroImageMap[this.player.classType];
        heroName.textContent = this.player.className;

        // Masquer le bouton au début
        continueBtn.style.display = 'none';

        // Afficher l'écran
        this.showScreen('boss-dialogue');
        this.state = 'boss_dialogue';

        // Démarrer l'affichage du premier message
        this.typeNextBossDialogueMessage();
    }

    // Taper le prochain message du dialogue avec le boss
    typeNextBossDialogueMessage() {
        if (!this.currentBossDialogue) return;

        const message = this.currentBossDialogue.messages[this.currentBossDialogue.currentIndex];
        if (!message) {
            this.endBossDialogue();
            return;
        }

        const dialogueText = document.getElementById('boss-dialogue-text');
        const bossContainer = document.querySelector('.dialogue-boss');
        const heroContainers = document.querySelectorAll('.dialogue-second-hero');
        const heroContainer = heroContainers[1]; // Le deuxième (pour le héros)
        const bossImage = document.getElementById('dialogue-boss-image');
        const heroImage = document.getElementById('dialogue-boss-hero-image');

        // Afficher le héros ou le boss selon qui parle
        if (message.speaker === 'boss') {
            bossContainer.classList.add('active');
            heroContainer.classList.remove('active');
            heroImage.style.display = 'block'; // S'assurer que le héros est visible
        } else {
            bossContainer.classList.remove('active');
            heroContainer.classList.add('active');
            heroImage.style.display = 'block'; // S'assurer que le héros est visible
        }

        // Réinitialiser le texte
        dialogueText.textContent = '';
        this.currentBossDialogue.currentCharIndex = 0;
        this.currentBossDialogue.isTyping = true;

        // Animation de frappe
        this.typeBossDialogueCharacter();
    }

    // Taper un caractère du dialogue avec le boss
    typeBossDialogueCharacter() {
        if (!this.currentBossDialogue || !this.currentBossDialogue.isTyping) return;

        const message = this.currentBossDialogue.messages[this.currentBossDialogue.currentIndex];
        const dialogueText = document.getElementById('boss-dialogue-text');
        const continueBtn = document.getElementById('boss-dialogue-finish-btn');

        if (this.currentBossDialogue.currentCharIndex < message.text.length) {
            dialogueText.textContent += message.text[this.currentBossDialogue.currentCharIndex];
            this.currentBossDialogue.currentCharIndex++;

            setTimeout(() => this.typeBossDialogueCharacter(), this.currentBossDialogue.typingSpeed);
        } else {
            // Message terminé
            this.currentBossDialogue.isTyping = false;

            // Afficher le bouton
            if (this.currentBossDialogue.currentIndex < this.currentBossDialogue.messages.length - 1) {
                continueBtn.textContent = 'Continuer ➤';
            } else {
                // Dernier message
                if (this.currentBossDialogue.isRageDialogue) {
                    continueBtn.textContent = 'Continuer le combat ➤';
                } else {
                    continueBtn.textContent = 'Commencer le combat ⚔️';
                }
            }
            continueBtn.style.display = 'block';
        }
    }

    // Passer au message suivant du dialogue avec le boss
    nextBossDialogueMessage() {
        if (!this.currentBossDialogue) return;

        // Si encore en train de taper, afficher tout le texte
        if (this.currentBossDialogue.isTyping) {
            const message = this.currentBossDialogue.messages[this.currentBossDialogue.currentIndex];
            document.getElementById('boss-dialogue-text').textContent = message.text;
            this.currentBossDialogue.isTyping = false;
            this.currentBossDialogue.currentCharIndex = message.text.length;

            const continueBtn = document.getElementById('boss-dialogue-finish-btn');
            if (this.currentBossDialogue.currentIndex < this.currentBossDialogue.messages.length - 1) {
                continueBtn.textContent = 'Continuer ➤';
            } else {
                // Dernier message
                if (this.currentBossDialogue.isRageDialogue) {
                    continueBtn.textContent = 'Continuer le combat ➤';
                } else {
                    continueBtn.textContent = 'Commencer le combat ⚔️';
                }
            }
            continueBtn.style.display = 'block';
            return;
        }

        // Passer au message suivant
        this.currentBossDialogue.currentIndex++;

        if (this.currentBossDialogue.currentIndex < this.currentBossDialogue.messages.length) {
            this.typeNextBossDialogueMessage();
        } else {
            this.endBossDialogue();
        }
    }

    // Terminer le dialogue avec le boss
    endBossDialogue() {
        // Vérifier si c'était un dialogue de rage (transition de phase)
        const wasRageDialogue = this.currentBossDialogue && this.currentBossDialogue.isRageDialogue;

        this.currentBossDialogue = null;
        this.state = 'playing';
        this.showScreen('game-screen');

        // Réafficher l'image du héros si elle était cachée
        const heroImage = document.getElementById('dialogue-boss-hero-image');
        if (heroImage) {
            heroImage.style.display = 'block';
        }

        // Ajouter une période d'invulnérabilité après le dialogue pour éviter les dégâts de contact au spawn
        if (this.currentBoss) {
            this.currentBoss.isInvulnerable = true;
            setTimeout(() => {
                if (this.currentBoss) {
                    this.currentBoss.isInvulnerable = false;
                }
            }, 1500); // 1.5 secondes d'invulnérabilité du boss

            // Réinitialiser aussi les timers d'attaque avec délai
            if (this.currentBoss.bossType === 'fire') {
                // Pour le boss fire
                this.currentBoss.fireballTimer = -1.2;
                this.currentBoss.contactDamageTimer = 0;
            } else if (this.currentBoss.bossType === 'volcano') {
                // Pour le boss volcano
                this.currentBoss.projectileTimer = -1.2;
                this.currentBoss.contactDamageTimer = 0;
                this.currentBoss.stalactiteTimer = -1.2;
            } else {
                // Boss standard
                this.currentBoss.projectileTimer = -1.2;
                this.currentBoss.contactDamageTimer = 0;
            }
        }

        if (wasRageDialogue) {
            this.addLog('🔥 La phase 2 commence!', 'damage');
        } else {
            this.addLog('⚔️ Le combat commence!', 'damage');
        }
    }

    // Créer des effets de sang quand le boss est vaincu
    createBloodEffects(x, y) {
        // Créer plusieurs particules de sang
        for (let i = 0; i < 20; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 3;
            const distance = Math.random() * 2;

            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 1.5,
                maxLife: 1.5,
                color: '#8B0000', // Rouge sang foncé
                size: 3 + Math.random() * 4,
                type: 'blood'
            });
        }

        // Ajouter une tache de sang permanente au sol
        if (!this.bloodStains) this.bloodStains = [];
        this.bloodStains.push({
            x: x,
            y: y,
            size: 1.5,
            alpha: 0.7
        });
    }

    // Afficher le dialogue de défaite du boss
    showBossDefeatDialogue() {
        console.log('[DEBUG] showBossDefeatDialogue called');
        if (!this.defeatedBoss) return;

        const zone = this.defeatedBoss.zone;
        console.log('[DEBUG] Zone:', zone);

        // Dialogues de défaite du boss zone 1 - 5 variantes
        const bossDefeatMessages = {
            1: [
                "Impossible…\n\nComment… un mortel…\n\nLes ténèbres… m'abandonnent…\n\nTu… es plus fort… que je ne pensais…",
                "Je… tombe…\n\nMais d'autres viendront…\n\nPlus puissants… plus sombres…\n\nCe n'est… que le début…",
                "Tu m'as vaincu…\n\nMais à quel prix…\n\nLes ombres… se souviendront de toi…\n\nElles… te traqueront…",
                "Ma fin… n'est qu'un commencement…\n\nLa vraie obscurité… t'attend…\n\nProfite… de ta victoire… éphémère…",
                "Je… ne suis qu'un gardien…\n\nLe véritable maître… des ténèbres…\n\nT'attend… plus loin…\n\nSi… tu arrives jusque-là…"
            ]
        };

        // Dialogues spéciaux défaite pour Archer et Boss 1 (amoureux)
        const archerBoss1DefeatRomance = [
            "Ainsi… tu m'as vaincu…\n\nC'est… étrangement apaisant…\n\nDe tomber… par ta main…\n\nVa… sauve-le…\n\nEt… sois heureuse…",
            "Je savais… que ce jour viendrait…\n\nMon cœur… t'a trahi…\n\nJe ne pouvais… me battre… vraiment…\n\nPas contre toi…\n\nAdieu… mon impossible amour…",
            "Ton regard… même maintenant…\n\nMe hante…\n\nJe… je suis content…\n\nQue ce soit toi…\n\nQui mette fin… à ma souffrance…",
            "Dans… un autre monde…\n\nNous aurions pu…\n\nMais ici… tu as gagné…\n\nVa… je ne te retiens plus…\n\nOublie-moi…",
            "Mes dernières pensées… sont pour toi…\n\nPas de regrets…\n\nTu m'as libéré… de ce fardeau…\n\nMerci… et pardon…\n\nPour tout…"
        ];

        const archerBoss1DefeatHeroResponses = [
            "Je suis… désolée…\n\nTu ne méritais pas ça…\n\nMais je n'avais pas le choix…\n\nRepose en paix…\n\nJe ne t'oublierai jamais…",
            "Pardonne-moi…\n\nDans un autre monde… peut-être…\n\nMais pas dans celui-ci…\n\nAdieu… mon ami… mon ennemi…\n\nMon… presque amour…",
            "Tes mots… me brisent le cœur…\n\nPlus que n'importe quelle blessure…\n\nJe continuerai… mais une partie de moi…\n\nReste ici… avec toi…\n\nPour toujours…",
            "Ne dis pas ça…\n\nJe… je me souviendrai de toi…\n\nDe nous… de ce qui aurait pu être…\n\nRepose… je porterai ce poids…\n\nToute ma vie…",
            "Merci… pour ces mots…\n\nIls rendent tout plus difficile…\n\nMais aussi… plus supportable…\n\nAdieu…\n\nMon cœur pleure… mais mes jambes avancent…"
        ];

        // Réponses des héros - 5 variantes
        const heroDefeatResponses = {
            archer: {
                1: [
                    "C'est fini…\n\nTu ne feras plus de mal…\n\nJe continue… vers la lumière…\n\nVers lui…",
                    "Ta chute… n'est qu'un pas…\n\nVers mon but…\n\nJe n'ai pas le temps… pour les regrets…\n\nEn avant…",
                    "Encore un obstacle… franchi…\n\nCombien reste-t-il…\n\nPeu importe… je continuerai…\n\nJusqu'au bout…",
                    "Les ombres reculent…\n\nLa lumière avance…\n\nUn combat de plus… une victoire de plus…\n\nJe ne m'arrêterai pas…",
                    "Repose…\n\nTon règne est terminé…\n\nLe mien… commence à peine…\n\nPlus rien ne m'arrêtera…"
                ]
            },
            knight: {
                1: [
                    "L'honneur est sauf…\n\nLa justice… triomphe encore…\n\nRepose… démon…\n\nTon mal… ne se répandra plus…",
                    "Par mon serment… je t'ai vaincu…\n\nQue ton âme… trouve la paix…\n\nOu la damnation… qu'elle mérite…",
                    "La lumière… chasse les ténèbres…\n\nComme toujours…\n\nTon sacrifice… ne sera pas vain…\n\nJe protégerai… ce royaume…",
                    "Tu combattais… avec honneur…\n\nMalgré ta noirceur…\n\nJe te salue… guerrier des ombres…\n\nRepose en paix…",
                    "Ma lame… s'est teintée… de ton sang…\n\nMais mon honneur… reste intact…\n\nJe continuerai… ma quête…\n\nToujours…"
                ]
            },
            mage: {
                1: [
                    "La magie… a tranché…\n\nLumière sur ombre…\n\nTa défaite… était écrite…\n\nDans les étoiles…",
                    "Les arcanes… ne mentent jamais…\n\nTon destin… s'achève ici…\n\nLe mien… continue…\n\nVers la Dernière Lumière…",
                    "Intéressant…\n\nTa magie noire… était puissante…\n\nMais insuffisante…\n\nRepose… et laisse la place… à la vraie magie…",
                    "Les ténèbres… se dissipent…\n\nComme prévu…\n\nTu n'étais… qu'une ombre…\n\nJe suis… la flamme éternelle…",
                    "Ton essence… retourne au néant…\n\nD'où elle n'aurait… jamais dû sortir…\n\nLa Dernière Lumière… brille encore…\n\nGrâce à moi…"
                ]
            },
            tank: {
                1: [
                    "Tu as frappé… encore et encore…\n\nJ'ai tenu…\n\nComme toujours…\n\nC'est fini… pour toi…",
                    "Ma défense… était meilleure…\n\nQue ton attaque…\n\nRepose… tu t'es bien battu…\n\nMais pas assez…",
                    "Le mur… ne s'effondre jamais…\n\nTu l'as appris… à tes dépens…\n\nAdieu… gardien déchu…",
                    "J'encaisse… c'est ma force…\n\nToi… tu n'as pas encaissé…\n\nC'est ta faiblesse…\n\nRepose…",
                    "Forteresse contre ombre…\n\nLa forteresse… a gagné…\n\nComme toujours…\n\nComme… toujours…"
                ]
            }
        };

        // Choisir un dialogue aléatoire
        let bossMessage, heroMessage;

        // Cas spécial : Archer et Boss 1 (relation amoureuse)
        if (this.player.classType === 'archer' && zone === 1) {
            const randomIndex = Math.floor(Math.random() * archerBoss1DefeatRomance.length);
            bossMessage = archerBoss1DefeatRomance[randomIndex];
            heroMessage = archerBoss1DefeatHeroResponses[randomIndex];
        } else {
            // Dialogue normal
            const bossDialogues = bossDefeatMessages[zone] || ["Je… tombe…"];
            const randomBossIndex = Math.floor(Math.random() * bossDialogues.length);
            bossMessage = bossDialogues[randomBossIndex];

            const heroDialogues = heroDefeatResponses[this.player.classType]?.[zone] || ["C'est fini…"];
            const randomHeroIndex = Math.floor(Math.random() * heroDialogues.length);
            heroMessage = heroDialogues[randomHeroIndex];
        }

        // Configurer le dialogue
        this.currentBossDefeatDialogue = {
            messages: [
                { speaker: 'boss', text: bossMessage },
                { speaker: 'hero', text: heroMessage }
            ],
            currentIndex: 0,
            currentCharIndex: 0,
            typingSpeed: 30,
            isTyping: true
        };

        // Afficher l'écran de dialogue
        const bossImage = document.getElementById('dialogue-boss-image');
        const heroImage = document.getElementById('dialogue-boss-hero-image');
        const bossName = document.getElementById('boss-name');
        const heroName = document.getElementById('boss-hero-name');
        const continueBtn = document.getElementById('boss-dialogue-finish-btn');

        // Images - Boss mort (utiliser l'image de death)
        bossImage.src = `./pixel_art/boss_talk/death/boss_${zone}.png`;
        bossImage.style.filter = 'drop-shadow(0 0 20px rgba(231, 76, 60, 0.8)) grayscale(30%) brightness(0.7)';
        bossName.textContent = `Gardien de la Zone ${zone} - Vaincu`;

        // Image du héros selon sa classe et la zone
        const heroImageMap = {
            archer: `./pixel_art/heros_talk/monde${zone}/archer.png`,
            knight: `./pixel_art/heros_talk/monde${zone}/knight.png`,
            mage: `./pixel_art/heros_talk/monde${zone}/magic men.png`,
            tank: `./pixel_art/heros_talk/monde${zone}/tank.png`
        };
        heroImage.src = heroImageMap[this.player.classType];
        heroName.textContent = this.player.className;

        // Masquer le bouton au début
        continueBtn.style.display = 'none';

        // Afficher l'écran
        console.log('[DEBUG] Showing boss-dialogue screen');
        this.showScreen('boss-dialogue');
        this.state = 'boss_defeat_dialogue';
        console.log('[DEBUG] State set to boss_defeat_dialogue');

        // Démarrer l'affichage du premier message
        console.log('[DEBUG] Starting dialogue with:', this.currentBossDefeatDialogue);
        this.typeNextBossDefeatDialogueMessage();
    }

    // Taper le prochain message du dialogue de défaite
    typeNextBossDefeatDialogueMessage() {
        console.log('[DEBUG] typeNextBossDefeatDialogueMessage called');
        if (!this.currentBossDefeatDialogue) {
            console.error('[DEBUG] currentBossDefeatDialogue is null!');
            return;
        }

        const message = this.currentBossDefeatDialogue.messages[this.currentBossDefeatDialogue.currentIndex];
        console.log('[DEBUG] Current message:', message);
        if (!message) {
            console.log('[DEBUG] No message, ending dialogue');
            this.endBossDefeatDialogue();
            return;
        }

        const dialogueText = document.getElementById('boss-dialogue-text');
        const continueBtn = document.getElementById('boss-dialogue-finish-btn');
        const bossContainer = document.querySelector('.dialogue-boss');
        const heroContainers = document.querySelectorAll('.dialogue-second-hero');
        const heroContainer = heroContainers[1];
        const heroImage = document.getElementById('dialogue-boss-hero-image');

        console.log('[DEBUG] DOM elements:', {
            dialogueText: !!dialogueText,
            continueBtn: !!continueBtn,
            bossContainer: !!bossContainer,
            heroContainersLength: heroContainers.length,
            heroContainer: !!heroContainer,
            heroImage: !!heroImage
        });

        // Cacher le bouton au début du nouveau message
        continueBtn.style.display = 'none';

        if (message.speaker === 'boss') {
            if (bossContainer) bossContainer.classList.add('active');
            if (heroContainer) heroContainer.classList.remove('active');
        } else {
            if (bossContainer) bossContainer.classList.remove('active');
            if (heroContainer) heroContainer.classList.add('active');
            if (heroImage) heroImage.style.display = 'block'; // S'assurer que le héros est visible
        }

        dialogueText.textContent = '';
        this.currentBossDefeatDialogue.currentCharIndex = 0;
        this.currentBossDefeatDialogue.isTyping = true;

        this.typeBossDefeatDialogueCharacter();
    }

    // Taper un caractère du dialogue de défaite
    typeBossDefeatDialogueCharacter() {
        if (!this.currentBossDefeatDialogue || !this.currentBossDefeatDialogue.isTyping) return;

        const message = this.currentBossDefeatDialogue.messages[this.currentBossDefeatDialogue.currentIndex];
        const dialogueText = document.getElementById('boss-dialogue-text');
        const continueBtn = document.getElementById('boss-dialogue-finish-btn');

        if (this.currentBossDefeatDialogue.currentCharIndex < message.text.length) {
            dialogueText.textContent += message.text[this.currentBossDefeatDialogue.currentCharIndex];
            this.currentBossDefeatDialogue.currentCharIndex++;

            setTimeout(() => this.typeBossDefeatDialogueCharacter(), this.currentBossDefeatDialogue.typingSpeed);
        } else {
            this.currentBossDefeatDialogue.isTyping = false;

            if (this.currentBossDefeatDialogue.currentIndex < this.currentBossDefeatDialogue.messages.length - 1) {
                continueBtn.textContent = 'Continuer ➤';
            } else {
                continueBtn.textContent = 'Continuer l\'aventure ➤';
            }
            continueBtn.style.display = 'block';
        }
    }

    // Passer au message suivant du dialogue de défaite
    nextBossDefeatDialogueMessage() {
        console.log('[DEBUG] nextBossDefeatDialogueMessage called');
        if (!this.currentBossDefeatDialogue) {
            console.error('[DEBUG] currentBossDefeatDialogue is null in nextBossDefeatDialogueMessage!');
            return;
        }
        console.log('[DEBUG] isTyping:', this.currentBossDefeatDialogue.isTyping);

        if (this.currentBossDefeatDialogue.isTyping) {
            const message = this.currentBossDefeatDialogue.messages[this.currentBossDefeatDialogue.currentIndex];
            document.getElementById('boss-dialogue-text').textContent = message.text;
            this.currentBossDefeatDialogue.isTyping = false;
            this.currentBossDefeatDialogue.currentCharIndex = message.text.length;

            // Afficher le héros si c'est lui qui parle
            if (message.speaker === 'hero') {
                const heroImage = document.getElementById('dialogue-boss-hero-image');
                if (heroImage) {
                    heroImage.style.display = 'block';
                }
            }

            const continueBtn = document.getElementById('boss-dialogue-finish-btn');
            if (this.currentBossDefeatDialogue.currentIndex < this.currentBossDefeatDialogue.messages.length - 1) {
                continueBtn.textContent = 'Continuer ➤';
            } else {
                continueBtn.textContent = 'Continuer l\'aventure ➤';
            }
            continueBtn.style.display = 'block';
            return;
        }

        this.currentBossDefeatDialogue.currentIndex++;

        if (this.currentBossDefeatDialogue.currentIndex < this.currentBossDefeatDialogue.messages.length) {
            this.typeNextBossDefeatDialogueMessage();
        } else {
            this.endBossDefeatDialogue();
        }
    }

    // Terminer le dialogue de défaite du boss
    endBossDefeatDialogue() {
        console.log('[DEBUG] endBossDefeatDialogue called');

        // Sauvegarder la zone du boss avant de le supprimer
        let defeatedBossZone = null;

        // Donner l'XP du boss APRÈS le dialogue
        if (this.defeatedBoss) {
            defeatedBossZone = this.defeatedBoss.zone;
            console.log('[DEBUG] Giving XP and random perk for boss defeat');

            // 1. Donner un niveau complet d'XP
            this.player.xp = 0;
            this.player.level++;
            this.player.xpToNext = Math.floor(this.player.xpToNext * 1.5);
            this.addFloatingText(this.player.x, this.player.y, 'LEVEL UP!', '#ffd93d');
            this.addLog('🎉 Niveau augmenté! Niveau ' + this.player.level, 'info');
            console.log('[DEBUG] Level up! New level:', this.player.level);

            // 2. Sélectionner et donner un perk aléatoire
            const availablePerks = [];
            for (const key in CONFIG.PERKS) {
                const perk = CONFIG.PERKS[key];
                const currentLevel = this.player.perkLevels[perk.id] || 0;

                // Vérifier si le perk peut être amélioré
                if (currentLevel < perk.maxLevel) {
                    // Vérifier la restriction de classe
                    if (!perk.classRestriction || perk.classRestriction.includes(this.player.classType)) {
                        availablePerks.push(perk);
                    }
                }
            }

            // Sélectionner un perk aléatoire parmi ceux disponibles
            if (availablePerks.length > 0) {
                const randomPerk = availablePerks[Math.floor(Math.random() * availablePerks.length)];
                this.player.addPerk(randomPerk.id);
                this.addFloatingText(this.player.x, this.player.y, `+${randomPerk.name}!`, '#ff69b4');
                this.addLog(`🎁 Récompense du boss: ${randomPerk.name}!`, 'info');
                console.log('[DEBUG] Random perk given:', randomPerk.name);
            } else {
                console.log('[DEBUG] No available perks to give');
            }

            // Nettoyer les effets spécifiques du boss de forêt
            if (this.defeatedBoss.bossType === 'forest') {
                if (this.defeatedBoss.activeVines) {
                    this.defeatedBoss.activeVines = [];
                }
            }

            // Nettoyer les effets spécifiques du boss des cavernes
            if (this.defeatedBoss.bossType === 'cavern') {
                if (this.defeatedBoss.activeStalactites) {
                    this.defeatedBoss.activeStalactites = [];
                }
                if (this.defeatedBoss.darkSpheres) {
                    this.defeatedBoss.darkSpheres = [];
                }
                this.defeatedBoss.isDark = false;
                console.log('[DEBUG] Cleaned cavern boss effects');
            }

            // Nettoyer les effets spécifiques du boss du volcan
            if (this.defeatedBoss.bossType === 'volcano') {
                if (this.defeatedBoss.activeFireballs) {
                    this.defeatedBoss.activeFireballs = [];
                }
                if (this.defeatedBoss.fireWalls) {
                    this.defeatedBoss.fireWalls = [];
                }
                if (this.defeatedBoss.lavaTrail) {
                    this.defeatedBoss.lavaTrail = [];
                }
                console.log('[DEBUG] Cleaned volcano boss effects');
            }

            // Nettoyer toutes les particules et taches de sang
            console.log('[DEBUG] Cleaning particles and blood stains');
            this.particles = [];
            this.bloodStains = [];

            // Réinitialiser la référence du boss actuel
            this.currentBoss = null;

            // Supprimer le boss
            this.enemies = this.enemies.filter(e => e !== this.defeatedBoss);
            this.defeatedBoss = null;
        }

        // Vérifier si le boss 5 a été vaincu (utiliser la variable sauvegardée)
        if (defeatedBossZone === 5) {
            this.victory();
            return;
        }

        this.currentBossDefeatDialogue = null;
        this.state = 'playing';
        this.showScreen('game-screen');

        // Réinitialiser le filtre de l'image
        const bossImage = document.getElementById('dialogue-boss-image');
        bossImage.style.filter = '';

        // Revenir à la musique de zone après la défaite du boss
        const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);
        this.playMusic('zone', zone);

        this.addLog('🏆 BOSS VAINCU!', 'heal');
    }

    // Vérifier les collisions des anneaux magiques avec les ennemis
    updateMagicRingsCollision() {
        if (!this.player.perkEffects.ringsActive) return;

        const level = this.player.perkLevels.magic_rings;
        if (level <= 0) return;

        const numRings = Math.min(level, 5); // 1 à 5 anneaux selon le niveau
        const ringRange = 3; // 3 cases de distance
        const ringDamage = 15;
        const ringHitRadius = 0.5; // Rayon de collision de la boule (0.5 case = taille du sprite)

        // Pour chaque anneau
        for (let i = 0; i < numRings; i++) {
            const angle = this.player.perkEffects.ringsRotation + (i * Math.PI * 2 / numRings);
            const ringX = this.player.x + Math.cos(angle) * ringRange;
            const ringY = this.player.y + Math.sin(angle) * ringRange;

            // Vérifier la collision avec chaque ennemi
            for (const enemy of this.enemies) {
                // Calculer la distance entre le centre de l'anneau et le centre de l'ennemi
                const enemyCenterX = enemy.x + 0.5;
                const enemyCenterY = enemy.y + 0.5;
                const distance = Math.hypot(enemyCenterX - ringX, enemyCenterY - ringY);

                // Si la boule touche l'ennemi (collision précise basée sur les sprites)
                if (distance < ringHitRadius + 0.5) { // 0.5 = demi-taille de l'ennemi
                    // Vérifier si l'ennemi n'a pas déjà été touché pendant cette activation
                    const enemyKey = `${enemy.x}_${enemy.y}_${i}`;
                    if (!this.player.perkEffects.ringsHitEnemies.has(enemyKey)) {
                        this.player.perkEffects.ringsHitEnemies.add(enemyKey);

                        // Infliger les dégâts
                        const killed = enemy.takeDamage(ringDamage);
                        // Compter les dégâts infligés par les anneaux
                        if (this.player) this.player.totalDamageDealt += ringDamage;
                        this.addFloatingText(enemy.x, enemy.y, `-${ringDamage} 🔮`, '#9b59b6');

                        if (killed) {
                            // Soins à la mort pour Chevalier et Tank
                            if (this.player && (this.player.classType === 'knight' || this.player.classType === 'tank')) {
                                const healAmount = Math.min(enemy.maxHealth, this.player.maxHealth - this.player.health);
                                if (healAmount > 0) {
                                    this.player.health = Math.min(this.player.maxHealth, this.player.health + healAmount);
                                    this.addFloatingText(this.player.x, this.player.y, `+${healAmount} ❤`, '#00ff00');
                                }
                            }

                            this.enemies = this.enemies.filter(e => e !== enemy);
                            this.player.gainXP(enemy.xpValue);
                            this.addFloatingText(this.player.x, this.player.y, `+${enemy.xpValue} XP`, '#ffd93d');
                        }

                        // Pour les anneaux permanents, réinitialiser après un court délai
                        if (this.player.perkEffects.ringsPermanent) {
                            setTimeout(() => {
                                this.player.perkEffects.ringsHitEnemies.delete(enemyKey);
                            }, 500); // 0.5 seconde avant de pouvoir retoucher le même ennemi
                        }
                    }
                }
            }
        }
    }

    updateEnemies(deltaTime) {
        for (const enemy of this.enemies) {
            enemy.update(deltaTime);
            enemy.updateStatusEffects(deltaTime); // Mettre à jour les effets de status (brûlure, etc.)

            // Trouver la salle du joueur
            const playerRoom = this.findRoomAt(this.player.x, this.player.y);
            const enemyRoom = this.findRoomAt(enemy.x, enemy.y);
            
            // Vérifier si l'ennemi voit le joueur (même salle)
            if (playerRoom && enemyRoom && playerRoom === enemyRoom) {
                enemy.isAggro = true;
            }
            
            // Distance au joueur
            const distance = Math.hypot(
                enemy.x - this.player.x,
                enemy.y - this.player.y
            );
            
            // Mouvement de l'ennemi
            enemy.moveTimer += deltaTime;
            if (enemy.moveTimer >= enemy.moveInterval) {
                enemy.moveTimer = 0;
                
                // Les ennemis à distance s'arrêtent quand le joueur est à portée
                const inRange = enemy.combatType === 'ranged' && 
                                distance <= enemy.range && 
                                distance > 1 &&
                                this.hasLineOfSight(enemy.x, enemy.y, this.player.x, this.player.y, false);
                
                if (!inRange) {
                    if (enemy.isAggro) {
                        // Poursuivre le joueur
                        this.moveEnemyTowardsPlayer(enemy);
                    } else {
                        // Mouvement aléatoire dans la salle
                        this.moveEnemyRandomly(enemy);
                    }
                }
            }
            
            // Attaque
            if (enemy.canAttack()) {
                // Attaque corps à corps (melee, tank, small)
                if ((enemy.combatType === 'melee' || enemy.combatType === 'tank' || enemy.combatType === 'small') && distance <= 1) {
                    const damageValue = enemy.attack();
                    const enemyTypeLabel = enemy.combatType === 'tank' ? 'tank' : (enemy.combatType === 'small' ? 'rapide' : 'mêlée');

                    // Jouer le son d'attaque corps à corps
                    this.playSound('swordHit');

                    // Animation de coup de mêlée
                    const meleeAnim = new MeleeAnimation(
                        enemy.x, enemy.y,
                        this.player.x, this.player.y,
                        'knight'
                    );

                    // Appliquer les dégâts quand l'animation touche
                    meleeAnim.onComplete = () => {
                        const killed = this.player.takeDamage(damageValue);
                        // Afficher les dégâts au-dessus du joueur
                        this.addFloatingText(this.player.x, this.player.y, `-${damageValue}`, '#ff4757');
                        if (killed) this.gameOver();
                    };

                    this.animations.push(meleeAnim);
                } else if (enemy.combatType === 'ranged' && distance <= enemy.range && distance > 1) {
                    // Attaque à distance - vérifier la ligne de vue
                    if (this.hasLineOfSight(enemy.x, enemy.y, this.player.x, this.player.y, false)) {
                        const damageValue = enemy.attack();

                        // Jouer le son de sort magique
                        this.playSound('magicSpell');

                        // Animation de projectile ennemi
                        const projectileAnim = new ProjectileAnimation(
                            enemy.x, enemy.y,
                            this.player.x, this.player.y,
                            'magic',
                            8
                        );

                        // Appliquer les dégâts quand le projectile touche
                        projectileAnim.onComplete = () => {
                            const killed = this.player.takeDamage(damageValue);
                            // Afficher les dégâts au-dessus du joueur
                            this.addFloatingText(this.player.x, this.player.y, `-${damageValue}`, '#ff4757');
                            if (killed) this.gameOver();
                        };

                        this.animations.push(projectileAnim);
                    }
                }
            }
        }
    }
    
    findRoomAt(x, y) {
        for (const room of this.dungeon.rooms) {
            if (x >= room.x && x < room.x + room.width &&
                y >= room.y && y < room.y + room.height) {
                return room;
            }
        }
        return null;
    }
    
    moveEnemyTowardsPlayer(enemy) {
        const dx = Math.sign(this.player.x - enemy.x);
        const dy = Math.sign(this.player.y - enemy.y);
        
        // Essayer de se déplacer vers le joueur
        const moves = [];
        if (dx !== 0) moves.push({ x: enemy.x + dx, y: enemy.y });
        if (dy !== 0) moves.push({ x: enemy.x, y: enemy.y + dy });
        
        for (const move of moves) {
            if (this.canEnemyMoveTo(move.x, move.y, enemy)) {
                enemy.x = move.x;
                enemy.y = move.y;
                return;
            }
        }
    }
    
    moveEnemyRandomly(enemy) {
        const directions = [
            { dx: 0, dy: -1 },
            { dx: 0, dy: 1 },
            { dx: -1, dy: 0 },
            { dx: 1, dy: 0 }
        ];
        
        // Mélanger les directions
        for (let i = directions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [directions[i], directions[j]] = [directions[j], directions[i]];
        }
        
        for (const dir of directions) {
            const newX = enemy.x + dir.dx;
            const newY = enemy.y + dir.dy;
            
            // Rester dans la même salle
            if (enemy.currentRoom) {
                const room = enemy.currentRoom;
                if (newX >= room.x && newX < room.x + room.width &&
                    newY >= room.y && newY < room.y + room.height) {
                    if (this.canEnemyMoveTo(newX, newY, enemy)) {
                        enemy.x = newX;
                        enemy.y = newY;
                        return;
                    }
                }
            }
        }
    }
    
    canEnemyMoveTo(x, y, currentEnemy) {
        if (x < 0 || x >= CONFIG.GRID_SIZE || y < 0 || y >= CONFIG.GRID_SIZE) {
            return false;
        }
        
        if (this.dungeon.grid[y][x] === 1) {
            return false;
        }
        
        // Ne pas marcher sur le joueur
        if (x === this.player.x && y === this.player.y) {
            return false;
        }
        
        // Ne pas marcher sur d'autres ennemis
        for (const enemy of this.enemies) {
            if (enemy !== currentEnemy && enemy.x === x && enemy.y === y) {
                return false;
            }
        }
        
        return true;
    }
    
    nextLevel() {
        this.currentLevel++;

        // Réinitialiser le boss
        this.currentBoss = null;
        this.bossTransitioning = false;
        this.bossTransitionBoss = null;

        // Nettoyer tous les effets visuels du niveau précédent
        this.particles = [];
        this.bloodStains = [];
        this.animations = [];  // Nettoyer aussi les animations (projectiles, etc.)

        if (this.currentLevel > CONFIG.TOTAL_LEVELS) {
            this.victory();
            return;
        }

        this.addLog(`Niveau ${this.currentLevel}!`, 'info');

        // Générer nouveau donjon
        this.generateLevel();
        
        // Déplacer le joueur au spawn
        const spawn = this.dungeon.findSpawnPoint();
        this.player.x = spawn.x;
        this.player.y = spawn.y;
        
        // Spawner nouveaux ennemis
        this.spawnEnemies();
        
        // Vérifier si on entre dans une nouvelle zone
        const currentZone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);
        if (currentZone !== this.dialogueState.lastZone) {
            this.dialogueState.lastZone = currentZone;
            // Jouer le son de transition de monde
            this.playSound('newWorld');
            // Afficher le dialogue de la nouvelle zone
            this.showZoneDialogue(currentZone, this.player.classType);
        } else {
            this.updateHUD();
        }

        // Changer la musique si ce n'est pas un niveau de boss
        const levelInZone = ((this.currentLevel - 1) % CONFIG.LEVELS_PER_ZONE) + 1;
        const isBossLevel = levelInZone === CONFIG.LEVELS_PER_ZONE;
        if (!isBossLevel) {
            // Pour les niveaux normaux, vérifier si on doit changer de musique
            const musicZone = this.getMusicZoneForLevel(this.currentLevel);
            // Ne changer la musique que si ce n'est pas déjà celle qui joue
            const targetMusic = this.sounds.zoneMusic[musicZone];
            if (!this.currentMusic || this.currentMusic.src !== targetMusic.src) {
                this.playMusic('zone', currentZone);
            }
        }
    }
    
    gameOver() {
        console.log('🎮🎮🎮 GAME OVER APPELÉ! 🎮🎮🎮');
        console.log('   HP du joueur:', this.player.health);
        console.log('   État du jeu:', this.state);

        // Arrêter la musique actuelle et jouer le son de game over
        this.stopMusic();
        this.playSound('gameOver');

        this.state = 'gameover';
        this.showScreen('game-over');

        document.getElementById('final-stats').innerHTML = `
            <p>Niveau atteint: ${this.currentLevel}</p>
            <p>Niveau du personnage: ${this.player.level}</p>
            <p>Dégâts totaux infligés: ${this.player.totalDamageDealt}</p>
            <p>Vie max: ${this.player.maxHealth}</p>
        `;
    }
    
    victory() {
        // Arrêter la musique actuelle et jouer le son de victoire
        this.stopMusic();
        this.playSound('victory');

        this.state = 'victory';
        this.showScreen('victory');
        
        document.getElementById('victory-stats').innerHTML = `
            <p>Niveau du personnage: ${this.player.level}</p>
            <p>Dégâts totaux infligés: ${this.player.totalDamageDealt}</p>
            <p>Vie max: ${this.player.maxHealth}</p>
        `;
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');

        // Gérer les musiques en fonction de l'écran
        if (screenId === 'main-menu' || screenId === 'lore-screen' || screenId === 'lore-screen-2' || screenId === 'credits-screen') {
            // Jouer la musique de menu si elle n'est pas déjà en cours
            if (!this.currentMusic || this.currentMusic.src !== this.sounds.menuMusic.src) {
                this.playMusic('menu');
            }
        } else if (screenId === 'game-screen') {
            // Jouer la musique de zone ou de boss en fonction de l'état du jeu
            const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);
            if (this.currentBoss && !this.isBossMusic) {
                this.playMusic('boss', zone);
            } else if (!this.isBossMusic) {
                const musicZone = this.getMusicZoneForLevel(this.currentLevel);
                const targetMusic = this.sounds.zoneMusic[musicZone];
                if (!this.currentMusic || this.currentMusic.src !== targetMusic.src) {
                    this.playMusic('zone', zone);
                }
            }
        }
    }

    // Afficher l'écran de sélection de perk
    showPerkChoice() {
        // Pause le jeu
        this.state = 'perk-selection';

        // Mettre à jour le niveau affiché
        document.getElementById('new-level').textContent = this.player.level;

        // Générer 3 perks aléatoires
        const choices = this.generatePerkChoices(3);

        // Afficher les choix
        const container = document.getElementById('perk-choices');
        container.innerHTML = '';

        choices.forEach(perk => {
            const card = this.createPerkCard(perk);
            container.appendChild(card);
        });

        this.showScreen('perk-selection');
    }

    // Générer des choix de perks basés sur la rareté
    generatePerkChoices(count) {
        const availablePerks = [];

        // Filtrer les perks disponibles
        for (const key in CONFIG.PERKS) {
            const perk = CONFIG.PERKS[key];

            // Vérifier les restrictions de classe
            if (perk.classRestriction && !perk.classRestriction.includes(this.player.classType)) {
                continue;
            }

            // Vérifier si le perk n'est pas au niveau max
            const currentLevel = this.player.perkLevels[perk.id] || 0;
            if (currentLevel >= perk.maxLevel) {
                continue;
            }

            // Vérifier la seconde vie (unique)
            if (perk.id === 'second_life' && this.player.perkLevels[perk.id]) {
                continue;
            }

            availablePerks.push(perk);
        }

        // Générer les choix en fonction de la rareté
        const choices = [];
        for (let i = 0; i < count && availablePerks.length > 0; i++) {
            const perk = this.selectPerkByRarity(availablePerks);
            choices.push(perk);

            // Retirer le perk sélectionné des disponibles
            const index = availablePerks.indexOf(perk);
            availablePerks.splice(index, 1);
        }

        return choices;
    }

    // Sélectionner un perk en fonction de sa rareté
    selectPerkByRarity(perks) {
        const roll = Math.random();
        let cumulativeChance = 0;

        // Trier par rareté (Légendaire > Epic > Rare > Commun)
        const rarityOrder = ['LEGENDARY', 'EPIC', 'RARE', 'COMMON'];

        for (const rarity of rarityOrder) {
            const rarityPerks = perks.filter(p => p.rarity === rarity);
            if (rarityPerks.length === 0) continue;

            cumulativeChance += CONFIG.RARITY[rarity].chance;

            if (roll < cumulativeChance) {
                return rarityPerks[Math.floor(Math.random() * rarityPerks.length)];
            }
        }

        // Fallback: retourner un perk aléatoire
        return perks[Math.floor(Math.random() * perks.length)];
    }

    // Créer une carte de perk
    createPerkCard(perk) {
        const card = document.createElement('div');
        card.className = `perk-card rarity-${perk.rarity.toLowerCase()}`;

        const currentLevel = this.player.perkLevels[perk.id] || 0;
        const nextLevel = currentLevel + 1;

        const icons = {
            'double_shot': '🏹🏹',
            'double_strike': '⚔️⚔️',
            'attack_speed': '⚡',
            'damage_boost': '💪',
            'health_boost': '❤️',
            'shield': '🛡️',
            'critical': '💥',
            'knockback': '👊',
            'regeneration': '💚',
            'fireball': '🔥',
            'second_life': '💛',
            'magic_rings': '🔮'
        };

        card.innerHTML = `
            <div class="perk-icon">${icons[perk.id] || '✨'}</div>
            <div class="perk-name">${perk.name}</div>
            <div class="perk-rarity rarity-${perk.rarity.toLowerCase()}">${CONFIG.RARITY[perk.rarity].name}</div>
            <div class="perk-description">${perk.description}</div>
            <div class="perk-level">Niveau ${nextLevel}/${perk.maxLevel}</div>
        `;

        card.addEventListener('click', () => {
            this.playSound('click');
            this.selectPerk(perk.id);
        });

        return card;
    }

    // Sélectionner un perk
    selectPerk(perkId) {
        this.player.addPerk(perkId);

        // Reprendre le jeu
        this.state = 'playing';
        this.showScreen('game-screen');
    }

    updateHUD() {
        const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);
        const zoneName = CONFIG.ZONES[zone].name;
        
        document.getElementById('player-class').textContent = this.player.className;
        document.getElementById('level-display').textContent = `Niveau ${this.currentLevel}`;
        document.getElementById('zone-display').textContent = `Zone ${zone}: ${zoneName}`;
        
        // S'assurer que la santé ne descend pas en-dessous de 0 pour l'affichage
        const displayHealth = Math.max(0, this.player.health);
        const healthPercent = (displayHealth / this.player.maxHealth) * 100;
        document.getElementById('player-health').style.width = healthPercent + '%';
        document.getElementById('health-text').textContent = 
            `${displayHealth}/${this.player.maxHealth}`;
        
        const xpPercent = (this.player.xp / this.player.xpToNext) * 100;
        document.getElementById('player-xp').style.width = xpPercent + '%';
        document.getElementById('xp-text').textContent = 
            `${this.player.xp}/${this.player.xpToNext}`;
        
        // Mettre à jour les améliorations
        const upgradesList = document.getElementById('upgrades-list');
        upgradesList.innerHTML = '';
        
        const upgradeNames = {
            damage: '⚔️ Dégâts',
            health: '❤️ Vie',
            speed: '⚡ Vitesse',
            range: '🎯 Portée'
        };
        
        // Afficher les upgrades actifs (sauf damage et health qui sont gérés par les perks)
        for (const [key, value] of Object.entries(this.player.upgrades)) {
            // Ignorer damage et health car ils sont gérés par les perks damage_boost et health_boost
            if (value > 0 && key !== 'damage' && key !== 'health') {
                let bonusText = '';

                // Calculer et afficher le bonus selon le type
                if (key === 'speed') {
                    // -0.1s par niveau
                    const totalBonus = -0.1 * value;
                    bonusText = `${totalBonus}s cooldown`;
                } else if (key === 'range') {
                    // +1 case par niveau
                    bonusText = `+${value} case(s)`;
                }

                const div = document.createElement('div');
                div.className = 'upgrade-item';
                div.setAttribute('data-tooltip', bonusText);

                div.innerHTML = `
                    <span>${upgradeNames[key]}</span>
                    <span class="upgrade-level">Niv. ${value}</span>
                `;
                upgradesList.appendChild(div);
            }
        }

        // Afficher les perks actifs
        if (this.player.perks && Array.isArray(this.player.perks)) {
            for (const perk of this.player.perks) {
                const div = document.createElement('div');
                div.className = 'upgrade-item perk-item';

                // Appliquer une couleur spécifique pour Force et Vitalité
                if (perk.id === 'damage_boost') {
                    div.style.borderColor = '#2ecc71'; // Vert pour Force
                } else if (perk.id === 'health_boost') {
                    div.style.borderColor = '#3498db'; // Bleu pour Vitalité
                } else {
                    div.style.borderColor = CONFIG.RARITY[perk.rarity].color;
                }

                let perkText = `${perk.icon} ${perk.name}`;
                if (perk.level > 1) {
                    perkText += ` (Niv. ${perk.level})`;
                }

                div.textContent = perkText;
                upgradesList.appendChild(div);
            }
        }

        // Afficher le statut du shield si actif
        if (this.player.perkEffects.shieldActive) {
            const shieldDiv = document.createElement('div');
            shieldDiv.className = 'upgrade-item shield-status';
            shieldDiv.style.color = '#3498db';
            shieldDiv.textContent = '🛡️ BOUCLIER ACTIF';
            upgradesList.appendChild(shieldDiv);
        }

        // Mettre à jour la barre de vie du boss
        const bossHealthBar = document.getElementById('boss-health-bar');
        if (this.currentBoss && this.currentBoss.health > 0) {
            // Afficher la barre de vie du boss
            bossHealthBar.style.display = 'block';

            // Déterminer le nom du boss selon la zone
            const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);
            const bossNames = {
                1: '🌲 Sylvanus l\'Ancien',
                2: '⛰️ Gorath le Ténébreux',
                3: '🌋 Ignis le Calciné',
                4: '🌊 Abyssia la Dévorante',
                5: '🤖 NEXUS-Omega'
            };

            document.getElementById('boss-name-label').textContent = bossNames[zone] || 'Boss';

            // Mettre à jour la barre de vie
            const bossHealthPercent = (this.currentBoss.health / this.currentBoss.maxHealth) * 100;
            document.getElementById('boss-health-fill').style.width = bossHealthPercent + '%';
            document.getElementById('boss-health-text').textContent =
                `${Math.max(0, this.currentBoss.health)}/${this.currentBoss.maxHealth}`;
        } else {
            // Cacher la barre de vie du boss
            bossHealthBar.style.display = 'none';
        }
    }
    
    addLog(message, type = 'info') {
        const log = document.getElementById('combat-log');
        const p = document.createElement('p');
        p.className = type;
        p.textContent = '> ' + message;
        log.appendChild(p);
        log.scrollTop = log.scrollHeight;
        
        // Limiter à 50 messages
        while (log.children.length > 50) {
            log.removeChild(log.firstChild);
        }
    }
    
    // ===== MÉTHODES DE GESTION DU BOSS AVANCÉ =====
    
    // Pause du jeu pour la transition de phase du boss
    pauseGameForBossTransition(boss) {
        this.bossTransitioning = true;
        this.bossTransitionBoss = boss;
        this.addLog('⚠️ LE BOSS ENTRE EN RAGE!', 'damage');
        
        // Afficher un dialogue de transition
        this.showBossRageDialogue(boss);
    }
    
    // Reprendre le jeu après la transition
    resumeGameAfterBossTransition(boss) {
        this.bossTransitioning = false;
        this.bossTransitionBoss = null;
        this.addLog('🔥 Phase 2: Le boss utilise maintenant des lianes!', 'damage');
    }

    // Dialogue backstory du boss aquatique (Phase 3)
    pauseGameForBossBackstory(boss) {
        this.bossTransitioning = true;
        this.bossTransitionBoss = boss;
        this.addLog('💧 Le boss semble vouloir parler...', 'info');

        // Afficher un dialogue de backstory
        this.showBossBackstoryDialogue(boss);
    }

    // Dialogue backstory - Conversation de 5 bulles entre héros et boss
    showBossBackstoryDialogue(boss) {
        const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);

        // Créer un dialogue à 5 messages alternés (boss -> héros -> boss -> héros -> boss)
        const messages = [
            {
                speaker: 'boss',
                text: "*Le boss s'arrête, le regard perdu dans les profondeurs*\n\nAttends...\n\nPourquoi... pourquoi continues-tu à te battre?\n\nJ'ai été autrefois comme toi... une aventuriere pleine d'espoir...\n\nMais ces profondeurs... elles m'ont pris tout ce que j'avais..."
            },
            {
                speaker: 'hero',
                text: "Que s'est-il passé?\n\nComment es-tu devenu... ça?\n\nTu n'es plus humaine..."
            },
            {
                speaker: 'boss',
                text: "*Une larme coule sur son visage déformé*\n\nJ'étais venu ici... chercher un remède pour ma fille...\n\nElle était malade... mourante...\n\nOn m'avait dit qu'au fond de ces eaux maudites...\n\n...se trouvait une perle miraculeuse.\n\nMais quand je l'ai trouvée... c'était un piège.\n\nLes eaux m'ont corrompu... transformé...\n\nEt quand je suis remonté... des décennies s'étaient écoulées.\n\nMa fille... elle était déjà morte depuis longtemps..."
            },
            {
                speaker: 'hero',
                text: "*Baisse son arme*\n\nJe... je suis désolé...\n\nMais pourquoi attaquer les autres aventuriers?\n\nPourquoi garder ces profondeurs?"
            },
            {
                speaker: 'boss',
                text: "PARCE QUE PERSONNE NE DOIT SUBIR CE QUE J'AI SUBI!\n\n*Ses yeux brillent d'une rage folle*\n\nSi je te laisse passer... tu finiras comme moi!\n\nCES PROFONDEURS DÉVORENT LES ÂMES!\n\nJe préfère t'arrêter ici... même si je dois te tuer...\n\n...plutôt que de te voir devenir un monstre!\n\n*Des bulles explosives commencent à apparaître partout*\n\nPARDONNE-MOI... MAIS TU NE PASSERAS PAS!"
            }
        ];

        // Utiliser le système de dialogue existant
        this.currentBossDialogue = {
            messages: messages,
            currentIndex: 0,
            currentCharIndex: 0,
            typingSpeed: 20,
            isTyping: false,
            isRageDialogue: true, // Pour afficher "Continuer le combat" à la fin
            isBackstoryDialogue: true
        };

        // Afficher l'écran de dialogue
        const bossImage = document.getElementById('dialogue-boss-image');
        const heroImage = document.getElementById('dialogue-boss-hero-image');
        const bossName = document.getElementById('boss-name');
        const heroName = document.getElementById('boss-hero-name');
        const continueBtn = document.getElementById('boss-dialogue-finish-btn');

        // Boss 4 Phase 3 backstory - utiliser l'image de phase 3
        bossImage.src = `./pixel_art/boss_talk/phase_3/boss_${zone}.png`;
        bossName.textContent = "💧 Gardien des Profondeurs 💧";
        heroImage.style.display = 'block'; // Afficher le héros pour la conversation

        // Image du héros selon sa classe et la zone
        const heroImageMap = {
            archer: `./pixel_art/heros_talk/monde${zone}/archer.png`,
            knight: `./pixel_art/heros_talk/monde${zone}/knight.png`,
            mage: `./pixel_art/heros_talk/monde${zone}/magic men.png`,
            tank: `./pixel_art/heros_talk/monde${zone}/tank.png`
        };
        heroImage.src = heroImageMap[this.player.classType];
        heroName.textContent = this.player.className;
        continueBtn.style.display = 'none';

        this.showScreen('boss-dialogue');
        this.state = 'boss_backstory_dialogue';

        this.typeNextBossDialogueMessage();
    }

    // Dialogue de rage du boss
    showBossRageDialogue(boss) {
        const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);

        // Déterminer quel message afficher selon la phase du boss
        let message;
        let title = "⚠️ GARDIEN EN RAGE ⚠️";

        if (boss.bossType === 'forest') {
            message = "RAAAAAAH!!!\n\n*L'écran tremble*\n\nVous pensez pouvoir me vaincre?!\n\nVous allez PÉRIR dans mes lianes!\n\nLA FORÊT VOUS ENGLOUTIRA!";
        } else if (boss.bossType === 'cavern') {
            // Dialogues différents selon la phase
            if (boss.phase === 2) {
                message = "Hahaha...\n\nVous croyez vraiment... avoir une chance?\n\nJe règne sur ces ténèbres... depuis des millénaires!\n\nLES OMBRES VONT VOUS DÉVORER!\n\n*L'obscurité envahit la caverne*";
                title = "💀 GARDIEN DES TÉNÈBRES 💀";
            } else if (boss.phase === 3) {
                message = "IMPOSSIBLE!!!\n\nComment... un mortel... peut-il...\n\nPEU IMPORTE!\n\nMES SPHÈRES DE MORT... VONT VOUS ANÉANTIR!\n\nVOUS NE SORTIREZ PAS VIVANT D'ICI!\n\n*Des sphères noires apparaissent*";
                title = "☠️ GARDIEN DÉSESPÉRÉ ☠️";
            }
        } else if (boss.bossType === 'volcano') {
            // Dialogues différents selon la phase
            if (boss.phase === 2) {
                message = "ASSEZ!!!\n\nVous osez défier... LE FEU ÉTERNEL?!\n\nMES FLAMMES... VONT CONSUMER VOTRE ÂME!\n\nLES MURS DE FEU... SERONT VOTRE TOMBEAU!\n\n*Des murs de feu surgissent du sol*";
                title = "🔥 GARDIEN DES FLAMMES 🔥";
            } else if (boss.phase === 3) {
                message = "GRAAAHHH!!!\n\nJE SUIS... LA COLÈRE DU VOLCAN!\n\nLA LAVE... LA DESTRUCTION... LE CHAOS!\n\nVOUS BRÛLEREZ... AVEC TOUT LE RESTE!\n\n*Le boss devient fou de rage*";
                title = "🌋 RAGE VOLCANIQUE 🌋";
            }
        } else if (boss.bossType === 'aquatic') {
            // Phase 2 uniquement (phase 3 est le dialogue backstory)
            if (boss.phase === 2) {
                message = "Vous... vous êtes fort...\n\nMais ce n'est... que le début!\n\nCES PROFONDEURS... RECÈLENT DES DANGERS...\n\nQUE VOUS NE POUVEZ IMAGINER!\n\n*Des bulles montent du sol*\n\nLES EAUX... VONT VOUS ENGLOUTIR!";
                title = "💧 GARDIEN DES PROFONDEURS 💧";
            }
        } else {
            message = "VOUS ALLEZ PAYER!!!";
        }

        // Utiliser le système de dialogue existant avec effets spéciaux
        this.currentBossDialogue = {
            messages: [{ speaker: 'boss', text: message }],
            currentIndex: 0,
            currentCharIndex: 0,
            typingSpeed: 20,
            isTyping: false,
            isRageDialogue: true
        };

        // Afficher l'écran de dialogue
        const bossImage = document.getElementById('dialogue-boss-image');
        const heroImage = document.getElementById('dialogue-boss-hero-image');
        const bossName = document.getElementById('boss-name');
        const continueBtn = document.getElementById('boss-dialogue-finish-btn');

        // Utiliser l'image de la phase actuelle du boss
        bossImage.src = `./pixel_art/boss_talk/phase_${boss.phase}/boss_${zone}.png`;
        bossName.textContent = title;
        heroImage.style.display = 'none'; // Cacher le héros pour le dialogue de rage
        continueBtn.style.display = 'none';

        this.showScreen('boss-dialogue');
        this.state = 'boss_rage_dialogue';

        this.typeNextBossDialogueMessage();
    }

    // Rendu des effets de boss (aura, lianes, secousse, stalactites, obscurité, sphères)
    renderBossEffects(ctx, camera, cellSize) {
        if (!this.currentBoss) return;

        const boss = this.currentBoss;

        // Effets du boss de la Forêt (Zone 1)
        if (boss.bossType === 'forest') {
            // Rendu de l'aura de rage
            if (boss.isEnraged) {
                const screenX = (boss.x - camera.x) * cellSize + cellSize / 2;
                const screenY = (boss.y - camera.y) * cellSize + cellSize / 2;
                boss.renderRageAura(ctx, screenX, screenY, cellSize);
            }

            // Rendu des lianes
            if (boss.activeVines && boss.activeVines.length > 0) {
                boss.renderVines(ctx, camera, cellSize);
            }

            // Appliquer la secousse d'écran
            if (boss.screenShakeIntensity > 0) {
                const shakeX = (Math.random() - 0.5) * boss.screenShakeIntensity;
                const shakeY = (Math.random() - 0.5) * boss.screenShakeIntensity;
                ctx.translate(shakeX, shakeY);
            }

            // Flash blanc
            if (boss.flashWhiteIntensity > 0) {
                ctx.fillStyle = `rgba(255, 255, 255, ${boss.flashWhiteIntensity})`;
                ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            }
        }

        // Effets du boss des Cavernes (Zone 2)
        if (boss.bossType === 'cavern') {
            // Rendu de l'obscurité
            if (boss.isDark) {
                ctx.save();
                ctx.fillStyle = `rgba(0, 0, 0, 0.85)`;
                ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

                // Cercle de lumière autour du joueur
                if (this.player) {
                    const playerScreenX = (this.player.x - camera.x) * cellSize + cellSize / 2;
                    const playerScreenY = (this.player.y - camera.y) * cellSize + cellSize / 2;

                    const gradient = ctx.createRadialGradient(
                        playerScreenX, playerScreenY, 0,
                        playerScreenX, playerScreenY, cellSize * 3
                    );
                    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
                    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.85)');

                    ctx.globalCompositeOperation = 'destination-out';
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                    ctx.globalCompositeOperation = 'source-over';
                }
                ctx.restore();
            }

            // Rendu des stalactites
            if (boss.activeStalactites && boss.activeStalactites.length > 0) {
                boss.renderStalactites(ctx, camera, cellSize);
            }

            // Rendu des sphères noires
            if (boss.darkSpheres && boss.darkSpheres.length > 0) {
                boss.renderDarkSpheres(ctx, camera, cellSize);
            }

            // Rendu de l'aura de rage
            if (boss.isEnraged) {
                const screenX = (boss.x - camera.x) * cellSize + cellSize / 2;
                const screenY = (boss.y - camera.y) * cellSize + cellSize / 2;
                boss.rageAuraRadius = 80 + Math.sin(Date.now() / 200) * 10;
                boss.rageAuraOpacity = 0.3 + Math.sin(Date.now() / 300) * 0.1;
                boss.renderRageAura(ctx, screenX, screenY, cellSize);
            }
        }

        // Effets du boss du Volcan (Zone 3)
        if (boss.bossType === 'volcano') {
            // Rendu de la lave au sol
            if (boss.lavaTrail && boss.lavaTrail.length > 0) {
                boss.renderLava(ctx, camera, cellSize);
            }

            // Rendu des murs de feu
            if (boss.fireWalls && boss.fireWalls.length > 0) {
                boss.renderFireWalls(ctx, camera, cellSize);
            }

            // Rendu des boules de feu
            if (boss.activeFireballs && boss.activeFireballs.length > 0) {
                boss.renderFireballs(ctx, camera, cellSize);
            }

            // Rendu de l'aura de rage
            if (boss.isEnraged) {
                const screenX = (boss.x - camera.x) * cellSize + cellSize / 2;
                const screenY = (boss.y - camera.y) * cellSize + cellSize / 2;
                boss.rageAuraRadius = 80 + Math.sin(Date.now() / 200) * 10;
                boss.rageAuraOpacity = 0.3 + Math.sin(Date.now() / 300) * 0.1;
                boss.renderRageAura(ctx, screenX, screenY, cellSize);
            }
        }

        // Effets du boss des Profondeurs Aquatiques (Zone 4)
        if (boss.bossType === 'aquatic') {
            // Rendu des vagues
            if (boss.activeWaves && boss.activeWaves.length > 0) {
                boss.renderWaves(ctx, camera, cellSize);
            }

            // Rendu des bulles explosives
            if (boss.activeBubbles && boss.activeBubbles.length > 0) {
                boss.renderBubbles(ctx, camera, cellSize);
            }

            // Rendu de l'aura de rage
            if (boss.isEnraged) {
                const screenX = (boss.x - camera.x) * cellSize + cellSize / 2;
                const screenY = (boss.y - camera.y) * cellSize + cellSize / 2;
                boss.rageAuraRadius = 80 + Math.sin(Date.now() / 200) * 10;
                boss.rageAuraOpacity = 0.3 + Math.sin(Date.now() / 300) * 0.1;
                boss.renderRageAura(ctx, screenX, screenY, cellSize);
            }
        }

        // Effets du boss de la Cité Futuriste (Zone 5)
        if (boss.bossType === 'futuristic') {
            // Rendu des lasers
            if (boss.activeLasers && boss.activeLasers.length > 0) {
                ctx.save();
                for (const laser of boss.activeLasers) {
                    const screenX = (laser.x - camera.x) * cellSize + cellSize / 2;
                    const screenY = (laser.y - camera.y) * cellSize + cellSize / 2;

                    // Laser avec effet lumineux
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = '#00ffff';
                    ctx.fillStyle = '#00ffff';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, cellSize * 0.25, 0, Math.PI * 2);
                    ctx.fill();

                    // Ligne de laser
                    ctx.strokeStyle = '#00ffff';
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.moveTo(screenX, screenY);
                    ctx.lineTo(screenX + laser.dx * cellSize * 0.5, screenY + laser.dy * cellSize * 0.5);
                    ctx.stroke();
                }
                ctx.restore();
            }

            // Rendu des bombes
            if (boss.activeBombs && boss.activeBombs.length > 0) {
                ctx.save();
                for (const bomb of boss.activeBombs) {
                    const screenX = (bomb.x - camera.x) * cellSize + cellSize / 2;
                    const screenY = (bomb.y - camera.y) * cellSize + cellSize / 2;

                    // Animation de pulsation
                    const pulse = 0.5 + (bomb.timer / bomb.duration) * 0.5;
                    const radius = cellSize * 0.3 * pulse;

                    // Zone d'explosion (cercle rouge)
                    ctx.globalAlpha = 0.2 + (bomb.timer / bomb.duration) * 0.3;
                    ctx.fillStyle = '#ff4757';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, cellSize * 9, 0, Math.PI * 2);
                    ctx.fill();

                    // Bombe elle-même
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = bomb.timer > bomb.duration * 0.7 ? '#ff0000' : '#ff6b00';
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, radius, 0, Math.PI * 2);
                    ctx.fill();

                    // Étincelles
                    if (bomb.timer > bomb.duration * 0.5) {
                        ctx.fillStyle = '#ffff00';
                        for (let i = 0; i < 4; i++) {
                            const angle = (Date.now() / 100 + i * Math.PI / 2) % (Math.PI * 2);
                            const sparkX = screenX + Math.cos(angle) * radius * 1.5;
                            const sparkY = screenY + Math.sin(angle) * radius * 1.5;
                            ctx.fillRect(sparkX - 2, sparkY - 2, 4, 4);
                        }
                    }
                }
                ctx.restore();
            }

            // Rendu du bouclier
            if (boss.shieldActive) {
                ctx.save();
                const screenX = (boss.x - camera.x) * cellSize + cellSize / 2;
                const screenY = (boss.y - camera.y) * cellSize + cellSize / 2;

                // Bouclier hexagonal avec effet cybernétique
                ctx.strokeStyle = '#4a90e2';
                ctx.lineWidth = 3;
                ctx.shadowBlur = 20;
                ctx.shadowColor = '#4a90e2';

                const shieldRadius = cellSize * 0.8;
                const numSides = 6;
                ctx.beginPath();
                for (let i = 0; i <= numSides; i++) {
                    const angle = (i / numSides) * Math.PI * 2 - Math.PI / 2;
                    const x = screenX + Math.cos(angle) * shieldRadius;
                    const y = screenY + Math.sin(angle) * shieldRadius;
                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();

                // Remplissage semi-transparent
                ctx.fillStyle = 'rgba(74, 144, 226, 0.2)';
                ctx.fill();

                ctx.restore();
            }

            // Rendu de l'aura de rage
            if (boss.isEnraged) {
                const screenX = (boss.x - camera.x) * cellSize + cellSize / 2;
                const screenY = (boss.y - camera.y) * cellSize + cellSize / 2;
                boss.rageAuraRadius = 80 + Math.sin(Date.now() / 200) * 10;
                boss.rageAuraOpacity = 0.3 + Math.sin(Date.now() / 300) * 0.1;

                // Aura cybernétique avec effet de grille
                ctx.save();
                ctx.strokeStyle = `rgba(22, 199, 154, ${boss.rageAuraOpacity})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(screenX, screenY, boss.rageAuraRadius, 0, Math.PI * 2);
                ctx.stroke();

                ctx.strokeStyle = `rgba(22, 199, 154, ${boss.rageAuraOpacity * 0.5})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(screenX, screenY, boss.rageAuraRadius * 0.7, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            }
        }
    }
    
    // Mise à jour spécifique au boss
    updateBossLogic(deltaTime) {
        if (!this.currentBoss || this.bossTransitioning) return;

        const boss = this.currentBoss;

        // Boss de la Forêt (Zone 1)
        if (boss.bossType === 'forest') {
            this.updateForestBossLogic(deltaTime, boss);
        }

        // Boss des Cavernes (Zone 2)
        if (boss.bossType === 'cavern') {
            this.updateCavernBossLogic(deltaTime, boss);
        }

        // Boss du Volcan (Zone 3)
        if (boss.bossType === 'volcano') {
            this.updateVolcanoBossLogic(deltaTime, boss);
        }

        // Boss des Profondeurs Aquatiques (Zone 4)
        if (boss.bossType === 'aquatic') {
            this.updateAquaticBossLogic(deltaTime, boss);
        }

        // Boss de la Cité Futuriste (Zone 5)
        if (boss.bossType === 'futuristic') {
            this.updateFuturisticBossLogic(deltaTime, boss);
        }
    }

    // Logique spécifique au boss de la Forêt
    updateForestBossLogic(deltaTime, boss) {
        
        const playerDist = Math.hypot(boss.x - this.player.x, boss.y - this.player.y);
        
        // Dégâts de contact (corps à corps)
        // Ignorer si le boss est invulnérable (période après le dialogue)
        if (playerDist <= 1.5 && !boss.isInvulnerable) {
            const contactDamage = boss.getContactDamage();
            if (contactDamage > 0) {
                // Son d'attaque corps à corps
                this.playSound('swordHit');
                const killed = this.player.takeDamage(contactDamage);
                this.addFloatingText(this.player.x, this.player.y, `-${contactDamage} 👊`, '#ff4757');
                if (killed) this.gameOver();
            }
        }
        
        // Phase 1: Projectiles
        if (boss.phase === 1) {
            const projectile = boss.fireProjectile(this.player.x, this.player.y);
            if (projectile) {
                // Son de projectile magique
                this.playSound('magicSpell');

                const projectileAnim = new ProjectileAnimation(
                    projectile.startX, projectile.startY,
                    projectile.endX, projectile.endY,
                    'magic',
                    6
                );

                projectileAnim.onComplete = () => {
                    // Les dégâts ne sont appliqués qu'à la fin de l'animation
                    const killed = this.player.takeDamage(projectile.damage);
                    this.addFloatingText(this.player.x, this.player.y, `-${projectile.damage} 💥`, '#ff4757');
                    this.addLog(`🔮 Projectile du boss: -${projectile.damage} HP`, 'damage');
                    if (killed) this.gameOver();
                };

                this.animations.push(projectileAnim);
            }
        }

        // Phase 2: Lianes
        if (boss.phase === 2) {
            const vines = boss.fireVines();
            if (vines.length > 0) {
                // Son de lianes
                this.playSound('liane');
                this.addLog('🌿 Le boss lance des lianes!', 'damage');
            }
            
            // Vérifier les collisions avec les lianes
            const vineDamage = boss.checkVineHit(this.player.x, this.player.y);
            if (vineDamage > 0) {
                const killed = this.player.takeDamage(vineDamage);
                this.addFloatingText(this.player.x, this.player.y, `-${vineDamage} 🌿`, '#2d5016');
                this.addLog(`🌿 Liane: -${vineDamage} HP`, 'damage');
                if (killed) this.gameOver();
            }
        }
    }

    // Logique spécifique au boss des Cavernes
    updateCavernBossLogic(deltaTime, boss) {
        // Vérifier les dégâts des stalactites (déjà géré dans boss.update)
        // Les sphères noires sont mises à jour dans boss.update et tuent instantanément

        // Dégâts de contact (corps à corps) (toutes les 0.8 secondes)
        if (!boss.contactDamageTimer) boss.contactDamageTimer = 0;
        boss.contactDamageTimer += deltaTime;

        const playerDist = Math.hypot(boss.x - this.player.x, boss.y - this.player.y);
        // Ignorer si le boss est invulnérable (période après le dialogue)
        if (playerDist <= 1.5 && boss.contactDamageTimer >= 0.8 && !boss.isInvulnerable) {
            boss.contactDamageTimer = 0;
            const contactDamage = Math.floor(boss.damage * 0.5); // Dégâts réduits car le boss a d'autres attaques
            // Son de coup
            this.playSound('hit');
            const killed = this.player.takeDamage(contactDamage);
            this.addFloatingText(this.player.x, this.player.y, `-${contactDamage} 👊`, '#ff4757');
            if (killed) this.gameOver();
        }
    }

    // Logique spécifique au boss du Volcan
    updateVolcanoBossLogic(deltaTime, boss) {
        // Initialiser les timers si nécessaire
        if (!boss.fireWallDamageTimer) boss.fireWallDamageTimer = 0;
        if (!boss.lavaDamageTimer) boss.lavaDamageTimer = 0;
        if (!boss.contactDamageTimer) boss.contactDamageTimer = 0;

        boss.fireWallDamageTimer += deltaTime;
        boss.lavaDamageTimer += deltaTime;
        boss.contactDamageTimer += deltaTime;

        // Vérifier collision avec les boules de feu
        for (let i = boss.activeFireballs.length - 1; i >= 0; i--) {
            const fireball = boss.activeFireballs[i];
            if (!fireball.hasHit) {
                // Vérifier si la boule de feu est proche du joueur (distance <= 1 case)
                const dx = Math.abs(fireball.x - this.player.x);
                const dy = Math.abs(fireball.y - this.player.y);
                const distance = dx + dy; // Distance Manhattan
                
                if (distance <= 1.5) { // Boule close enough to hit
                    fireball.hasHit = true;
                    // Appliquer des dégâts directs
                    const fireballDamage = 25;
                    const killed = this.player.takeDamage(fireballDamage);
                    this.addFloatingText(this.player.x, this.player.y, `-${fireballDamage} 🔥`, '#ff6b00');
                    this.addLog(`🔥 Boule de feu: -${fireballDamage} HP`, 'damage');
                    boss.activeFireballs.splice(i, 1);
                    if (killed) this.gameOver();
                }
            }
        }

        // Vérifier les dégâts des murs de feu (1 fois par seconde)
        const fireWallDamage = boss.checkFireWallCollision(this.player.x, this.player.y);
        if (fireWallDamage > 0 && boss.fireWallDamageTimer >= 1) {
            boss.fireWallDamageTimer = 0;
            const killed = this.player.takeDamage(fireWallDamage);
            this.addFloatingText(this.player.x, this.player.y, `-${fireWallDamage} 🔥`, '#ff4500');
            this.addLog(`🔥 Mur de feu: -${fireWallDamage} HP`, 'damage');
            if (killed) this.gameOver();
        }

        // Vérifier les dégâts de la lave (1 fois par seconde)
        const lavaDamage = boss.checkLavaCollision(this.player.x, this.player.y);
        if (lavaDamage > 0 && boss.lavaDamageTimer >= 1) {
            boss.lavaDamageTimer = 0;
            const killed = this.player.takeDamage(lavaDamage);
            this.addFloatingText(this.player.x, this.player.y, `-${lavaDamage} 🌋`, '#8B0000');
            this.addLog(`🌋 Lave: -${lavaDamage} HP`, 'damage');
            if (killed) this.gameOver();
        }

        // Dégâts de contact (corps à corps) (toutes les 0.8 secondes)
        const playerDist = Math.hypot(boss.x - this.player.x, boss.y - this.player.y);
        // Ignorer si le boss est invulnérable (période après le dialogue)
        if (playerDist <= 1.5 && boss.contactDamageTimer >= 0.8 && !boss.isInvulnerable) {
            boss.contactDamageTimer = 0;
            const contactDamage = Math.floor(boss.damage * 0.3);
            const killed = this.player.takeDamage(contactDamage);
            this.addFloatingText(this.player.x, this.player.y, `-${contactDamage} 👊`, '#ff4757');
            if (killed) this.gameOver();
        }
    }

    // Logique spécifique au boss des Profondeurs Aquatiques
    updateAquaticBossLogic(deltaTime, boss) {
        // Initialiser les timers si nécessaire
        if (!boss.waveDamageTimer) boss.waveDamageTimer = 0;
        if (!boss.contactDamageTimer) boss.contactDamageTimer = 0;
        if (!boss.bubbleDamageTimer) boss.bubbleDamageTimer = 0;

        boss.waveDamageTimer += deltaTime;
        boss.contactDamageTimer += deltaTime;
        boss.bubbleDamageTimer += deltaTime;

        // Vérifier collision avec les vagues (seulement en phase 1)
        if (boss.phase === 1) {
            const waveDamage = boss.checkWaveCollision(this.player.x, this.player.y);
            if (waveDamage > 0 && boss.waveDamageTimer >= 0.3) { // Dégâts toutes les 0.3 secondes
                boss.waveDamageTimer = 0;
                const killed = this.player.takeDamage(waveDamage);
                this.addFloatingText(this.player.x, this.player.y, `-${waveDamage} 🌊`, '#1e90ff');
                this.addLog(`🌊 Vague: -${waveDamage} HP`, 'damage');
                if (killed) this.gameOver();
            }
        }

        // Vérifier collision avec les bulles (en phases 2 et 3)
        if (boss.phase === 2 || boss.phase === 3) {
            const bubbleDamage = boss.checkBubbleCollision(this.player.x, this.player.y);
            if (bubbleDamage > 0 && boss.bubbleDamageTimer >= 0.3) { // Dégâts toutes les 0.3 secondes
                boss.bubbleDamageTimer = 0;
                const killed = this.player.takeDamage(bubbleDamage);
                this.addFloatingText(this.player.x, this.player.y, `-${bubbleDamage} 💧`, '#4169e1');
                this.addLog(`💧 Bulle explosive: -${bubbleDamage} HP`, 'damage');
                if (killed) this.gameOver();
            }
        }

        // Les bulles infligent également leurs dégâts à l'explosion
        // (comme les bombes du boss 5)

        // Dégâts de contact (corps à corps) (toutes les 0.8 secondes)
        const playerDist = Math.hypot(boss.x - this.player.x, boss.y - this.player.y);
        // Ignorer si le boss est invulnérable (période après le dialogue)
        if (playerDist <= 1.5 && boss.contactDamageTimer >= 0.8 && !boss.isInvulnerable) {
            boss.contactDamageTimer = 0;
            const contactDamage = Math.floor(boss.damage * 0.3);
            const killed = this.player.takeDamage(contactDamage);
            this.addFloatingText(this.player.x, this.player.y, `-${contactDamage} 👊`, '#ff4757');
            if (killed) this.gameOver();
        }
    }

    // Logique spécifique au boss de la Cité Futuriste
    updateFuturisticBossLogic(deltaTime, boss) {
        // Initialiser les timers si nécessaire
        if (!boss.laserDamageTimer) boss.laserDamageTimer = 0;
        if (!boss.contactDamageTimer) boss.contactDamageTimer = 0;

        boss.laserDamageTimer += deltaTime;
        boss.contactDamageTimer += deltaTime;

        // Vérifier collision avec les lasers
        for (let i = boss.activeLasers.length - 1; i >= 0; i--) {
            const laser = boss.activeLasers[i];

            // Avancer le laser dans sa direction
            laser.x += laser.dx * 5 * deltaTime; // 5 cases par seconde
            laser.y += laser.dy * 5 * deltaTime;

            // Vérifier si le laser sort de l'arène
            if (!this.dungeon.bossRoom ||
                laser.x < this.dungeon.bossRoom.x ||
                laser.x >= this.dungeon.bossRoom.x + this.dungeon.bossRoom.width ||
                laser.y < this.dungeon.bossRoom.y ||
                laser.y >= this.dungeon.bossRoom.y + this.dungeon.bossRoom.height) {
                boss.activeLasers.splice(i, 1);
                continue;
            }

            // Vérifier collision avec le joueur
            if (!laser.hasHit) {
                const dx = Math.abs(laser.x - this.player.x);
                const dy = Math.abs(laser.y - this.player.y);
                const distance = dx + dy;

                if (distance <= 0.8) {
                    laser.hasHit = true;
                    const laserDamage = 75;
                    const killed = this.player.takeDamage(laserDamage);
                    this.addFloatingText(this.player.x, this.player.y, `-${laserDamage} ⚡`, '#00ffff');
                    this.addLog(`⚡ Laser: -${laserDamage} HP`, 'damage');
                    boss.activeLasers.splice(i, 1);
                    if (killed) this.gameOver();
                }
            }
        }

        // Dégâts de contact (corps à corps) (toutes les 0.8 secondes)
        const playerDist = Math.hypot(boss.x - this.player.x, boss.y - this.player.y);
        // Ignorer si le boss est invulnérable (période après le dialogue)
        if (playerDist <= 1.5 && boss.contactDamageTimer >= 0.8 && !boss.isInvulnerable) {
            boss.contactDamageTimer = 0;
            const contactDamage = Math.floor(boss.damage * 0.4);
            const killed = this.player.takeDamage(contactDamage);
            this.addFloatingText(this.player.x, this.player.y, `-${contactDamage} 👊`, '#ff4757');
            if (killed) this.gameOver();
        }
    }

    // Ajouter un texte flottant au-dessus d'une entité
    addFloatingText(x, y, text, color = '#fff', duration = 1.5) {
        this.floatingTexts.push({
            x: x,
            y: y,
            text: text,
            color: color,
            duration: duration,
            elapsed: 0,
            offsetY: 0
        });
    }
    
    // Mettre à jour les textes flottants
    updateFloatingTexts(deltaTime) {
        this.floatingTexts = this.floatingTexts.filter(ft => {
            ft.elapsed += deltaTime;
            ft.offsetY -= deltaTime * 30; // Monte de 30 pixels par seconde
            return ft.elapsed < ft.duration;
        });
    }

    // Mettre à jour les particules
    updateParticles(deltaTime) {
        this.particles = this.particles.filter(particle => {
            // Mettre à jour la position
            particle.x += particle.vx * deltaTime;
            particle.y += particle.vy * deltaTime;

            // Appliquer la gravité pour le sang
            if (particle.type === 'blood') {
                particle.vy += 5 * deltaTime; // Gravité
                particle.vx *= 0.95; // Friction
            }

            // Réduire la durée de vie
            particle.life -= deltaTime;

            return particle.life > 0;
        });
    }
    
    // Dessiner les textes flottants
    renderFloatingTexts(ctx) {
        for (const ft of this.floatingTexts) {
            const screenX = (ft.x - this.camera.x) * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2;
            const screenY = (ft.y - this.camera.y) * CONFIG.CELL_SIZE + ft.offsetY - 10;
            
            // Fade out
            const alpha = Math.max(0, 1 - (ft.elapsed / ft.duration));
            
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.font = 'bold 16px "Press Start 2P"';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Ombre
            ctx.fillStyle = '#000';
            ctx.fillText(ft.text, screenX + 2, screenY + 2);
            
            // Texte
            ctx.fillStyle = ft.color;
            ctx.fillText(ft.text, screenX, screenY);
            
            ctx.restore();
        }
    }
    
    gameLoop(currentTime) {
        // Continue la boucle même en pause
        requestAnimationFrame((time) => this.gameLoop(time));

        // Ne pas mettre à jour le jeu si pas en mode 'playing'
        if (this.state !== 'playing') {
            return;
        }

        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        // Mise à jour du cooldown de déplacement
        if (this.movementCooldown > 0) {
            this.movementCooldown -= deltaTime;
            if (this.movementCooldown < 0) {
                this.movementCooldown = 0;
            }
        }

        // Mise à jour
        this.player.update(deltaTime);
        this.player.updatePerks(deltaTime); // Mise à jour des perks
        this.updateMagicRingsCollision(); // Collision des anneaux magiques
        // Attaque automatique pour Chevalier et Tank lorsqu'un ennemi est à portée
        if (this.player && (this.player.classType === 'knight' || this.player.classType === 'tank')) {
            // Ne rien faire si pas prêt à attaquer
            if (this.player.canAttack()) {
                // Trouver l'ennemi le plus proche dans la portée du joueur (généralement 1 case)
                const maxRange = this.player.range === Infinity ? 100 : this.player.range;
                let nearest = null;
                let minDist = Infinity;
                for (const enemy of this.enemies) {
                    const d = Math.hypot(enemy.x - this.player.x, enemy.y - this.player.y);
                    if (d <= maxRange + 0.001 && d < minDist) {
                        // Vérifier la ligne de vue (pour cohérence)
                        if (this.hasLineOfSight(this.player.x, this.player.y, enemy.x, enemy.y, false)) {
                            nearest = enemy;
                            minDist = d;
                        }
                    }
                }

                if (nearest) {
                    // Déterminer le nombre d'attaques (double_strike)
                    const numAttacks = ((this.player.classType === 'archer' || this.player.classType === 'mage') && this.player.perkLevels.double_shot) ? 2 :
                                      ((this.player.classType === 'knight' || this.player.classType === 'tank') && this.player.perkLevels.double_strike) ? 2 : 1;

                    for (let a = 0; a < numAttacks; a++) {
                        const { damage, isCritical } = this.player.getCalculatedDamage();
                        // Appliquer les dégâts
                        const killed = nearest.takeDamage(damage);
                        // Compter les dégâts
                        if (this.player) this.player.totalDamageDealt += damage;

                        // Afficher les dégâts
                        if (isCritical) {
                            this.addFloatingText(nearest.x, nearest.y, `-${damage} CRIT!`, '#ffcc00');
                            this.createCriticalEffect(nearest.x, nearest.y);
                        } else {
                            this.addFloatingText(nearest.x, nearest.y, `-${damage}`, '#ff6b6b');
                        }

                        this.playSound('swordHit');

                        // Knockback
                        if (this.player.perkEffects.knockbackDistance > 0 && !killed) {
                            this.applyKnockback(nearest, this.player.perkEffects.knockbackDistance);
                        }

                        if (killed) {
                            // Retirer l'ennemi et donner XP
                            this.enemies = this.enemies.filter(e => e !== nearest);
                            this.player.gainXP(nearest.xpValue);
                            const xpText = nearest.xpValue === 'level' ? 'LEVEL UP!' : `+${nearest.xpValue} XP`;
                            this.addFloatingText(this.player.x, this.player.y, xpText, '#ffd93d');

                            // Soin à la mort pour Knight et Tank
                            if (this.player && (this.player.classType === 'knight' || this.player.classType === 'tank')) {
                                const healAmount = Math.min(nearest.maxHealth, this.player.maxHealth - this.player.health);
                                if (healAmount > 0) {
                                    this.player.health = Math.min(this.player.maxHealth, this.player.health + healAmount);
                                    this.addFloatingText(this.player.x, this.player.y, `+${healAmount} ❤`, '#00ff00');
                                }
                            }
                        }
                    }

                    // Déclencher le cooldown de l'attaque
                    this.player.attack();
                }
            }
        }

        this.updateEnemies(deltaTime);
        this.updateBossLogic(deltaTime); // Mise à jour spécifique au boss
        this.updateAmbientSounds(deltaTime); // Mise à jour des sons d'ambiance

        // Vérifier si le boss 5 a <= 0 PV
        if (this.currentBoss && this.currentBoss.zone === 5 && this.currentBoss.health <= 0) {
            game.victory();
            return;
        }

        // Mettre à jour les soigneurs
        for (const healer of this.healers) {
            healer.update(deltaTime);
        }

        this.updateFloatingTexts(deltaTime);
        this.updateParticles(deltaTime);
        this.updateHUD();
        
        // Mise à jour de l'animation de marche
        if (this.player.isWalking) {
            this.player.walkAnimTimer += deltaTime;
            if (this.player.walkAnimTimer >= this.player.walkAnimSpeed) {
                this.player.walkAnimTimer = 0;
                // Arrêter l'animation après un court moment si pas de mouvement
                this.player.isWalking = false;
            }
        }
        
        // Mise à jour des animations
        this.animations = this.animations.filter(anim => {
            anim.update(deltaTime);
            return !anim.finished;
        });
        
        // Mise à jour caméra
        this.camera.x = Math.max(0, Math.min(
            this.player.x - this.viewportWidth / 2,
            CONFIG.GRID_SIZE - this.viewportWidth
        ));
        this.camera.y = Math.max(0, Math.min(
            this.player.y - this.viewportHeight / 2,
            CONFIG.GRID_SIZE - this.viewportHeight
        ));
        
        // Rendu
        this.render();
    }
    
    render() {
        const ctx = this.ctx;
        
        // Vérifications de sécurité
        if (!this.dungeon || !this.player) {
            console.error('Dungeon ou Player non initialisé!');
            return;
        }
        
        if (!this.dungeon.grid) {
            console.error('Dungeon.grid non initialisé!');
            return;
        }
        
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Debug: afficher un fond pour vérifier que le canvas fonctionne
        ctx.fillStyle = '#333';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE) || 1;
        const zoneData = CONFIG.ZONES[zone] || CONFIG.ZONES[1];
        const zoneColors = zoneData.colors;

        // Dessiner le donjon
        for (let y = 0; y < this.viewportHeight; y++) {
            for (let x = 0; x < this.viewportWidth; x++) {
                const gridX = Math.floor(this.camera.x + x);
                const gridY = Math.floor(this.camera.y + y);

                if (gridX >= 0 && gridX < CONFIG.GRID_SIZE &&
                    gridY >= 0 && gridY < CONFIG.GRID_SIZE) {

                    const cell = this.dungeon.grid[gridY][gridX];
                    const screenX = x * CONFIG.CELL_SIZE;
                    const screenY = y * CONFIG.CELL_SIZE;

                    // Vérifier si on est dans une salle de soins
                    let isHealingRoom = false;
                    for (const room of this.healingRooms) {
                        if (gridX >= room.x && gridX < room.x + room.width &&
                            gridY >= room.y && gridY < room.y + room.height) {
                            isHealingRoom = true;
                            break;
                        }
                    }

                    // Dessiner la cellule avec couleurs uniquement
                    if (cell === 1) {
                        // Mur
                        ctx.fillStyle = zoneColors[0];
                        ctx.fillRect(screenX, screenY, CONFIG.CELL_SIZE + 1, CONFIG.CELL_SIZE + 1);
                    } else if (isHealingRoom) {
                        // Sol vert clair pour les salles de soins
                        ctx.fillStyle = '#3d5a3d';
                        ctx.fillRect(screenX, screenY, CONFIG.CELL_SIZE + 1, CONFIG.CELL_SIZE + 1);
                    } else {
                        // Sol normal - couleur de la zone
                        ctx.fillStyle = zoneColors[1];
                        ctx.fillRect(screenX, screenY, CONFIG.CELL_SIZE + 1, CONFIG.CELL_SIZE + 1);
                    }

                    /* CODE AVEC TEXTURES - DÉSACTIVÉ
                    const zoneImageSet = this.zoneImages[zone];

                    // Calculer la position à l'écran en tenant compte du décalage de la caméra
                    const cameraOffsetX = (this.camera.x - Math.floor(this.camera.x)) * CONFIG.CELL_SIZE;
                    const cameraOffsetY = (this.camera.y - Math.floor(this.camera.y)) * CONFIG.CELL_SIZE;
                    const screenX = x * CONFIG.CELL_SIZE - cameraOffsetX;
                    const screenY = y * CONFIG.CELL_SIZE - cameraOffsetY;

                    // Dessiner la cellule avec les images appropriées
                    if (cell === 1) {
                        // Mur
                        if (zoneImageSet.wall.complete) {
                            ctx.drawImage(zoneImageSet.wall, screenX, screenY, CONFIG.CELL_SIZE, CONFIG.CELL_SIZE);
                        } else {
                            ctx.fillStyle = zoneColors[0]; // Couleur de secours
                            ctx.fillRect(screenX, screenY, CONFIG.CELL_SIZE + 1, CONFIG.CELL_SIZE + 1);
                        }
                    } else if (isHealingRoom) {
                        // Sol vert clair pour les salles de soins
                        ctx.fillStyle = '#3d5a3d';
                        ctx.fillRect(screenX, screenY, CONFIG.CELL_SIZE + 1, CONFIG.CELL_SIZE + 1);
                    } else {
                        // Chambre ou path - utiliser les images appropriées
                        const cellType = this.dungeon.cellType && this.dungeon.cellType[gridY] ?
                                        this.dungeon.cellType[gridY][gridX] : 'chamber';

                        let imageToUse = zoneImageSet.chamber;
                        let needsRotation = false;
                        let orientation = 'horizontal';

                        if (cellType === 'path') {
                            imageToUse = zoneImageSet.path;
                            orientation = this.dungeon.cellOrientation && this.dungeon.cellOrientation[gridY] ?
                                         this.dungeon.cellOrientation[gridY][gridX] : 'horizontal';
                            needsRotation = (orientation === 'vertical');
                        }

                        if (imageToUse.complete) {
                            // Vérifier la transparence pour zones 4 et 5 (tunnels)
                            let alpha = 1;
                            if (cellType === 'path' && (zone === 4 || zone === 5)) {
                                // Appliquer 75% de transparence quand le héros passe dessus
                                const heroX = Math.floor(this.player.x);
                                const heroY = Math.floor(this.player.y);
                                if (heroX === gridX && heroY === gridY) {
                                    alpha = 0.25; // 75% transparent = 25% opaque
                                }
                            }

                            ctx.globalAlpha = alpha;

                            if (needsRotation) {
                                // Rotation de 90 degrés pour les paths verticaux
                                ctx.save();
                                ctx.translate(screenX + CONFIG.CELL_SIZE / 2, screenY + CONFIG.CELL_SIZE / 2);
                                ctx.rotate(Math.PI / 2);
                                ctx.drawImage(imageToUse, -CONFIG.CELL_SIZE / 2, -CONFIG.CELL_SIZE / 2, CONFIG.CELL_SIZE, CONFIG.CELL_SIZE);
                                ctx.restore();
                            } else {
                                ctx.drawImage(imageToUse, screenX, screenY, CONFIG.CELL_SIZE, CONFIG.CELL_SIZE);
                            }

                            ctx.globalAlpha = 1; // Réinitialiser l'alpha
                        } else {
                            // Image non chargée - utiliser couleur de secours
                            ctx.fillStyle = cellType === 'chamber' ? zoneColors[1] : '#444';
                            ctx.fillRect(screenX, screenY, CONFIG.CELL_SIZE + 1, CONFIG.CELL_SIZE + 1);
                        }
                    }
                    */
                }
            }
        }
        
        // Dessiner la sortie
        const exitX = (this.exit.x - this.camera.x) * CONFIG.CELL_SIZE;
        const exitY = (this.exit.y - this.camera.y) * CONFIG.CELL_SIZE;
        const exitUnlocked = this.enemies.length === 0;
        
        if (exitX >= 0 && exitX < this.canvas.width && 
            exitY >= 0 && exitY < this.canvas.height) {
            
            // Couleur de la sortie selon si elle est déverrouillée ou non
            if (exitUnlocked) {
                ctx.fillStyle = '#ffd93d'; // Jaune doré - sortie active
            } else {
                ctx.fillStyle = '#555555'; // Gris - sortie verrouillée
            }
            ctx.fillRect(exitX, exitY, CONFIG.CELL_SIZE, CONFIG.CELL_SIZE);
            
            // Étoile ou cadenas pour la sortie
            ctx.fillStyle = exitUnlocked ? '#000' : '#888';
            ctx.font = `${Math.floor(CONFIG.CELL_SIZE * 0.5)}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(exitUnlocked ? '★' : '🔒', exitX + CONFIG.CELL_SIZE / 2, exitY + CONFIG.CELL_SIZE / 2);
        }
        
        // Dessiner les soigneurs
        for (const healer of this.healers) {
            const hx = (healer.x - this.camera.x) * CONFIG.CELL_SIZE;
            const hy = (healer.y - this.camera.y) * CONFIG.CELL_SIZE;

            if (hx >= 0 && hx < this.canvas.width &&
                hy >= 0 && hy < this.canvas.height) {

                // Animation de flottement
                const floatOffset = Math.sin(healer.animationTimer * 2) * 4;

                // Dessiner le sprite du soigneur
                const sprite = this.sprites.healer;
                const offsetSize = (CONFIG.CELL_SIZE - CONFIG.SPRITE_SIZE) / 2;

                if (sprite && sprite.complete && sprite.naturalWidth > 0) {
                    ctx.save();
                    ctx.imageSmoothingEnabled = false;

                    // Aura de soin si pas encore utilisé
                    if (!healer.hasHealed) {
                        const pulse = 0.8 + Math.sin(healer.animationTimer * 3) * 0.2;
                        ctx.globalAlpha = 0.3 * pulse;
                        ctx.fillStyle = '#2ecc71';
                        ctx.beginPath();
                        ctx.arc(
                            hx + CONFIG.CELL_SIZE / 2,
                            hy + CONFIG.CELL_SIZE / 2 + floatOffset,
                            CONFIG.CELL_SIZE * 0.8,
                            0,
                            Math.PI * 2
                        );
                        ctx.fill();
                        ctx.globalAlpha = 1;
                    }

                    // Dessiner le sprite
                    ctx.drawImage(
                        sprite,
                        hx + offsetSize,
                        hy + offsetSize + floatOffset,
                        CONFIG.SPRITE_SIZE,
                        CONFIG.SPRITE_SIZE
                    );

                    ctx.restore();

                    // Indicateur visuel au-dessus
                    if (!healer.hasHealed) {
                        ctx.fillStyle = '#2ecc71';
                        ctx.font = `${Math.floor(CONFIG.CELL_SIZE * 0.4)}px Arial`;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText('💚', hx + CONFIG.CELL_SIZE / 2, hy - 10 + floatOffset);
                    } else {
                        // Griser si déjà utilisé
                        ctx.globalAlpha = 0.5;
                        ctx.fillStyle = '#888';
                        ctx.font = `${Math.floor(CONFIG.CELL_SIZE * 0.3)}px Arial`;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText('✓', hx + CONFIG.CELL_SIZE / 2, hy - 10 + floatOffset);
                        ctx.globalAlpha = 1;
                    }
                }
            }
        }

        // Dessiner les ennemis
        for (const enemy of this.enemies) {
            const ex = (enemy.x - this.camera.x) * CONFIG.CELL_SIZE;
            const ey = (enemy.y - this.camera.y) * CONFIG.CELL_SIZE;
            
            if (ex >= 0 && ex < this.canvas.width && 
                ey >= 0 && ey < this.canvas.height) {
                
                // Taille différente pour les petits monstres
                const enemySize = enemy.combatType === 'small' ? CONFIG.SPRITE_SIZE * 0.7 : CONFIG.SPRITE_SIZE;
                const offsetSize = (CONFIG.CELL_SIZE - enemySize) / 2;
                
                // Essayer d'utiliser le sprite
                const zone = enemy.zone;
                let spriteDrawn = false;

                // Sprite de boss
                if (enemy.isBoss && this.bossSprites[zone]) {
                    const bossSprite = this.bossSprites[zone];
                    if (bossSprite && bossSprite.complete && bossSprite.naturalWidth > 0) {
                        ctx.imageSmoothingEnabled = false;
                        // Boss plus grand
                        const bossSize = CONFIG.SPRITE_SIZE * 1.5;
                        const bossOffsetSize = (CONFIG.CELL_SIZE - bossSize) / 2;
                        ctx.drawImage(
                            bossSprite,
                            ex + bossOffsetSize,
                            ey + bossOffsetSize,
                            bossSize,
                            bossSize
                        );
                        spriteDrawn = true;
                    }
                }
                // Sprite d'ennemi normal
                else if (!enemy.isBoss && this.enemySprites[zone] && this.enemySprites[zone][enemy.combatType]) {
                    const spriteList = this.enemySprites[zone][enemy.combatType];
                    const sprite = spriteList[enemy.spriteIndex % spriteList.length];

                    if (sprite && sprite.complete && sprite.naturalWidth > 0) {
                        ctx.imageSmoothingEnabled = false;
                        ctx.drawImage(
                            sprite,
                            ex + offsetSize,
                            ey + offsetSize,
                            enemySize,
                            enemySize
                        );
                        spriteDrawn = true;
                    }
                }
                
                // Fallback: carré coloré avec emoji si pas de sprite
                if (!spriteDrawn) {
                    // Couleur selon le type d'ennemi
                    if (enemy.isBoss) {
                        ctx.fillStyle = '#ff4757'; // Rouge vif pour le boss
                    } else if (enemy.combatType === 'ranged') {
                        ctx.fillStyle = '#9b59b6'; // Violet pour les ennemis à distance
                    } else if (enemy.combatType === 'tank') {
                        ctx.fillStyle = '#34495e'; // Gris foncé pour les tanks
                    } else if (enemy.combatType === 'small') {
                        ctx.fillStyle = '#27ae60'; // Vert pour les petits monstres rapides
                    } else {
                        ctx.fillStyle = '#e74c3c'; // Rouge pour les mêlée
                    }
                    
                    ctx.fillRect(ex + offsetSize, ey + offsetSize, enemySize, enemySize);
                    
                    // Indicateur de type (emoji selon le type)
                    ctx.fillStyle = '#fff';
                    ctx.font = `${Math.floor(CONFIG.CELL_SIZE * 0.4)}px Arial`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    
                    let enemyEmoji;
                    switch (enemy.combatType) {
                        case 'ranged': enemyEmoji = '🏹'; break;
                        case 'tank': enemyEmoji = '🛡️'; break;
                        case 'small': enemyEmoji = '🐀'; break;
                        default: enemyEmoji = '⚔️'; break;
                    }
                    
                    ctx.fillText(
                        enemyEmoji,
                        ex + CONFIG.CELL_SIZE / 2,
                        ey + CONFIG.CELL_SIZE / 2
                    );
                }

                // Barre de vie (seulement pour les ennemis normaux, pas les boss)
                if (!enemy.isBoss) {
                    const healthPercent = enemy.health / enemy.maxHealth;
                    ctx.fillStyle = enemy.isAggro ? '#ff6b6b' : '#2ecc71';
                    ctx.fillRect(ex, ey - 6, CONFIG.CELL_SIZE * healthPercent, 4);

                    // Bordure de la barre de vie
                    ctx.strokeStyle = '#000';
                    ctx.lineWidth = 1;
                    ctx.strokeRect(ex, ey - 6, CONFIG.CELL_SIZE, 4);
                }
            }
        }
        
        // Dessiner le joueur
        const px = (this.player.x - this.camera.x) * CONFIG.CELL_SIZE;
        const py = (this.player.y - this.camera.y) * CONFIG.CELL_SIZE;
        
        // Calculer le décalage pour centrer le sprite plus grand
        const playerSpriteOffset = (CONFIG.SPRITE_SIZE - CONFIG.CELL_SIZE) / 2;
        
        // Dessiner le sprite statique du joueur
        const sprite = this.sprites[this.player.classType];
        if (sprite && sprite.complete) {
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(
                sprite,
                px - playerSpriteOffset,
                py - playerSpriteOffset,
                CONFIG.SPRITE_SIZE,
                CONFIG.SPRITE_SIZE
            );
        } else {
            ctx.fillStyle = this.player.color;
            ctx.fillRect(
                px - playerSpriteOffset,
                py - playerSpriteOffset,
                CONFIG.SPRITE_SIZE,
                CONFIG.SPRITE_SIZE
            );
        }

        // Effet visuel du bouclier si actif
        if (this.player.perkEffects.shieldActive) {
            const shieldPulse = 1 + Math.sin(Date.now() / 200) * 0.1;
            const shieldRadius = (CONFIG.CELL_SIZE * 0.7) * shieldPulse;

            // Aura du bouclier
            const gradient = ctx.createRadialGradient(
                px + CONFIG.CELL_SIZE / 2,
                py + CONFIG.CELL_SIZE / 2,
                shieldRadius * 0.5,
                px + CONFIG.CELL_SIZE / 2,
                py + CONFIG.CELL_SIZE / 2,
                shieldRadius
            );
            gradient.addColorStop(0, 'rgba(52, 152, 219, 0.4)');
            gradient.addColorStop(0.7, 'rgba(52, 152, 219, 0.2)');
            gradient.addColorStop(1, 'rgba(52, 152, 219, 0)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(
                px + CONFIG.CELL_SIZE / 2,
                py + CONFIG.CELL_SIZE / 2,
                shieldRadius,
                0,
                Math.PI * 2
            );
            ctx.fill();

            // Cercle du bouclier
            ctx.strokeStyle = 'rgba(52, 152, 219, 0.8)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(
                px + CONFIG.CELL_SIZE / 2,
                py + CONFIG.CELL_SIZE / 2,
                shieldRadius * 0.9,
                0,
                Math.PI * 2
            );
            ctx.stroke();
        }

        // Dessiner les anneaux magiques
        if (this.player.perkEffects.ringsActive && this.player.perkLevels.magic_rings > 0) {
            const level = this.player.perkLevels.magic_rings;
            const numRings = Math.min(level, 5);
            const ringRange = 3 * CONFIG.CELL_SIZE; // 3 cases de distance
            const ringSize = CONFIG.CELL_SIZE * 0.4;
            const playerCenterX = px + CONFIG.CELL_SIZE / 2;
            const playerCenterY = py + CONFIG.CELL_SIZE / 2;

            // Effet de lueur mauve autour du joueur
            const glowGradient = ctx.createRadialGradient(
                playerCenterX, playerCenterY, ringRange * 0.8,
                playerCenterX, playerCenterY, ringRange * 1.2
            );
            glowGradient.addColorStop(0, 'rgba(155, 89, 182, 0)');
            glowGradient.addColorStop(0.5, 'rgba(155, 89, 182, 0.1)');
            glowGradient.addColorStop(1, 'rgba(155, 89, 182, 0)');
            ctx.fillStyle = glowGradient;
            ctx.beginPath();
            ctx.arc(playerCenterX, playerCenterY, ringRange * 1.2, 0, Math.PI * 2);
            ctx.fill();

            // Dessiner chaque anneau
            for (let i = 0; i < numRings; i++) {
                const angle = this.player.perkEffects.ringsRotation + (i * Math.PI * 2 / numRings);
                const ringX = playerCenterX + Math.cos(angle) * ringRange;
                const ringY = playerCenterY + Math.sin(angle) * ringRange;

                // Traînée de l'anneau
                const trailLength = 5;
                for (let t = 0; t < trailLength; t++) {
                    const trailAngle = angle - (t * 0.1);
                    const trailX = playerCenterX + Math.cos(trailAngle) * ringRange;
                    const trailY = playerCenterY + Math.sin(trailAngle) * ringRange;
                    const trailAlpha = 0.3 * (1 - t / trailLength);

                    ctx.fillStyle = `rgba(155, 89, 182, ${trailAlpha})`;
                    ctx.beginPath();
                    ctx.arc(trailX, trailY, ringSize * (1 - t * 0.1), 0, Math.PI * 2);
                    ctx.fill();
                }

                // Anneau principal avec gradient
                const ringGradient = ctx.createRadialGradient(
                    ringX, ringY, 0,
                    ringX, ringY, ringSize
                );
                ringGradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
                ringGradient.addColorStop(0.3, 'rgba(200, 150, 255, 0.8)');
                ringGradient.addColorStop(0.7, 'rgba(155, 89, 182, 0.6)');
                ringGradient.addColorStop(1, 'rgba(100, 50, 150, 0.3)');

                ctx.fillStyle = ringGradient;
                ctx.beginPath();
                ctx.arc(ringX, ringY, ringSize, 0, Math.PI * 2);
                ctx.fill();

                // Contour lumineux
                ctx.strokeStyle = 'rgba(200, 150, 255, 0.8)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(ringX, ringY, ringSize, 0, Math.PI * 2);
                ctx.stroke();

                // Petit brillant au centre
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.beginPath();
                ctx.arc(ringX - ringSize * 0.2, ringY - ringSize * 0.2, ringSize * 0.2, 0, Math.PI * 2);
                ctx.fill();
            }

            // Cercle de portée des anneaux (optionnel, subtil)
            ctx.strokeStyle = 'rgba(155, 89, 182, 0.3)';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.arc(playerCenterX, playerCenterY, ringRange, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // Indicateur de portée
        if (this.player.range !== Infinity) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(
                px + CONFIG.CELL_SIZE / 2,
                py + CONFIG.CELL_SIZE / 2,
                this.player.range * CONFIG.CELL_SIZE,
                0,
                Math.PI * 2
            );
            ctx.stroke();
        }
        
        // Indicateur de cible (cercle sur la case visée)
        const targetX = Math.floor(this.camera.x + this.mousePos.x / CONFIG.CELL_SIZE);
        const targetY = Math.floor(this.camera.y + this.mousePos.y / CONFIG.CELL_SIZE);
        const distance = Math.hypot(targetX - this.player.x, targetY - this.player.y);
        const maxRange = this.player.range === Infinity ? 100 : this.player.range;
        const inRange = distance <= maxRange;

        // Déterminer la couleur du curseur
        let fillColor, strokeColor;

        // Vérifier condition d'attaque possible: dans la portée, ligne de vue (sauf mage) et pas en cooldown
        const canShootThroughWalls = this.player.classType === 'mage';
        const hasLOS = inRange ? this.hasLineOfSight(this.player.x, this.player.y, targetX, targetY, canShootThroughWalls) : false;
        const canPerformAttack = this.player.canAttack() && inRange && hasLOS;

        if (canPerformAttack) {
            // Curseur mauve clair quand l'attaque est possible
            fillColor = 'rgba(200, 150, 255, 0.35)';
            strokeColor = 'rgba(200, 150, 255, 0.95)';
        } else {
            // Curseur noir quand on ne peut pas attaquer (hors portée / pas de LOS / cooldown)
            fillColor = 'rgba(0, 0, 0, 0.6)';
            strokeColor = 'rgba(0, 0, 0, 1)';
        }

        // Dessiner le cercle de visée (toujours visible)
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(
            (targetX - this.camera.x) * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2,
            (targetY - this.camera.y) * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2,
            CONFIG.CELL_SIZE / 2,
            0,
            Math.PI * 2
        );
        ctx.fill();
        ctx.stroke();
        
        // Dessiner les taches de sang au sol (sous les animations)
        if (this.bloodStains && this.bloodStains.length > 0) {
            for (const stain of this.bloodStains) {
                const stainX = (stain.x - this.camera.x) * CONFIG.CELL_SIZE;
                const stainY = (stain.y - this.camera.y) * CONFIG.CELL_SIZE;

                if (stainX >= -CONFIG.CELL_SIZE && stainX < this.canvas.width &&
                    stainY >= -CONFIG.CELL_SIZE && stainY < this.canvas.height) {
                    ctx.save();
                    ctx.globalAlpha = stain.alpha;
                    ctx.fillStyle = '#8B0000';

                    // Dessiner une forme irrégulière de tache de sang
                    ctx.beginPath();
                    const centerX = stainX + CONFIG.CELL_SIZE / 2;
                    const centerY = stainY + CONFIG.CELL_SIZE / 2;
                    const radius = CONFIG.CELL_SIZE * stain.size / 2;

                    for (let i = 0; i < 8; i++) {
                        const angle = (i / 8) * Math.PI * 2;
                        const variance = 0.7 + Math.random() * 0.6;
                        const x = centerX + Math.cos(angle) * radius * variance;
                        const y = centerY + Math.sin(angle) * radius * variance;

                        if (i === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    }
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                }
            }
        }

        // Dessiner les particules de sang (au-dessus des taches)
        if (this.particles && this.particles.length > 0) {
            for (const particle of this.particles) {
                const particleX = (particle.x - this.camera.x) * CONFIG.CELL_SIZE;
                const particleY = (particle.y - this.camera.y) * CONFIG.CELL_SIZE;

                if (particleX >= 0 && particleX < this.canvas.width &&
                    particleY >= 0 && particleY < this.canvas.height) {
                    ctx.save();
                    ctx.globalAlpha = particle.life / particle.maxLife;
                    ctx.fillStyle = particle.color;
                    ctx.beginPath();
                    ctx.arc(particleX, particleY, particle.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
            }
        }

        // Dessiner les effets du boss (aura, lianes, secousse)
        this.renderBossEffects(ctx, this.camera, CONFIG.CELL_SIZE);

        // Dessiner les animations par-dessus tout
        for (const anim of this.animations) {
            anim.render(ctx, this.camera, CONFIG.CELL_SIZE);
        }

        // Dessiner les textes flottants par-dessus tout
        this.renderFloatingTexts(ctx);
    }
}

// ===== INITIALISATION =====
let game;

window.addEventListener('load', () => {
    game = new Game();
    window.game = game; // Rendre accessible depuis la console
});

// ===== COMMANDES DE DÉBOGAGE =====
// Utilisez ces fonctions dans la console du navigateur (F12)

/**
 * Téléporter à un niveau spécifique
 * Exemple: teleportToLevel(10) pour aller au niveau 10 (boss zone 1)
 */
window.teleportToLevel = function(level) {
    if (!game) {
        console.error('Le jeu n\'est pas initialisé');
        return;
    }

    if (!game.player) {
        console.error('Vous devez d\'abord sélectionner une classe et commencer une partie');
        return;
    }

    console.log(`🎮 Téléportation au niveau ${level}...`);
    // On met le niveau à level-1 car nextLevel() va l'incrémenter
    game.currentLevel = level - 1;
    game.nextLevel();
    console.log(`✅ Vous êtes maintenant au niveau ${level}`);
};

/**
 * Ajouter un perk au joueur
 * Exemple: addPerk('second_life') pour obtenir la seconde vie
 * Perks disponibles: double_shot, double_strike, damage_boost, attack_speed,
 *                    shield, critical, knockback, regeneration, fireball, second_life
 */
window.addPerk = function(perkId) {
    if (!game || !game.player) {
        console.error('Vous devez être en jeu');
        return;
    }

    game.player.addPerk(perkId);
    console.log(`✅ Perk ajouté: ${perkId}`);
};

/**
 * Soigner le joueur à 100%
 */
window.heal = function() {
    if (!game || !game.player) {
        console.error('Vous devez être en jeu');
        return;
    }

    game.player.health = game.player.maxHealth;
    game.updateHUD();
    console.log(`✅ Vie restaurée à ${game.player.maxHealth}`);
};

/**
 * Activer/Désactiver le God Mode (vie infinie)
 * Usage: godMode() ou godMode(true/false)
 */
window.godMode = function(enable = null) {
    if (!game || !game.player) {
        console.error('Vous devez être en jeu');
        return;
    }

    // Si aucun paramètre, on toggle
    if (enable === null) {
        game.player.perkEffects.godMode = !game.player.perkEffects.godMode;
    } else {
        game.player.perkEffects.godMode = !!enable;
    }

    if (game.player.perkEffects.godMode) {
        console.log('✨ GOD MODE ACTIVÉ - Vie infinie!');
        game.addLog('✨ God Mode activé', 'heal');
    } else {
        console.log('❌ God Mode désactivé');
        game.addLog('God Mode désactivé', 'info');
    }
};

/**
 * Tuer tous les ennemis de la salle actuelle
 */
window.killAllEnemies = function() {
    if (!game || !game.player) {
        console.error('Vous devez être en jeu');
        return;
    }

    const enemyCount = game.enemies.length;
    if (enemyCount === 0) {
        console.log('⚠️ Aucun ennemi à tuer');
        return;
    }

    // Vérifier si un boss est présent
    const boss = game.enemies.find(enemy => enemy.isBoss);

    if (boss) {
        // Si c'est un boss, déclencher le dialogue de défaite
        game.defeatedBoss = boss;
        game.defeatedBoss.zone = boss.zone;
        game.defeatedBoss.xpValue = boss.xpValue; // Sauvegarder l'XP pour après le dialogue

        // Créer des effets de sang
        game.createBloodEffects(boss.x, boss.y);

        // Tuer les autres ennemis normalement et leur donner l'XP
        game.enemies.forEach(enemy => {
            if (!enemy.isBoss) {
                enemy.health = 0;
                // Donner l'XP des ennemis normaux
                game.player.gainXP(enemy.xpValue);
            }
        });

        // Supprimer seulement les ennemis normaux
        game.enemies = game.enemies.filter(enemy => enemy.health > 0 || enemy.isBoss);

        // NE PAS donner l'XP du boss maintenant - elle sera donnée après le dialogue

        console.log(`💀 ${enemyCount - 1} ennemi(s) éliminé(s)!`);
        console.log(`👑 Boss détecté - Lancement du dialogue de défaite...`);

        // Déclencher le dialogue après un court délai
        setTimeout(() => {
            game.showBossDefeatDialogue();
        }, 500);
    } else {
        // Pas de boss, tuer tous les ennemis normalement
        game.enemies.forEach(enemy => {
            enemy.health = 0;
        });

        // Nettoyer les ennemis morts
        game.enemies = game.enemies.filter(enemy => enemy.health > 0);

        console.log(`💀 ${enemyCount} ennemi(s) éliminé(s)!`);
        game.addLog(`💀 Tous les ennemis ont été éliminés!`, 'damage');
    }
};

/**
 * Obtenir des informations sur le niveau actuel
 */
window.gameInfo = function() {
    if (!game) {
        console.error('Le jeu n\'est pas initialisé');
        return;
    }

    console.log('📊 Informations du jeu:');
    console.log(`Niveau actuel: ${game.currentLevel}`);
    console.log(`Zone: ${Math.ceil(game.currentLevel / CONFIG.LEVELS_PER_ZONE)}`);
    const isBossLevel = ((game.currentLevel - 1) % CONFIG.LEVELS_PER_ZONE) === (CONFIG.LEVELS_PER_ZONE - 1);
    console.log(`Niveau boss: ${isBossLevel ? 'Oui' : 'Non'}`);
    console.log(`Ennemis restants: ${game.enemies ? game.enemies.length : 0}`);

    if (game.player) {
        console.log(`\n👤 Joueur:`);
        console.log(`Classe: ${game.player.className}`);
        console.log(`Vie: ${game.player.health}/${game.player.maxHealth}`);
        console.log(`Niveau: ${game.player.level}`);
        console.log(`Perks actifs:`, game.player.perks);
    }
};

/**
 * Maximiser tous les perks (Cheat)
 */
window.maxAllPerks = function() {
    if (!game || !game.player) {
        console.error('Vous devez être en jeu');
        return;
    }

    console.log('⚡ Maximisation de tous les perks...');

    for (const key in CONFIG.PERKS) {
        const perk = CONFIG.PERKS[key];
        const currentLevel = game.player.perkLevels[perk.id] || 0;
        
        for (let i = currentLevel; i < perk.maxLevel; i++) {
            game.player.addPerk(perk.id);
        }
    }

    game.updateHUD();
    console.log('✅ Tous les perks sont au niveau maximum!');
    game.addLog('⚡ TOUS LES PERKS MAXIMISÉS!', 'info');
};