function toyShop(input) {
    let priceTrip = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let miner = Number(input[4]);
    let truck = Number(input[5]);
    let allToys = puzzle + doll + bear + miner + truck;
    let priceAllToys = puzzle * 2.60 + doll * 3 + bear * 4.10 + miner * 8.20 + truck * 2;
    if (allToys >= 50) {
        priceAllToys *= 0.75;
    } else if (allToys < 50) {
    }

    priceAllToys *= 0.90;

    if (priceAllToys >= priceTrip) {
        let moneyLeft = priceAllToys - priceTrip;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    } else if (priceAllToys < priceTrip) {
        let moneyNeed = priceTrip - priceAllToys;
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`);
    }
}

toyShop(["320", "8", "2", "5", "5", "1"])