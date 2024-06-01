function petShop(input){
    let dogFood = Number(input[0]) * 2.50;
    let catFood = Number(input[1]) * 4;
    let price = dogFood + catFood;
    console.log(`${price} lv.`)
}

petShop(["13", "9"]);