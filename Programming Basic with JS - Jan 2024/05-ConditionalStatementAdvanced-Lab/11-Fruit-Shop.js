function fruitShop(input) {
    let price = 0;
    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);
    let message = ``;
    if (day == `Monday` || day == `Tuesday` || day == `Wednesday` || day == `Thursday` || day == `Friday`) {
        switch (fruit) {
            case `banana`:
                price = amount * 2.50;
                console.log(price.toFixed(2));
                break;
            case `apple`:
                price = amount * 1.20;
                console.log(price.toFixed(2));
                break;
            case `orange`:
                price = amount * 0.85;
                console.log(price.toFixed(2));
                break;
            case `grapefruit`:
                price = amount * 1.45;
                console.log(price.toFixed(2));
                break;
            case `kiwi`:
                price = amount * 2.70;
                console.log(price.toFixed(2));
                break;
            case `pineapple`:
                price = amount * 5.50;
                console.log(price.toFixed(2));
                break;
            case `grapes`:
                price = amount * 3.85;
                console.log(price.toFixed(2));
                break;
            default:
                message = `error`;
                console.log(message);
                break;    
        } 
    } 
    else if (day == `Saturday` || day == `Sunday`) {
        switch (fruit) {
            case `banana`:
                price = amount * 2.70;
                console.log(price.toFixed(2));
                break;
            case `apple`:
                price = amount * 1.25;
                console.log(price.toFixed(2));
                break;
            case `orange`:
                price = amount * 0.90;
                console.log(price.toFixed(2));
                break;
            case `grapefruit`:
                price = amount * 1.60;
                console.log(price.toFixed(2));
                break;
            case `kiwi`:
                price = amount * 3.00;
                console.log(price.toFixed(2));
                break;
            case `pineapple`:
                price = amount * 5.60;
                console.log(price.toFixed(2));
                break;
            case `grapes`:
                price = amount * 4.20;
                console.log(price.toFixed(2));
                break;
            default:
                message = `error`;
                console.log(message);
                break;
        }
    } else {
        console.log(`error`)
    }
}

fruitShop(["beer", "Friday", "3"])