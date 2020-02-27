class ship { 
    constructor(health, shotImpact, name){
    
    this.health = health;
    this.isAlive = true;
    this.shotImpact = shotImpact;
    this.name = name;
    }

    // died() { 
    // this.isAlive - false;
    // }

    // showLifePoints() { 
    // return `${this.health}`
    // }

    takesHit() { 
    this.health = this.health - this.shotImpact;
    }

    dies() { 
        const life = getElementById(ship);
        if (life.health > 0){
            style.display = 
        }
    }
}

// class motherShip extends ship{

//     takesHit() { 
//         this.health = this.health - 9;
//         console.log(this.health)
//     }
// }

// class defenceShip extends ship { 
//     takesShot () { 
//         this.health = this.health - 10;
//     }
// }

const ship1 = new ship(100, 9, "ship1");
const ship2 = new ship(80, 10, "ship2");
const ship3 = new ship(80, 10, "ship3");
const ship4 = new ship(80, 10, "ship4");
const ship5 = new ship(80, 10, "ship5");
const ship6 = new ship(80, 10, "ship6");
const ship7 = new ship(45, 12, "ship7");
const ship8 = new ship(45, 12, "ship8");
const ship9 = new ship(45, 12, "ship9");
const ship10 = new ship(45, 12, "ship10");
const ship11 = new ship(45, 12, "ship11");
const ship12 = new ship(45, 12, "ship12");
const ship13 = new ship(45, 12, "ship13");
const ship14 = new ship(45, 12, "ship14");


const ships = [ship1, ship2, ship3, ship4, ship5, ship6, ship7, ship8, ship9, ship10, ship11, ship12, ship13, ship14]

// const ship1 = new motherShip(100);
// ships.takesHit();
// console.log(ship1);

const displayShips = () => { 
    ships.forEach(ship => {
    // console.log(ship);
    const id = ship.name;
    document.getElementById(id).innerHTML = `${ship.health} : ${ship.name}` 
})}

const shootAlien = () => {
    const randomShip = Math.floor(Math.random() * ships.length)
    if (randomShip.health < 1){"delete element and find new element to attack"}
    ships[randomShip].takesHit();
    displayShips();    
    // console.log(ships[randomShip].health);
    // document.getElementById(id).innerHTML = `${ships.health}`;
}
