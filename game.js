// ===== CONFIGURATION DU JEU =====
const CONFIG = {
    GRID_SIZE: 50,
    CELL_SIZE: 32,
    // Canvas et viewport seront calculés dynamiquement
    
    TOTAL_LEVELS: 50,
    LEVELS_PER_ZONE: 10,
    
    // Classes de personnages
    CLASSES: {
        archer: {
            name: 'Archer',
            health: 80,
            damage: 15,
            attackSpeed: 0.5,
            range: Infinity,
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
        const numRooms = 8 + Math.floor(Math.random() * 5);
        
        for (let i = 0; i < numRooms; i++) {
            const width = 5 + Math.floor(Math.random() * 8);
            const height = 5 + Math.floor(Math.random() * 8);
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
        
        this.upgrades = {
            damage: 0,
            health: 0,
            speed: 0,
            range: 0
        };
    }
    
    gainXP(amount) {
        this.xp += amount;
        
        while (this.xp >= this.xpToNext) {
            this.xp -= this.xpToNext;
            this.levelUp();
        }
    }
    
    levelUp() {
        this.level++;
        this.xpToNext = Math.floor(this.xpToNext * 1.5);
        
        // Amélioration aléatoire
        const upgrade = this.getRandomUpgrade();
        this.applyUpgrade(upgrade);
        
        game.addLog(`Niveau ${this.level}! ${upgrade.name} amélioré!`, 'info');
    }
    
    getRandomUpgrade() {
        const upgrades = [
            { type: 'damage', name: 'Dégâts', value: 5 },
            { type: 'health', name: 'Vie Max', value: 20 },
            { type: 'speed', name: 'Vitesse', value: -0.1 },
            { type: 'range', name: 'Portée', value: 1 }
        ];
        
        // L'archer ne peut pas améliorer sa portée (déjà infinie)
        if (this.classType === 'archer') {
            upgrades.splice(3, 1);
        }
        
        return upgrades[Math.floor(Math.random() * upgrades.length)];
    }
    
    applyUpgrade(upgrade) {
        this.upgrades[upgrade.type]++;
        
        switch(upgrade.type) {
            case 'damage':
                this.damage += upgrade.value;
                break;
            case 'health':
                this.maxHealth += upgrade.value;
                this.health = Math.min(this.health + upgrade.value, this.maxHealth);
                break;
            case 'speed':
                this.speed = Math.max(0.1, this.speed + upgrade.value);
                break;
            case 'range':
                if (this.range !== Infinity) {
                    this.range += upgrade.value;
                }
                break;
        }
    }
}

class Enemy extends Entity {
    constructor(x, y, level, zone, isBoss = false) {
        const baseHealth = isBoss ? 200 : 50;
        const baseDamage = isBoss ? 30 : 10;
        
        // Calcul du multiplicateur en fonction du niveau
        const levelInZone = ((level - 1) % CONFIG.LEVELS_PER_ZONE) + 1;
        const multiplier = 1 + (levelInZone - 1) * 0.1;
        
        const health = Math.floor(baseHealth * multiplier);
        const damage = Math.floor(baseDamage * multiplier);
        
        super(x, y, health, damage, 1);
        
        this.isBoss = isBoss;
        this.zone = zone;
        this.enemyType = Math.floor(Math.random() * 6);
        this.xpValue = isBoss ? 100 : 20;
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
        this.exit = null;
        
        this.keys = {};
        this.mousePos = { x: 0, y: 0 };
        
        this.lastTime = 0;
        this.camera = { x: 0, y: 0 };
        
        this.setupEventListeners();
    }
    
    resizeCanvas() {
        // Obtenir la taille du conteneur du canvas
        const container = document.getElementById('game-canvas-container');
        
        if (container) {
            const rect = container.getBoundingClientRect();
            this.canvas.width = rect.width;
            this.canvas.height = rect.height;
        } else {
            // Fallback si le conteneur n'existe pas encore
            const hud = document.getElementById('hud');
            const upgradesBar = document.getElementById('upgrades-bar');
            const hudHeight = hud ? hud.offsetHeight : 120;
            const upgradesHeight = upgradesBar ? upgradesBar.offsetHeight : 100;
            
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight - hudHeight - upgradesHeight;
        }
        
        // Calculer le viewport en fonction de la taille du canvas
        this.viewportWidth = Math.floor(this.canvas.width / CONFIG.CELL_SIZE);
        this.viewportHeight = Math.floor(this.canvas.height / CONFIG.CELL_SIZE);
    }
    
    setupEventListeners() {
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
            this.showScreen('class-selection');
        });
        
        document.getElementById('victory-restart-btn').addEventListener('click', () => {
            this.showScreen('class-selection');
        });
    }
    
    startGame(classType) {
        this.currentLevel = 1;
        this.generateLevel();
        
        const spawn = this.dungeon.findSpawnPoint();
        this.player = new Player(spawn.x, spawn.y, classType);
        
        // Mettre à jour l'avatar du joueur
        document.querySelector('.player-avatar').style.background = this.player.color;
        
        this.spawnEnemies();
        
        this.state = 'playing';
        this.showScreen('game-screen');
        
        // Redimensionner le canvas après l'affichage de l'écran de jeu
        setTimeout(() => this.resizeCanvas(), 100);
        
        this.updateHUD();
        
        this.addLog(`Bienvenue, ${this.player.className}!`, 'info');
        this.addLog('Utilisez ZQSD pour vous déplacer', 'info');
        this.addLog('Cliquez pour attaquer', 'info');
        
        requestAnimationFrame((time) => this.gameLoop(time));
    }
    
    generateLevel() {
        const generator = new DungeonGenerator(CONFIG.GRID_SIZE);
        this.dungeon = generator;
        this.dungeon.grid = generator.generate();
        
        this.exit = this.dungeon.findExitPoint();
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
            // Spawner des ennemis normaux
            const numEnemies = 5 + Math.floor(this.currentLevel / 5);
            
            for (let i = 0; i < numEnemies; i++) {
                const room = this.dungeon.rooms[
                    Math.floor(Math.random() * this.dungeon.rooms.length)
                ];
                
                const x = room.x + Math.floor(Math.random() * room.width);
                const y = room.y + Math.floor(Math.random() * room.height);
                
                // Ne pas spawner trop près du joueur
                const dist = Math.hypot(x - this.player.x, y - this.player.y);
                if (dist > 5) {
                    this.enemies.push(new Enemy(x, y, this.currentLevel, zone));
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
            
            // Vérifier les collisions
            if (this.canMoveTo(newX, newY)) {
                this.player.x = newX;
                this.player.y = newY;
                
                // Vérifier si on atteint la sortie
                if (newX === this.exit.x && newY === this.exit.y) {
                    this.nextLevel();
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
        if (!this.player.canAttack()) return;
        
        // Convertir position souris en position grille
        const worldX = this.camera.x + this.mousePos.x / CONFIG.CELL_SIZE;
        const worldY = this.camera.y + this.mousePos.y / CONFIG.CELL_SIZE;
        
        const targetX = Math.floor(worldX);
        const targetY = Math.floor(worldY);
        
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
                const damage = this.player.attack();
                const killed = target.takeDamage(damage);
                
                this.addLog(`-${damage} HP ennemi`, 'damage');
                
                if (killed) {
                    this.enemies = this.enemies.filter(e => e !== target);
                    this.player.gainXP(target.xpValue);
                    this.addLog(`Ennemi vaincu! +${target.xpValue} XP`, 'info');
                }
            }
        }
    }
    
    updateEnemies(deltaTime) {
        for (const enemy of this.enemies) {
            enemy.update(deltaTime);
            
            // IA simple: attaquer si proche du joueur
            const distance = Math.hypot(
                enemy.x - this.player.x,
                enemy.y - this.player.y
            );
            
            if (distance <= 1 && enemy.canAttack()) {
                const damage = enemy.attack();
                const killed = this.player.takeDamage(damage);
                
                this.addLog(`Vous prenez ${damage} dégâts!`, 'damage');
                
                if (killed) {
                    this.gameOver();
                }
            }
        }
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
        
        this.updateHUD();
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
        
        for (const [key, value] of Object.entries(this.player.upgrades)) {
            if (value > 0) {
                const div = document.createElement('div');
                div.className = 'upgrade-item';
                div.innerHTML = `
                    <span>${upgradeNames[key]}</span>
                    <span class="upgrade-level">Niv. ${value}</span>
                `;
                upgradesList.appendChild(div);
            }
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
    
    gameLoop(currentTime) {
        if (this.state !== 'playing') return;
        
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        
        // Mise à jour
        this.player.update(deltaTime);
        this.updateEnemies(deltaTime);
        this.updateHUD();
        
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
        
        requestAnimationFrame((time) => this.gameLoop(time));
    }
    
    render() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const zone = Math.ceil(this.currentLevel / CONFIG.LEVELS_PER_ZONE);
        const zoneColors = CONFIG.ZONES[zone].colors;
        
        // Dessiner le donjon
        for (let y = 0; y < this.viewportHeight; y++) {
            for (let x = 0; x < this.viewportWidth; x++) {
                const gridX = Math.floor(this.camera.x + x);
                const gridY = Math.floor(this.camera.y + y);
                
                if (gridX >= 0 && gridX < CONFIG.GRID_SIZE && 
                    gridY >= 0 && gridY < CONFIG.GRID_SIZE) {
                    
                    const cell = this.dungeon.grid[gridY][gridX];
                    
                    if (cell === 1) {
                        ctx.fillStyle = zoneColors[0]; // Murs
                    } else {
                        ctx.fillStyle = zoneColors[1]; // Sol
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
        
        if (exitX >= 0 && exitX < this.canvas.width && 
            exitY >= 0 && exitY < this.canvas.height) {
            ctx.fillStyle = '#ffd93d';
            ctx.fillRect(exitX, exitY, CONFIG.CELL_SIZE, CONFIG.CELL_SIZE);
            
            // Étoile pour la sortie
            ctx.fillStyle = '#000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('★', exitX + CONFIG.CELL_SIZE / 2, exitY + CONFIG.CELL_SIZE / 2);
        }
        
        // Dessiner les ennemis
        for (const enemy of this.enemies) {
            const ex = (enemy.x - this.camera.x) * CONFIG.CELL_SIZE;
            const ey = (enemy.y - this.camera.y) * CONFIG.CELL_SIZE;
            
            if (ex >= 0 && ex < this.canvas.width && 
                ey >= 0 && ey < this.canvas.height) {
                
                ctx.fillStyle = enemy.isBoss ? '#ff4757' : '#e74c3c';
                ctx.fillRect(ex, ey, CONFIG.CELL_SIZE, CONFIG.CELL_SIZE);
                
                // Barre de vie
                const healthPercent = enemy.health / enemy.maxHealth;
                ctx.fillStyle = '#2ecc71';
                ctx.fillRect(ex, ey - 4, CONFIG.CELL_SIZE * healthPercent, 2);
            }
        }
        
        // Dessiner le joueur
        const px = (this.player.x - this.camera.x) * CONFIG.CELL_SIZE;
        const py = (this.player.y - this.camera.y) * CONFIG.CELL_SIZE;
        
        ctx.fillStyle = this.player.color;
        ctx.fillRect(px, py, CONFIG.CELL_SIZE, CONFIG.CELL_SIZE);
        
        // Indicateur de ligne de vue vers la souris
        const targetX = Math.floor(this.camera.x + this.mousePos.x / CONFIG.CELL_SIZE);
        const targetY = Math.floor(this.camera.y + this.mousePos.y / CONFIG.CELL_SIZE);
        const distance = Math.hypot(targetX - this.player.x, targetY - this.player.y);
        
        if (distance <= (this.player.range === Infinity ? 100 : this.player.range)) {
            const canShootThroughWalls = this.player.classType === 'mage';
            const hasLOS = this.hasLineOfSight(this.player.x, this.player.y, targetX, targetY, canShootThroughWalls);
            
            // Dessiner une ligne vers la cible
            ctx.strokeStyle = hasLOS ? 'rgba(46, 204, 113, 0.5)' : 'rgba(255, 71, 87, 0.5)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(px + CONFIG.CELL_SIZE / 2, py + CONFIG.CELL_SIZE / 2);
            ctx.lineTo(
                (targetX - this.camera.x) * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2,
                (targetY - this.camera.y) * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2
            );
            ctx.stroke();
            
            // Dessiner un cercle sur la cible
            ctx.fillStyle = hasLOS ? 'rgba(46, 204, 113, 0.3)' : 'rgba(255, 71, 87, 0.3)';
            ctx.beginPath();
            ctx.arc(
                (targetX - this.camera.x) * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2,
                (targetY - this.camera.y) * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2,
                CONFIG.CELL_SIZE / 2,
                0,
                Math.PI * 2
            );
            ctx.fill();
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
    }
}

// ===== INITIALISATION =====
let game;

window.addEventListener('load', () => {
    game = new Game();
});