function thePyramidOfKingDjoser(base, increment) {
    let allStone = 0;
    let allMarble = 0;
    let allLapis = 0;
    let allGold = 0;
    let level = 1;
    for (let size = base * base; base !== 1 && base !== 2; base -= 2) {
        if (level % 5 == 0) {
            allStone += (base - 2) * (base - 2);
            allLapis += size - (base - 2) * (base - 2);;
        } else {
            allStone += (base - 2) * (base - 2);
            allMarble += size - (base - 2) * (base - 2);
        }
        size = (base - 2) * (base - 2);
        level++;
        
    }
    if (base === 1 || base === 2) {
        allGold += base * base;
    }
    console.log(`Stone required: ${Math.ceil(allStone * increment)}`);
    console.log(`Marble required: ${Math.ceil(allMarble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(allLapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(allGold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(level * increment)}`);
}
thePyramidOfKingDjoser(23, 0.5)