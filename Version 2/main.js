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
  // reset() {
  //   this.hp = this.hp;
  // }
}

let ships = [];

const createGame = () => { 
  ships = [];
  const mummyships = parseInt(document.getElementById("motherShipInput").value)
  const defShips = parseInt(document.getElementById("defenceShipInput").value)
  const attShips = parseInt(document.getElementById("attackShipInput").value)
  
  const numAttackShips = attShips;
  const numDefenseShips = defShips;
  const numMotherShips = mummyships;

  const totalShips = numAttackShips + numDefenseShips + numMotherShips;

  for (let index = 0; index < totalShips; index++) {
    let newShip;
    if (index < numMotherShips) {
      newShip = new Ship("MotherShip", 100, 5);
    } else if (index <= numAttackShips) {
      newShip = new Ship("AttackShip", 60, 15);
    } else if (index <= totalShips) {
      newShip = new Ship("DefenseShip", 40, 10);
    }
    ships.push(newShip);
  }
  updateHtml();
  // console.log(ships);
}

const updateHtml = () => {
  shipsSection.innerHTML = "";
  ships.forEach(ship => {
    shipsSection.innerHTML += `<div>${ship.name}: ${ship.hp}</div>`;
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

document.querySelector(".fire").addEventListener("click", dealDamage);