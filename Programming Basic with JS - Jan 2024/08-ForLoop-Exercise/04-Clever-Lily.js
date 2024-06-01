function cleverLily(input) {

    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let moneySaved = 0;
    let moneyGiven = 10;

    for (let bday = 1; bday <= age; bday++) {
        if (bday % 2 !== 0) {
            moneySaved += pricePerToy;
        } else {
            moneySaved += moneyGiven - 1;
            moneyGiven += 10;
        }

    }

    if (moneySaved >= washerPrice) {
        let moneyLeft = moneySaved - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeed = washerPrice - moneySaved;
        console.log(`No! ${moneyNeed.toFixed(2)}`);
    }
}

cleverLily([`10`, `170.00`, `6`])