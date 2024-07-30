function aMinerTask(input) {
    let map = new Map();

    for (let i = 0; i < input.length;) {
        const resource = input.shift();
        const quantity = Number(input.shift());

        if (!map.has(resource)) {
            map.set(resource, quantity);
        } else {
            map.set(resource, map.get(resource) + quantity);
        }
    }

    for (const [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }
}

aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17'])
// Gold -> 155
// Silver -> 10
// Copper -> 17   