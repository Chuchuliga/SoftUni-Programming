function buildAWall(array) {
    let sum = [];
    let pesos = 0;
    let day = 0;
    let crew = array.map(Number);
    
    while (true) {

        for (let i = 0; i < crew.length; i++) {
            if (crew[i] < 30) {
                crew[i]++;
                day += 195;
            }
        }

        if (day === 0) {
            console.log(sum.join(`, `));
            console.log(`${pesos * 1900} pesos`);
            break;
        }
        sum.push(day);
        pesos += day;
        day = 0;
    }
}

buildAWall([21, 25, 28])
// 585, 585, 390, 390, 390, 195, 195, 195, 195 
// 5928000 pesos