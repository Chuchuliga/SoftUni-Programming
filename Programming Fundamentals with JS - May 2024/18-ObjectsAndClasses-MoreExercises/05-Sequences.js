function sequences(list) {
    const uniqueLists = Array.from(new Set(list.map(el => JSON.stringify(JSON.parse(el).sort((a, b) => b - a)))));
    const output = uniqueLists.map(el => JSON.parse(el).sort((a, b) => b - a));
    output.sort((a, b) => a.length - b.length);
    for (const el of output) {
        console.log(`[${el.join(', ')}]`); 
    }
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"])
// [13, 10, 2, 1, 0, -17]
// [4, 3, 2, 1, 0, -1, -2, -3]