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
                "Par mon épée, je purifierai cette forêt de toute menace !",
                "Ces arbres ont vu trop de mal. Il est temps d'y apporter la justice.",
                "En avant ! Aucune créature ne résistera à ma lame.",
                "La forêt mystique... Un bon terrain pour prouver ma valeur.",
                "Mon honneur me guide. Ces ténèbres ne m'effraient pas."
            ],
            2: [
                "Ces grottes puent le mal. Ma lame brillera dans l'obscurité !",
                "L'honneur d'un chevalier ne faiblit pas dans le noir.",
                "Que ces cavernes tremblent ! J'arrive.",
                "Même sans lumière, mon épée trouvera ses cibles.",
                "Ces profondeurs seront purifiées par l'acier."
            ],
            3: [
                "Le feu de ces terres n'est rien comparé au feu dans mon cœur !",
                "La chaleur forge les meilleurs guerriers. Je suis prêt.",
                "Ces flammes témoigneront de ma victoire !",
                "Un vrai chevalier ne recule jamais, même face à l'enfer.",
                "Que la lave consume mes ennemis avant ma lame !"
            ],
            4: [
                "L'eau ralentit mes mouvements, mais pas ma détermination !",
                "Ces profondeurs cachent peut-être Excalibur... ou sa réplique.",
                "Un chevalier doit s'adapter. Je nagerai vers la victoire.",
                "L'honneur ne coule pas. Je me battrai même sous l'eau.",
                "Ces abysses apprendront à craindre la chevalerie !"
            ],
            5: [
                "Quelle sorcellerie est-ce là ? Peu importe, l'acier vaincra toujours !",
                "Ce monde étrange ne changera pas mon code d'honneur.",
                "Machines ou monstres, tous tomberont devant ma lame.",
                "Le futur a peut-être oublié les chevaliers. Je vais leur rappeler.",
                "Même ici, l'honneur et le courage triompheront !"
            ]
        },
        tank: {
            1: [
                "Cette forêt semble hostile... Parfait. Mon bouclier a soif d'action.",
                "Qu'ils viennent tous. Je suis un mur infranchissable.",
                "Ces arbres cachent des dangers ? Mon bouclier les accueillera.",
                "La forêt mystique ne brisera pas ma défense.",
                "Je suis le rempart. Rien ne passera."
            ],
            2: [
                "L'obscurité ? Mes ennemis ne me verront pas venir non plus.",
                "Ces grottes seront leur tombeau, pas le mien.",
                "Mon bouclier résonne dans ces cavernes. Un avertissement.",
                "Dans le noir, ma défense reste impénétrable.",
                "Que les ténèbres m'engloutissent. Je ressortirai victorieux."
            ],
            3: [
                "La chaleur fait fondre les faibles. Je suis forgé dans un feu plus fort.",
                "Ces flammes ne feront que renforcer mon bouclier.",
                "Un vrai défenseur ne craint pas le feu. Je l'embrasse.",
                "La lave coule autour de moi. Je reste immobile comme la montagne.",
                "Que ce brasier teste ma résistance !"
            ],
            4: [
                "L'eau presse contre mon armure... Une nouvelle forme de résistance.",
                "Ces profondeurs ne m'écraseront pas. Je suis plus lourd qu'elles.",
                "Sous l'eau, ma défense reste absolue.",
                "Les créatures marines apprendront la dureté de l'acier.",
                "Je coule vers le fond ? Non, je m'ancre pour combattre."
            ],
            5: [
                "Ces lumières étranges... Mon bouclier reflète tout.",
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
            rarity: 'COMMON',
            classRestriction: ['archer', 'mage'],
            maxLevel: 1
        },
        DOUBLE_STRIKE: {
            id: 'double_strike',
            name: 'Frappe Double',
            description: 'Frappe 2 fois rapidement',
            rarity: 'COMMON',
            classRestriction: ['knight', 'tank'],
            maxLevel: 1
        },
        ATTACK_SPEED: {
            id: 'attack_speed',
            name: 'Vitesse d\'Attaque',
            description: '-10% temps d\'attaque par niveau',
            rarity: 'COMMON',
            maxLevel: 5
        },
        DAMAGE_BOOST: {
            id: 'damage_boost',
            name: 'Force',
            description: '+5 dégâts par niveau',
            rarity: 'COMMON',
            maxLevel: 10
        },

        // RARE (30%)
        SHIELD: {
            id: 'shield',
            name: 'Bouclier Magique',
            description: 'Bouclier 3s+1s/niv, cooldown 10s',
            rarity: 'RARE',
            maxLevel: 10
        },
        CRITICAL: {
            id: 'critical',
            name: 'Coup Critique',
            description: '15% à 100% de chance, 1.5x dégâts',
            rarity: 'RARE',
            maxLevel: 10
        },
        KNOCKBACK: {
            id: 'knockback',
            name: 'Repousser',
            description: 'Repousse de 1 à 10 cases',
            rarity: 'RARE',
            maxLevel: 10
        },
        REGENERATION: {
            id: 'regeneration',
            name: 'Régénération',
            description: 'Restaure 30% PV sur 3s',
            rarity: 'RARE',
            maxLevel: 5
        },

        // EPIC (15%)
        FIREBALL: {
            id: 'fireball',
            name: 'Boules de Feu',
            description: '2+1/niv boules, brûlure 5dmg/s 3s',
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
            rarity: 'LEGENDARY',
            maxLevel: 1
        }
    }
};

// ===== GÉNÉRATION PROCÉDURALE DE DONJON =====
class DungeonGenerator {
    constructor(size) {
        this.size = size;
        this.grid = [];
        this.rooms = [];
    }
    
    generate() {
        // Initialiser la grille avec des murs
        this.grid = Array(this.size).fill(null).map(() => 
            Array(this.size).fill(1)
        );
        
        // Générer des salles avec BSP (Binary Space Partitioning)
        this.generateRooms();
        
        // Connecter les salles avec des corridors
        this.connectRooms();
        
        return this.grid;
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
            ringsCooldown: 0,
            ringsRotation: 0,
            ringsPermanent: false,
            ringsHitEnemies: new Set(), // Ennemis déjà touchés pendant cette activation

            // Bonus de stats
            attackSpeedBonus: 0,
            damageBonus: 0
        };

        // Effets de status
        this.statusEffects = []; // { type, duration, elapsed, data }
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
            game.addLog(`✨ ${perkConfig.name} niveau ${this.perkLevels[perkId]}!`, 'info');
        }
    }

    // Appliquer les effets d'un perk
    applyPerkEffect(perkId) {
        const level = this.perkLevels[perkId];

        switch(perkId) {
            case 'damage_boost':
                this.perkEffects.damageBonus = level * 5;
                this.damage = CONFIG.CLASSES[this.classType].damage + this.perkEffects.damageBonus;
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
                    game.addFloatingText(this.x, this.y, `-${effect.data.damagePerSecond}`, '#ff6b00');
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
        const nearestEnemy = game.findNearestEnemy(this.x, this.y, archerRange);

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

                    // Afficher les dégâts
                    game.addFloatingText(nearestEnemy.x, nearestEnemy.y, `-${fireballDamage} 🔥`, '#ff6b00');

                    // Appliquer l'effet de brûlure
                    if (!killed) {
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
            game.addLog('🔥 Fireball automatique!', 'damage');
        }
    }

    // Prendre des dégâts (avec bouclier)
    takeDamage(amount) {
        // Si le bouclier est actif, bloquer les dégâts
        if (this.perkEffects.shieldActive) {
            game.addFloatingText(this.x, this.y, 'BLOQUÉ!', '#3498db');
            return false;
        }

        this.health -= amount;

        // Seconde vie
        if (this.health <= 0 && this.perkEffects.hasSecondLife && !this.perkEffects.secondLifeUsed) {
            this.perkEffects.secondLifeUsed = true;
            this.health = Math.floor(this.maxHealth * 0.5);
            game.addLog('💛 SECONDE VIE ACTIVÉE!', 'heal');
            game.addFloatingText(this.x, this.y, 'SECONDE VIE!', '#f39c12');
            game.createReviveEffect(this.x, this.y);
            return false;
        }

        return this.health <= 0;
    }
}

class Enemy extends Entity {
    constructor(x, y, level, zone, isBoss = false, enemyType = null) {
        const baseHealth = isBoss ? 200 : 50;
        const baseDamage = isBoss ? 30 : 10;

        // Calcul du multiplicateur en fonction du niveau
        const levelInZone = ((level - 1) % CONFIG.LEVELS_PER_ZONE) + 1;
        const multiplier = 1 + (levelInZone - 1) * 0.1;

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
                    game.addFloatingText(this.x, this.y, `-${effect.data.damagePerSecond} 🔥`, '#ff6b00');
                }
            }

            if (effect.elapsed >= effect.duration) {
                this.statusEffects.splice(i, 1);
            }
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

// ===== MOTEUR DE JEU PRINCIPAL =====
class Game {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Configuration dynamique du canvas
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        this.state = 'menu'; // menu, playing, gameover, victory
        this.currentLevel = 1;
        this.dungeon = null;
        this.player = null;
        this.enemies = [];
        this.healers = []; // PNJ soigneurs
        this.healingRooms = []; // Salles de soins
        this.exit = null;
        
        this.keys = {};
        this.mousePos = { x: 0, y: 0 };
        
        this.lastTime = 0;
        this.camera = { x: 0, y: 0 };
        
        // Système d'animations
        this.animations = [];
        
        // Textes flottants (dégâts, XP, etc.)
        this.floatingTexts = [];
        
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
        
        // Charger les sprites des ennemis par zone
        this.enemySprites = {
            1: { // Zone 1 - Forêt Mystique
                melee: [],
                ranged: [],
                tank: [],
                small: []
            }
        };
        
        // Zone 1 - Mélée
        const melee1 = new Image();
        melee1.src = './pixel_art/ennemi/green_knif_men.png';
        this.enemySprites[1].melee.push(melee1);
        
        const melee2 = new Image();
        melee2.src = './pixel_art/ennemi/human_mad.png';
        this.enemySprites[1].melee.push(melee2);
        
        // Zone 1 - Arché (ranged)
        const ranged1 = new Image();
        ranged1.src = './pixel_art/ennemi/witch.png';
        this.enemySprites[1].ranged.push(ranged1);
        
        const ranged2 = new Image();
        ranged2.src = './pixel_art/ennemi/gobelin_witch.png';
        this.enemySprites[1].ranged.push(ranged2);
        
        const ranged3 = new Image();
        ranged3.src = './pixel_art/ennemi/gun_gobelin.png';
        this.enemySprites[1].ranged.push(ranged3);
        
        // Zone 1 - Tank
        const tank1 = new Image();
        tank1.src = './pixel_art/ennemi/tank_monster.png';
        this.enemySprites[1].tank.push(tank1);
        
        // Zone 1 - Small (rapide)
        const small1 = new Image();
        small1.src = './pixel_art/ennemi/crazy_gobelin.png';
        this.enemySprites[1].small.push(small1);
        
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
            this.showScreen('class-selection');
        });
        
        document.getElementById('lore-btn').addEventListener('click', () => {
            this.showScreen('lore-screen');
        });
        
        document.getElementById('credits-btn').addEventListener('click', () => {
            this.showScreen('credits-screen');
        });
        
        document.getElementById('quit-btn').addEventListener('click', () => {
            window.close();
        });
        
        // Boutons retour et navigation lore
        document.getElementById('lore-back-btn').addEventListener('click', () => {
            this.showScreen('main-menu');
        });

        document.getElementById('lore-next-btn').addEventListener('click', () => {
            this.showScreen('lore-screen-2');
        });

        document.getElementById('lore-prev-btn').addEventListener('click', () => {
            this.showScreen('lore-screen');
        });

        document.getElementById('lore-back-btn-2').addEventListener('click', () => {
            this.showScreen('main-menu');
        });
        
        document.getElementById('credits-skip-btn').addEventListener('click', () => {
            this.showScreen('main-menu');
        });
        
        // Sélection de classe
        document.querySelectorAll('.class-card').forEach(card => {
            card.addEventListener('click', () => {
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
            this.showScreen('main-menu');
        });
        
        document.getElementById('victory-restart-btn').addEventListener('click', () => {
            this.showScreen('main-menu');
        });
        
        // Boutons retour au menu pendant le jeu
        document.getElementById('back-to-menu-btn').addEventListener('click', () => {
            this.state = 'menu';
            this.showScreen('main-menu');
        });
        
        document.getElementById('class-back-btn').addEventListener('click', () => {
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
            this.finishDialogue();
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

        // Configurer l'image du héros
        const heroImageMap = {
            archer: './pixel_art/heros_talk/archer.png',
            knight: './pixel_art/heros_talk/knight.png',
            mage: './pixel_art/heros_talk/magic men.png',
            tank: './pixel_art/heros_talk/tank.png'
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
        const generator = new DungeonGenerator(CONFIG.GRID_SIZE);
        this.dungeon = generator;
        this.dungeon.grid = generator.generate();

        this.exit = this.dungeon.findExitPoint();

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
            // Spawner un boss au centre
            const boss = new Enemy(
                Math.floor(CONFIG.GRID_SIZE / 2),
                Math.floor(CONFIG.GRID_SIZE / 2),
                this.currentLevel,
                zone,
                true
            );
            this.enemies.push(boss);
            this.addLog('⚠️ BOSS APPARU!', 'damage');
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
                
                // Activer l'animation de marche
                this.player.isWalking = true;
                this.player.walkFrame = (this.player.walkFrame + 1) % 4;
                
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
                        this.enemies = this.enemies.filter(e => e !== target);
                        this.player.gainXP(target.xpValue);
                        // Afficher l'XP gagné au-dessus du joueur
                        const xpText = target.xpValue === 'level' ? 'LEVEL UP!' : `+${target.xpValue} XP`;
                        this.addFloatingText(this.player.x, this.player.y, xpText, '#ffd93d');
                    }
                };
                
                // Déterminer le nombre d'attaques (double_shot ou double_strike)
                const numAttacks = (this.player.classType === 'archer' && this.player.perkLevels.double_shot) ? 2 :
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
                    } else if (this.player.classType === 'mage') {
                        // Animation de boule magique
                        animation = new ProjectileAnimation(
                            this.player.x, this.player.y,
                            targetX, targetY,
                            'magic',
                            10 // Plus lent que la flèche
                        );
                    } else if (this.player.classType === 'knight') {
                        // Animation de coup d'épée
                        animation = new MeleeAnimation(
                            this.player.x, this.player.y,
                            targetX, targetY,
                            'knight'
                        );
                    } else if (this.player.classType === 'tank') {
                        // Animation de coup de bouclier
                        animation = new MeleeAnimation(
                            this.player.x, this.player.y,
                            targetX, targetY,
                            'tank'
                        );
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
                        this.addFloatingText(enemy.x, enemy.y, `-${ringDamage} 🔮`, '#9b59b6');

                        if (killed) {
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
            // Afficher le dialogue de la nouvelle zone
            this.showZoneDialogue(currentZone, this.player.classType);
        } else {
            this.updateHUD();
        }
    }
    
    gameOver() {
        this.state = 'gameover';
        this.showScreen('game-over');
        
        document.getElementById('final-stats').innerHTML = `
            <p>Niveau atteint: ${this.currentLevel}</p>
            <p>Niveau du personnage: ${this.player.level}</p>
            <p>Dégâts: ${this.player.damage}</p>
            <p>Vie max: ${this.player.maxHealth}</p>
        `;
    }
    
    victory() {
        this.state = 'victory';
        this.showScreen('victory');
        
        document.getElementById('victory-stats').innerHTML = `
            <p>Niveau du personnage: ${this.player.level}</p>
            <p>Dégâts: ${this.player.damage}</p>
            <p>Vie max: ${this.player.maxHealth}</p>
        `;
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
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
        
        const healthPercent = (this.player.health / this.player.maxHealth) * 100;
        document.getElementById('player-health').style.width = healthPercent + '%';
        document.getElementById('health-text').textContent = 
            `${this.player.health}/${this.player.maxHealth}`;
        
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
        
        // Valeurs de bonus par niveau d'upgrade
        const upgradeValues = {
            damage: 5,      // +5 dégâts par niveau
            health: 20,     // +20 vie max par niveau
            speed: -0.1,    // -0.1s de cooldown par niveau
            range: 1        // +1 portée par niveau
        };
        
        const upgradeUnits = {
            damage: 'dégâts',
            health: 'vie max',
            speed: 's cooldown',
            range: 'case(s)'
        };
        
        for (const [key, value] of Object.entries(this.player.upgrades)) {
            if (value > 0) {
                const totalBonus = upgradeValues[key] * value;
                const bonusText = key === 'speed' ? `${totalBonus}` : `+${totalBonus}`;

                const div = document.createElement('div');
                div.className = 'upgrade-item';
                div.setAttribute('data-tooltip', `${bonusText} ${upgradeUnits[key]}`);
                div.innerHTML = `
                    <span>${upgradeNames[key]}</span>
                    <span class="upgrade-level">Niv. ${value}</span>
                `;
                upgradesList.appendChild(div);
            }
        }

        // Afficher les perks actifs
        for (const perk of this.player.perks) {
            const div = document.createElement('div');
            div.className = 'upgrade-item perk-item';
            div.style.borderColor = CONFIG.RARITY[perk.rarity].color;

            let perkText = `${perk.icon} ${perk.name}`;
            if (perk.level > 1) {
                perkText += ` (Niv. ${perk.level})`;
            }

            div.textContent = perkText;
            upgradesList.appendChild(div);
        }

        // Afficher le statut du shield si actif
        if (this.player.perkEffects.shieldActive) {
            const shieldDiv = document.createElement('div');
            shieldDiv.className = 'upgrade-item shield-status';
            shieldDiv.style.color = '#3498db';
            shieldDiv.textContent = '🛡️ BOUCLIER ACTIF';
            upgradesList.appendChild(shieldDiv);
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

        // Mise à jour
        this.player.update(deltaTime);
        this.player.updatePerks(deltaTime); // Mise à jour des perks
        this.updateMagicRingsCollision(); // Collision des anneaux magiques
        this.updateEnemies(deltaTime);

        // Mettre à jour les soigneurs
        for (const healer of this.healers) {
            healer.update(deltaTime);
        }

        this.updateFloatingTexts(deltaTime);
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

                    // Vérifier si on est dans une salle de soins
                    let isHealingRoom = false;
                    for (const room of this.healingRooms) {
                        if (gridX >= room.x && gridX < room.x + room.width &&
                            gridY >= room.y && gridY < room.y + room.height) {
                            isHealingRoom = true;
                            break;
                        }
                    }

                    if (cell === 1) {
                        ctx.fillStyle = zoneColors[0]; // Murs
                    } else if (isHealingRoom) {
                        // Sol vert clair pour les salles de soins
                        ctx.fillStyle = '#3d5a3d';
                    } else {
                        ctx.fillStyle = zoneColors[1]; // Sol normal
                    }

                    ctx.fillRect(
                        x * CONFIG.CELL_SIZE,
                        y * CONFIG.CELL_SIZE,
                        CONFIG.CELL_SIZE,
                        CONFIG.CELL_SIZE
                    );
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
                
                if (!enemy.isBoss && this.enemySprites[zone] && this.enemySprites[zone][enemy.combatType]) {
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
                
                // Barre de vie
                const healthPercent = enemy.health / enemy.maxHealth;
                ctx.fillStyle = enemy.isAggro ? '#ff6b6b' : '#2ecc71';
                ctx.fillRect(ex, ey - 6, CONFIG.CELL_SIZE * healthPercent, 4);
                
                // Bordure de la barre de vie
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 1;
                ctx.strokeRect(ex, ey - 6, CONFIG.CELL_SIZE, 4);
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
        
        if (distance <= (this.player.range === Infinity ? 100 : this.player.range)) {
            const canShootThroughWalls = this.player.classType === 'mage';
            const hasLOS = this.hasLineOfSight(this.player.x, this.player.y, targetX, targetY, canShootThroughWalls);
            
            // Dessiner un cercle sur la cible
            ctx.fillStyle = hasLOS ? 'rgba(46, 204, 113, 0.3)' : 'rgba(255, 71, 87, 0.3)';
            ctx.strokeStyle = hasLOS ? 'rgba(46, 204, 113, 0.8)' : 'rgba(255, 71, 87, 0.8)';
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
        }
        
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