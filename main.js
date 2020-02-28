class ship { 
    constructor(health, shotImpact, name){
    
    this.health = health;
    this.shotImpact = shotImpact;
    this.name = name;
    }

    takesHit() { 
    this.health = this.health - this.shotImpact;
    }

    dead() { 
    document.getElementById(this.name).style.display = "none";
}
}

class motherShip extends ship{
    
    kamikaze() { 
     const allDivs = document.querySelectorAll("div");
     console.log(allDivs);
     allDivs.forEach((div) => {
        div.style.display = "none";
     }) 
     //.style.display = "none";  
    }

}

const ship1 = new motherShip(100, 9, "ship1");
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
    document.getElementById(id).innerHTML = `${ship.name}: ${ship.health}` 
})}

const shootAlien = () => {
    const randomShip = Math.floor(Math.random() * ships.length)
    ships[randomShip].takesHit();
    if (ships[randomShip].health < 1){
        ships[randomShip].dead();
    }
    if (ships[0].health < 1) { 
        ships[0].kamikaze();
    }
    displayShips();    
    // console.log(ships[randomShip].health);
    // document.getElementById(id).innerHTML = `${ships.health}`;
}


// const filterAliveShips = (input) => { 
//     if(this.health >= 1){
//         return true;
//     } else
//     return false;
// }