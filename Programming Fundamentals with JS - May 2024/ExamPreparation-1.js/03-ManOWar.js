function manOWar(array) {
    let piratShip = array.shift().split(`>`);
    let warShip = array.shift().split(`>`);
    let maxHealth = array.shift();

    for (let i = 0; i < array.length; i++) {
        let commands = array[i].split(` `);
        let command = commands.shift();
        let damage = 0;
        let index = 0;
        
            
        switch (command) {
            case `Fire`:
                index = Number(commands.shift());
                damage = Number(commands.shift());
                if (index < warShip.length) {
                    warShip[index] -= damage
                    if (warShip[index] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
                break;
            case `Defend`:
                let startIndex = Number(commands.shift());
                let endIndex = Number(commands.shift());
                damage = Number(commands.shift());
                if (startIndex >= 0 &&  startIndex < piratShip.length && endIndex >= 0 && endIndex < piratShip.length) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        piratShip[i] -= damage;
                        if (piratShip[i] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            return;
                        }
                    }
                }
                break;
            case `Repair`:
                index = Number(commands.shift());
                let health = Number(commands.shift());
                if (index < piratShip.length) {
                    if (piratShip[index] + health < maxHealth) {
                        piratShip[index] = Number(piratShip[index]) + health;
                    } else {
                        piratShip[index] = maxHealth;
                    }
                }
                break;
            case `Status`:
                let count = 0;
                for (let i = 0; i < piratShip.length; i++) {
                    if (piratShip[i] < maxHealth * 0.20) {
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
            case `Retire`:
                let piratShipSum = 0;
                let warShipSum = 0;
                for (let i = 0; i < piratShip.length; i++) {
                    piratShipSum += Number(piratShip[i]);
                }
                for (let j = 0; j < warShip.length; j++) {
                    warShipSum += Number(warShip[j]);
                    
                }
                console.log(`Pirate ship status: ${piratShipSum}`);
                console.log(`Warship status: ${warShipSum}`);
                return;
        }   
    }
}

manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]) 
// 2 sections need repair. 
// Pirate ship status: 135 
// Warship status: 205