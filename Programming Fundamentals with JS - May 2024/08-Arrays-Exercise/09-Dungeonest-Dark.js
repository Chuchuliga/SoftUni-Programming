function dungeonestDark(array) {
    let string = array[0];
    let rooms = string.split(`|`);
    
    let health = 100;
    let coins = 0; 
    let roomCount = 1;

    for (let room of rooms) {
        let tokens = room.split(` `);
        let text = tokens[0];
        let value = Number(tokens[1]);

        if (text === `potion`) {

            if (health + value > 100) {
                value = 100 - health;
            }
            health += value;
            console.log(`You healed for ${value} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (text === `chest`) {
            coins += value;
            console.log(`You found ${value} coins.`);

        } else {
            health -= value;

            if (health > 0) {
                console.log(`You slayed ${text}.`);
            } else {
                console.log( `You died! Killed by ${text}.`);
                console.log( `Best room: ${roomCount}`);
                break;
            }
        }
        roomCount++;
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"] )