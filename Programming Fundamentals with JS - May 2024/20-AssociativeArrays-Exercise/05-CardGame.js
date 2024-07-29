function cardGame(array) {
    let map1 = new Map();
    let map2 = new Map();

    const power = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };

    const type = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1 
    };

    for (const info of array) {
        let [name, cards] = info.split(`: `)
        cards = cards.split(`, `);
        let sum = 0;

        if (!map1.has(name)) {
            map1.set(name, new Set());
        }

        for (const card of cards) {

            if (!map1.get(name).has(card)) {
                let tempPower = card.slice(0,-1);
                let tempType = card.slice(-1);
                let value = power[tempPower] * type[tempType];
                map1.get(name).add(card);
                sum += value;
            }
        }

        if (!map2.has(name)) {
            map2.set(name, sum);
        } else {
            map2.set(name, map2.get(name) + sum);
        }
    }

    for (const [key, value] of map2) {
        console.log(`${key}: ${value}`);
    }
}

cardGame(['Peter: 2C, 4H, 9H, AS, QS', 'Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Andrea: QH, QC, QS, QD', 'Tomas: 6H, 7S, KC, KD, 5S, 10C', 'Andrea: QH, QC, JS, JD, JC', 'Peter: JD, JD, JD, JD, JD, JD'])
// Peter: 167
// Tomas: 175
// Andrea: 197