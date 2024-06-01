function fishingBoat(input) {
    let money = Number(input[0]);
    let season = input[1];
    let people = Number(input[2]);
    let price = 0;
    switch (season) {
        case `Spring`:
            price = 3000;
            break;
        case `Summer`:
        case `Autumn`:
            price = 4200;
            break;
        case `Winter`:
            price = 2600;
            break;
    }

    if (people <= 6) {
        price *= 0.9;
    } else if (people <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    } 

    if (people % 2 == 0 && season != `Autumn`) {
        price *= 0.95 
    }
    if (money >= price) {
        let moneyLeft = money - price;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeed = price - money;
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva.`)
    }

}

fishingBoat(["3000", "Summer", "11"])