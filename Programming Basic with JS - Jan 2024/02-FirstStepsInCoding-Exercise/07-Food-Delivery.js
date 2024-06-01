function foodDelivery(input){
    let chiken = Number(input[0]);
    let fish = Number(input[1]);
    let vegeterian = Number(input[2]);
    let delivery = 2.50;
    let priceChiken = chiken * 10.35;
    let priceFish = fish * 12.40;
    let priceVegeterian = vegeterian * 8.15;
    let menuPrice = priceChiken + priceFish + priceVegeterian;
    let desert = 0.20 * menuPrice;
    let price = menuPrice + desert + delivery;
    console.log(price)
}

foodDelivery([`2`, `4`, `3`])