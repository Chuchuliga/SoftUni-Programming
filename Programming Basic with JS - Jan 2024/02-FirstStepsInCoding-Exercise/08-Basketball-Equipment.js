function basketballEquipment(input){
    let tax = Number(input[0]);
    let shoes = tax - (40/100 * tax);
    let equipment = shoes - (20/100 * shoes);
    let ball = 1/4 * equipment;
    let accessories = 1/5 * ball;
    let price = tax + shoes + equipment + ball + accessories;
    console.log(price)
}

basketballEquipment([`365`])