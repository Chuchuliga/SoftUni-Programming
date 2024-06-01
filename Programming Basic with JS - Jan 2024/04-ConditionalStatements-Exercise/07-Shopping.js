function shopping(input) {
    let money = Number(input[0]);
    let videocard = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);
    let priceVideocard = videocard * 250;
    let priceProcessor = processor * (priceVideocard * 0.35);
    let priceRam = ram * (priceVideocard * 0.10);
    let finalPrice = priceVideocard + priceProcessor + priceRam;
    if (videocard > processor) {
        finalPrice *= 0.85
    }
    if (money >= finalPrice) {
        let moneyLeft = money - finalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    } else if (money < finalPrice) {
        let moneyNeed = finalPrice - money;
        console.log(`Not enough money! You need ${moneyNeed.toFixed(2)} leva more!`)
    }
}

shopping(["920.45",

"3",

"1",

"1"]) 