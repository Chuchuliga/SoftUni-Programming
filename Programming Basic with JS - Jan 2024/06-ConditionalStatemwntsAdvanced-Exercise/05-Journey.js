function journey(input) {
    let buget = Number(input[0]);
    let season = input[1];
    let distance = ``;
    let cost = 0;
    let journey = ``;
    if (buget <= 100) {
        distance = `Bulgaria`;
        if (season == `summer`) {
            cost = buget * 0.30;
            journey = `Camp`;
        } else {
            cost = buget * 0.70;
            journey = `Hotel`;
        }
    } else if (buget <= 1000) {
        distance = `Balkans`;
        if (season == `summer`) {
            cost = buget * 0.40;
            journey = `Camp`;
        } else {
            cost = buget * 0.80;
            journey = `Hotel`;
        }
    } else if (buget > 1000) {
        distance = `Europe`;
        cost = buget * 0.90;
        journey = `Hotel`;
    } 
    console.log(`Somewhere in ${distance}`)
    console.log(`${journey} - ${cost.toFixed(2)}`)
}

journey(["1500", "summer"])