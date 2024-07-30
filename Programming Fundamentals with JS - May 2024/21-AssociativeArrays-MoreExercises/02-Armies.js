function armies(input) {
    let leaders = [];
    const armies = new Map();
    
    for (const command of input) {

        if (command.includes(`arrives`)) {
            let leader = command.slice(0, -8);
            armies.set(leader, new Map());
        } else if (command.includes(`:`)){
            let [leader, army] = command.split(`: `);
            let [armyName, count] = army.split(`, `);
            count = Number(count);

            if (armies.has(leader)) {
                armies.get(leader).set(armyName, count);
            }
        } else if (command.includes(`+`)) {
            let [armyName, count] = command.split(` + `);
            count = Number(count);
            
            for (let [leader, armyMap] of armies.entries()) {

                if (armyMap.has(armyName)) {
                    armyMap.set(armyName, armyMap.get(armyName) + count);
                }
            }
        } else if (command.includes(`defeated`)) {
            let leader = command.slice(0, -9);
            armies.delete(leader);
        }
    }

    for (const [leader, armyMap] of armies) {
        let total = 0;

        for (const [armyName, count] of armyMap) {
            total += count;
        }
        leaders.push([leader, total])
    }

    leaders.sort((a, b) => b[1] - a[1]);

    for (const [leader, total] of leaders) {
        console.log(`${leader}: ${total}`);

        let array = [...armies.get(leader)]
        array.sort((a, b) => b[1] - a[1]);

        for (const [armyName, count] of array) {
            console.log(`>>> ${armyName} - ${count}`);
        }
    }
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])
// Porter: 58507
// >>> Legion - 55302
// >>> Retix - 3205
// Findlay: 39040
// >>> Britox - 39040