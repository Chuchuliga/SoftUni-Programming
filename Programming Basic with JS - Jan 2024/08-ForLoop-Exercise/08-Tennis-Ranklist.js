function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let points = Number(input[1]);

    let seasonPoint = 0;
    let winCount = 0;

    for (let i = 2; i < input.length; i++) {
        let result = input[i];

        if (result == `W`) {
            winCount++;
            seasonPoint += 2000;
        } else if (result == `F`) {
            seasonPoint += 1200;
        } else if (result == `SF`) {
            seasonPoint += 720;
        }

    }

    console.log(`Final points: ${points + seasonPoint} `)
    
    let avgPoint = seasonPoint / tournaments;
    console.log(`Average points: ${Math.floor(avgPoint)}`)

    let winPercent = (winCount / tournaments) * 100;
    console.log(`${winPercent.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])