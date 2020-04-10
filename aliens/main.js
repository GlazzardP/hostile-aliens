const shot = document.getElementById("shot"); 
const explosion = new Audio("../435415__v-ktor__explosion10.wav")


const playAudio = () => { 
  shot.play()
  shot.volume = 0.5;

}

const shipsSection = document.getElementById("ships");

class Ship {
  constructor(name, hp, damgePoints, image) {
    this.name = name;
    this.hp = hp;
    this.damgePoints = damgePoints;
    this.image = image;
  }
  takeHit() {
    this.hp = this.hp - this.damgePoints;
  }
  die() {
    this.hp = 0;
  }
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
      newShip = new Ship("Mother Ship", 1, 15, "./assets/images/585f9891cb11b227491c3599.png");
    } else if (index <= numAttackShips) {
      newShip = new Ship("Attack Ship", 60, 15, "./assets/images/5ba661c3bede2105e7aaeef1.png");
    } else if (index <= totalShips) {
      newShip = new Ship("Defense Ship", 40, 10, "./assets/images/5ba661a8bede2105e7aaeeee.png");
    }
    ships.push(newShip);
  }
  updateHtml();
}


const updateHtml = () => {
  shipsSection.innerHTML = "";
  ships.forEach(ship => {
    shipsSection.innerHTML += 
    `<div>       
      <img src=${ship.image} />
      <p>${ship.name}</p> 
      <p>${ship.hp}</p>
    </div>`;
  });
};

const endGame = () => {
  ships.forEach(ship => ship.die());
  ships.splice(0,ships.length)
  toggleHiddenClass;
};

const dealDamage = () => {
  const randomIndex = Math.floor(Math.random() * ships.length);
  const randomShip = ships[randomIndex];
  randomShip.takeHit();
  if (randomShip.hp <= 0 && randomShip.name === "MotherShip") {
    // explosion.volume = 0.7;
    // explosion.play();
    endGame();
  } else if (randomShip.hp <= 0) {
    ships.splice(randomIndex, 1);
  }
  updateHtml();
};

document.querySelector(".fire").addEventListener("click", dealDamage);


// const toggleHiddenClass = id => {
//   const sectionIds = ["independance"];
//   sectionIds.forEach(el =>
//     document.getElementById(el).classList.remove("hide")
//   );
//   sectionIds.forEach(el =>
//     el === id ? document.getElementById(el).classList.add("show") : null
//   );
// };
