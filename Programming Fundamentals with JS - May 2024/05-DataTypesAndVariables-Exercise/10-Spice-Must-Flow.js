function spiceMustFlow(startingYield) {
    let consumes = 0;
    let days = 0;
    for (let day = 1; startingYield >= 100; day++) {
        if (startingYield >= 26) {
            consumes += startingYield - 26;
        }
        startingYield -= 10;
        days++;
    }
    if (days > 0) {
        consumes -= 26;
    }
    console.log(days);
    console.log(consumes);
}

spiceMustFlow(99)