function suppliesForScool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let clener = Number(input[2]);
    let discount = Number(input[3]) / 100;
    let pricePens = pens * 5.80;
    let priceMarkers = markers * 7.20;
    let priceClener = clener * 1.20;
    let price = pricePens + priceMarkers + priceClener
    let priceWithDiscount = price - (price * discount)
    console.log(priceWithDiscount)
}

suppliesForScool(["2 ", "3 ", "4 ", "25 "]);