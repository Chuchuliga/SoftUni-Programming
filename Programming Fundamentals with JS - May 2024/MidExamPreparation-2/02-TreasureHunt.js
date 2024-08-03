function treasureHunt(array) {
    let stolenItems = [];
    let chest = array.shift().split(`|`);

    for (let i = 0; i < array.length; i++) {
        let commands = array[i].split(` `);
        let command = commands.shift();

        switch (command) {
            case `Loot`:
                for (let j = 0; j < commands.length; j++) {
                    let item = commands[j];
                    if (!chest.includes(item)) {
                        chest.unshift(item);
                    }
                }
                break;
            case `Drop`:
                let index = Number(commands.shift());
                if (index < chest.length && index >= 0) {
                    let removed = chest.splice(index, 1).toString();
                    chest.push(removed);
                }
                break;
            case `Steal`:
                let count = Number(commands.shift());
                if (count > chest.length) {
                    count = chest.length
                }
                stolenItems = chest.splice(-count, count);
                console.log(stolenItems.join(`, `));
                break;
        }
    }

    if (chest.length === 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let totalLenght = 0;
        for (let item of chest) {
            totalLenght += item.length;
        }
        let averageGain = totalLenght / chest.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"])
// Medallion, Cup, Gold
// Avarage treasure gain: 5.40 pirate credits.