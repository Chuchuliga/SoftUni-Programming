function carWash(array) {
    let value = 0;
    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        switch (command) {
            case `soap`:
                value += 10;
                break;
            case `water`:
                value += value * 0.20;
                break;
            case `vacuum cleaner`:
                value += value * 0.25;
                break;
            case `mud`:
                value *= 0.90;
                break;
        }
        
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])