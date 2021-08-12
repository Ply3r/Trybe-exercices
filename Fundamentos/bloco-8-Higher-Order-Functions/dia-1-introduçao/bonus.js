const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 100,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };


const damageDragon = (obj) => Math.floor(Math.random() * (obj.strength - 15) + 15)
const damageWarrior = (obj) => Math.floor(Math.random() * ((obj.strength * 2) - obj.strength) + obj.strength)
const damageMage = (obj) => {
  const damage = Math.floor(Math.random() * (obj.intelligence * 2 - obj.intelligence) + obj.intelligence)
  const mana = obj.mana - 15
  const newObj = {damage: damage, mana: mana}
  return obj.mana < 15 ? {damage: 0, mana: obj.mana} : newObj
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn(func) {
    const damage = func(warrior)
    dragon.healthPoints -= damage
    warrior.damage = damage
  },
  mageTurn(func) {
    const damage = Object.values(func(mage))[0]
    const mana = Object.values(func(mage))[1]
    dragon.healthPoints -= damage
    mage.damage = damage
    mage.mana = mana
  },
  dragonTurn(func) {
    const damage = func(dragon)
    mage.healthPoints -= damage
    warrior.healthPoints -= damage
    dragon.damage = damage
  },
  showTurn() {
    console.log(battleMembers)
  }
};


function letsGame() {
  while( mage.healthPoints > 0 && warrior.healthPoints > 0 && dragon.healthPoints > 0 ) {
    gameActions.warriorTurn(damageWarrior)
    gameActions.mageTurn(damageMage)
    gameActions.dragonTurn(damageDragon)
    gameActions.showTurn()
  }
  if(mage.healthPoints <= 0 && warrior.healthPoints <= 0) {
    return console.log('Dragon Wins')
  }else {
    return console.log('Mage and Warrior Wins')
  }
}
letsGame()