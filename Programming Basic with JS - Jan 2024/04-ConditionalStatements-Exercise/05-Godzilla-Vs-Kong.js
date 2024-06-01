function godzzilaVsKong(input) {
    let money = Number(input[0]);
    let cast = Number(input[1]);
    let equpment = Number(input[2]);
    let decor = money * 0.10;
    let equpmentPrice = cast * equpment;
    if (cast > 150) {
        equpmentPrice *= 0.90;
    } else if (cast < 150) {
    }

    let moneySpend = decor + equpmentPrice;

    if (moneySpend > money) {
        let moneyNeed = moneySpend - money;
        console.log(`Not enough money!`)
        console.log(`Wingard needs ${moneyNeed.toFixed(2)} leva more.`)
    } else if (moneySpend <= money) {
        let moneyLeft = money - moneySpend;
        console.log(`Action!`)
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
}

godzzilaVsKong(["9587.88", "222", "55.68"]) 