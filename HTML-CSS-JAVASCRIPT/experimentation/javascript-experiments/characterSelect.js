function Hero(name, level) {    
    this.name = name;
    this.level = level;
}

Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}


function Warrior(name, level, weapon) {
    //chain constructor with call
    Hero.call(this, name, level);

    //add a new property
    this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

//Ensure that the Warrior and Healer inherit from Hero so we can use the greet() function
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function() {
    return `${this.name} casts ${this.spell}.`;
}

const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

rawLog(hero1);
rawLog(hero2);

log(hero1.attack());
log(hero1.greet());