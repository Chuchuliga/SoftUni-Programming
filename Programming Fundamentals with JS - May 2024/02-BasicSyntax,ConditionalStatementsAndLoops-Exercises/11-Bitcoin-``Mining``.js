function bitcoinMining(gForDay) {
    let bitcoinBought = 0;
    let bitcoinPrice = 11949.16;
    let a = 0;
    let curDay = Number(gForDay[a]);
    let days = 1;
    let day = 0;
    let levaForDay = 0;
    while (a < gForDay.length) {

        if (days % 3 === 0) {
            levaForDay += (curDay * 0.70) * 67.51;
        } else {
            levaForDay += curDay * 67.51;
        }

        while (levaForDay >= bitcoinPrice) {
            levaForDay -= bitcoinPrice
            bitcoinBought++;
            
            if (bitcoinBought === 1) {
                day = days;
            }
        }
        days++;
        a++;
        
        if (a < gForDay.length)  {
            curDay = gForDay[a]; 
        }
    }
    console.log(`Bought bitcoins: ${bitcoinBought}`);
    if (bitcoinBought >= 1) { 
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${levaForDay.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300])