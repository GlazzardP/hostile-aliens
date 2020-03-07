const numMotherShips = document.getElementById("motherShipInput");
const numAttackShips = document.getElementById("attackShipInput");
const numDefenseShips = document.getElementById("defenceShipInput");

const totalShips = numAttackShips + numDefenseShips + numMotherShips;
const ships = [];

const shipsSection = document.getElementById("ships");

class Ship {
  constructor(name, hp, damgePoints) {
    this.name = name;
    this.hp = hp;
    this.damgePoints = damgePoints;
  }
  takeHit() {
    this.hp = this.hp - this.damgePoints;
  }
  die() {
    this.hp = 0;
  }
}
for (let index = 0; index < totalShips; index++) {
  let newShip;
  if (index < numMotherShips) {
    newShip = new Ship("MotherShip", 1, 25);
  } else if (index <= numAttackShips) {
    newShip = new Ship("AttackShip", 60, 15);
  } else if (index <= totalShips) {
    newShip = new Ship("DefenseShip", 40, 10);
  }
  ships.push(newShip);
}
const updateHtml = () => {
  shipsSection.innerHTML = "";
  ships.forEach(ship => {
    shipsSection.innerHTML += `<p>${ship.name}: ${ship.hp}</p>`;
  });
};
const endGame = () => {
  ships.forEach(ship => ship.die());
};
const dealDamage = () => {
  const randomIndex = Math.floor(Math.random() * ships.length);
  const randomShip = ships[randomIndex];
  randomShip.takeHit();
  if (randomShip.hp <= 0 && randomShip.name === "MotherShip") {
    endGame();
  } else if (randomShip.hp <= 0) {
    ships.splice(randomIndex, 1);
  }
  updateHtml();
};
document.querySelector("button").addEventListener("click", dealDamage);
updateHtml();
