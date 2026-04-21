// HEAVILY INSPIRED BY PERSONA GAMES AND BLOCK TALES (ROBLOX)

// CONSTANTS INITIAL STATS FOR OUR HEROES
const baseStats = {
    Warrior: [120, 60],
    Mage: [80, 120],
    Paladin: [150, 80],
    Assassin: [90, 70],
};

// AMOUNT OF MANA REDUCED BY SKILL USED
const skillCost = {
    Warrior: 60,
    Mage: 50,
    Paladin: 80,
    Assassin: 70,
};

// CHARACTER CLASS
class Character {
    constructor(name, classType, level = 1) {
    this.name = name;
    this.classType = classType;

    this.level = level;
    this.maxLevel = 5;

    this.exp = 0;
    this.expToLevel = 100;

    const [hp, mana] = baseStats[classType];

    this.baseHP = hp;
    this.baseMana = mana;

    this.maxHealth = hp * level;
    this.health = this.maxHealth;

    this.maxMana = mana + level * 5;
    this.mana = this.maxMana;

    this.potions = 2;
    this.manaPotions = 1;
    this.gold = 100;

    this.burn = 0;
    this.rage = 0;
    this.shield = 0;
}
  // EXP GAIN AMOUNT AND LEVEL UP FUNCTION
    gainExp(amount) {
    if (this.level >= this.maxLevel) return;

    this.exp += amount;

    while (this.exp >= this.expToLevel && this.level < this.maxLevel) {
        this.exp -= this.expToLevel;
        this.level++;

      this.maxHealth = this.baseHP * this.level;
      this.maxMana = this.baseMana + this.level * 5;

        this.health = this.maxHealth;
        this.mana = this.maxMana;

        alert(`${this.name} leveled up! Now Level ${this.level}`);
    }
}
  // Attack Function for Player and Enemy
    attack(target) {
    let damage = 20 + this.level * 8;

    if (this.rage > 0) {
        damage += 20;
        this.rage--;
    }
   // Damage Reduction when using Shield
    damage = applyShield(target, damage);
    target.health = Math.max(0, target.health - damage);

    this.mana = Math.min(this.mana + 15, this.maxMana);

   // Recently Added for defeated enemy or player display

    alert(`${this.name} attacks ${target.name}! (${target.health} HP left)`);
    if (target.health <= 0) {
        alert(`${target.name} has been defeated!`);
    }
}

  // HEROES UNIQUE ABILITIES SO FAR
    useSkill(target) {
    const cost = skillCost[this.classType];
    if (this.mana < cost) return alert("Not enough mana!");

    this.mana -= cost;

    switch (this.classType) {
    case "Warrior":
        this.rage = 3;
        alert(`${this.name} enters Rage!`);
        break;

    case "Mage":
        target.burn = 3;
        alert(`${this.name} casts Fireball!`);
        break;

    case "Paladin":
        this.shield = 100;
        alert(`${this.name} gains a shield!`);
        break;

    case "Assassin":
        let crit = Math.random() < 0.5;
        let damage = crit ? 200 : 80;

        damage = applyShield(target, damage);
        target.health = Math.max(0, target.health - damage);

        alert(`${this.name} uses Backstab! ${crit ? "CRIT!" : ""}`);
        break;
    }
}
 // Health and Mana Potion Logic for Heroes
    usePotion() {
    if (this.potions <= 0) return alert("No HP potions!");
    this.potions--;
    this.health = Math.min(this.health + 100, this.maxHealth);
    alert(`${this.name} healed!`);
    }

    useManaPotion() {
    if (this.manaPotions <= 0) return alert("No mana potions!");
    this.manaPotions--;
    this.mana = Math.min(this.mana + 60, this.maxMana);
    alert(`${this.name} restored mana!`);
    }
}

// STATUS EFFECTS
function applyShield(target, damage) {
    if (target.shield > 0) {
    let absorbed = Math.min(target.shield, damage);
    target.shield -= absorbed;
    damage -= absorbed;
}
    return damage;
}

function applyStatusEffects(character) {
    if (character.burn > 0) {
    character.health -= 20;
    character.burn--;
    alert(`${character.name} takes burn damage!`);
    }
}

// PARTY STATS
function showPartyStats(players) {
    let text = "PARTY STATUS\n";

    players.forEach((p) => {
    text += `${p.name} (${p.classType}) Lv.${p.level}\n`;
    text += `HP: ${p.health}/${p.maxHealth}\n`;
    text += `Mana: ${p.mana}/${p.maxMana}\n`;
    text += `EXP: ${p.exp}/${p.expToLevel}\n\n`;
    });

    alert(text);
}

// ENEMIES (JUST OUR HEROES' COUNTERPARTS)
const mobTypes = [
    { name: "Goblin", classType: "Assassin" },
    { name: "Orc", classType: "Warrior" },
    { name: "Necromancer", classType: "Mage" },
    { name: "Fallen Knight", classType: "Paladin" },
];

function spawnEnemy() {
  let mob = mobTypes[Math.floor(Math.random() * mobTypes.length)];
    let level = Math.min(1 + Math.floor(kills / 2), 5);

    let enemy = new Character(mob.name, mob.classType, level);

    alert(`A wild ${enemy.name} (Lv.${level}) appeared!`);
    return enemy;
}

// BOSS
function spawnBoss() {
    let boss = new Character("Demon King", "Warrior", 5);

    boss.maxHealth = 1200;
    boss.health = 1200;
    boss.shield = 100;

    return boss;
}

function bossSkill(boss, players) {
  let target = players[Math.floor(Math.random() * players.length)];
  let skill = Math.floor(Math.random() * 5); 

    switch (skill) {
    case 0:
        alert("Demon King uses Hellfire!");
        players.forEach((p) => (p.burn = 2));
        break;
    case 1:
        alert(`Demon King uses Smash on ${target.name}!`);
        target.health -= 350;
        break;
    case 2:
        alert("Demon King applies Dark Shield!");
        alert("Demon King DEFENSE UP!");
        boss.shield += 200;
        break;
    case 3:
        alert(`Demon King drains ${target.name}'s Soul!`);
        target.health -= 100;
        boss.health += 100;
        break;
    case 4:
        alert(`Demon King uses Doom Strike on ${target.name}!`);
        target.health -= 250;
        break;
    }
}

// PLAYER TURN
function playerTurn(player, enemy) {
    applyStatusEffects(player);
    applyStatusEffects(enemy);

    let choice = prompt(
    `${player.name}'s Turn (Lv.${player.level})
HP: ${player.health}  Mana: ${player.mana}

1. Attack
2. Skill
3. HP Potion
4. Mana Potion`,
);

    if (!["1", "2", "3", "4"].includes(choice)) {
    alert("Invalid choice!");
    return playerTurn(player, enemy);
}

    if (choice == "1") player.attack(enemy);
    else if (choice == "2") player.useSkill(enemy);
    else if (choice == "3") player.usePotion();
    else if (choice == "4") player.useManaPotion();
}

// ENEMY TURN
function enemyTurn(players, enemy, isBoss = false) {
    if (isBoss && Math.random() < 0.7) {
    bossSkill(enemy, players);
    return;
}

    let alive = players.filter((p) => p.health > 0);
    let target = alive[Math.floor(Math.random() * alive.length)];

    enemy.attack(target);
}

// BATTLE
function startBattle(players, enemy, isBoss = false) {
    while (players.some((p) => p.health > 0) && enemy.health > 0) {
    for (let player of players) {
        if (player.health <= 0) continue;

        playerTurn(player, enemy);

        if (enemy.health <= 0) {
        let expGain = enemy.level * 50;

        players.forEach((p) => {
            p.gold += 50;
            p.gainExp(expGain);
        });

        return true;
        }
    }

    enemyTurn(players, enemy, isBoss);

    if (players.every((p) => p.health <= 0)) {
        alert("All Players Defeated!");
        return false;
    }
    }
}

// SHOP
function shop(players) {
    let leader = players[0];

    let choice = prompt(
    `Shop
Gold: ${leader.gold}

1. HP Potion (50 Health)
2. Mana Potion (50 Mana)
3. Leave`,
    );

    if (choice == "1" && leader.gold >= 50) {
        alert(`Your group gains 1 HP Potion! and lost ${50} gold`);
        leader.gold -= 50;
        players.forEach((p) => p.potions++);
    } else if (choice == "2" && leader.gold >= 50) {
        alert(`Your group gains 1 Mana Potion! and lost ${50} gold`);
        leader.gold -= 50;
        players.forEach((p) => p.manaPotions++);
    } else if (choice == 3) {
    return;
    } else {
    alert(`${choice} is an invalid Choice!`);
    return shop(players);
}
}

// REST
function rest(players) {
    players.forEach((p) => {
    p.health = p.maxHealth;
    p.mana = p.maxMana;
});
    alert("Rested!");
}

// GAME START
let kills = 0;

const players = [
    new Character("Hero", "Warrior"),
    new Character("Kelvin", "Paladin"),
    new Character("Cedric", "Mage"),
    new Character("Johnley", "Assassin"),
];

while (players.some((p) => p.health > 0)) {
    let leader = players[0];

    let choice = prompt(
    `MENU
Gold: ${leader.gold} | Kills: ${kills}

1. Explore
2. Shop
3. Rest
4. Party Stats
5. Quit`,
    );

    if (choice == "1") {
        if (kills >= 5) {
        let boss = spawnBoss();
        alert("Demon King Appears!");

        if (!startBattle(players, boss, true)) break;

        alert("YOU DEFEATED THE DEMON KING!");
        break;
    }

    let enemy = spawnEnemy();
    if (startBattle(players, enemy)) kills++;
        } else if (choice == "2") shop(players);
        else if (choice == "3") rest(players);
        else if (choice == "4") showPartyStats(players);
        else if (choice == "5") break;
}

alert("GAME OVER!");