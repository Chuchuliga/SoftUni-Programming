function serializeString(input) {
    const map = new Map();
    input = input.shift();

    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        
        if (!map.has(char)) {
            map.set(char, new Set());
        }
        map.get(char).add(i);
    }
    
    for (const [char, indexes] of map) {
        let result = [];
        
        for (const index of indexes) {
            result.push(index);
        }
        console.log(`${char}:${result.join(`/`)}`);
    }
}

serializeString(['avjavamsdmcalsdm'])
// a:0/2/4/6
// b:1/3/5