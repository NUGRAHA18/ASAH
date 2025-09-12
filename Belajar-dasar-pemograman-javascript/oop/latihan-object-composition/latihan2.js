//📝 Latihan 2: Factory + Composition
class Character {
  constructor(name, health, positiion) {
    this.name = name;
    this.health = health;
    this.positiion = positiion;
  }
}

function canAttack(character) {
  return {
    attack: () => console.log(`this ${character.name} atack by weapon`),
  };
}

function canHeal(character) {
  return {
    heal: () => console.log(`this ${character.name} healing`),
  };
}

function createHealer(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canHeal(character));
}

function createFigher(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character));
}

function createPaladin(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character), canHeal(character));
}

const charFigher = createFigher("rambo");
charFigher.attack();

const healer = createHealer("Loli");
healer.heal();
