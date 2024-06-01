function newHous(input) {
    let name = input[0];
    let amount = Number(input[1]);
    let money = Number(input[2]);
    let discount = 0;
    let increase = 0;
    let allFlowers = 0;
    if (name == `Roses`) {
        allFlowers = amount * 5;
        if (amount > 80) {
            discount = allFlowers * 0.10;
            price = allFlowers - discount;
        } else {
            price = allFlowers
        }
    } else if (name == `Dahlias`) {
        allFlowers = amount * 3.80;

        if (amount > 90) {
            discount = allFlowers * 0.15;
            price = allFlowers - discount;
        } else {
            price = allFlowers
        }
    } else if (name == `Tulips`) {
        allFlowers = amount * 2.80;
        if (amount > 80) {
            discount = allFlowers * 0.15;
            price = allFlowers - discount;  
        } else {
            price = allFlowers
        }
    } else if (name == `Narcissus`) {
        allFlowers = amount * 3;
        if (amount < 120) {
            increase = allFlowers * 0.15;
            price = allFlowers + increase
        } else {
            price = allFlowers
        }
    } else if (name == `Gladiolus`) {
        allFlowers = amount * 2.50;
        if (amount < 80) {    
            increase = allFlowers * 0.20;
            price = allFlowers + increase;
        } else {
            price = allFlowers
        }
    }
    if (money >= price) {
        let moneyLeft = money - price;
        console.log(`Hey, you have a great garden with ${amount} ${name} and ${moneyLeft.toFixed(2)} leva left.`) 
    } else if (price > money) {
        let moneyNeed = price - money;
        console.log(`Not enough money, you need ${moneyNeed.toFixed(2)} leva more.`)
    }
}

newHous(["Roses", "55", "250"])