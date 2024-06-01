function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let brokenShiels = 0;
    for (let i = 1; i <= lostFights; i++) {
            if (i % 2 === 0 && i % 3 === 0) {
                expenses += helmetPrice + swordPrice + shieldPrice;
                brokenShiels++;
                if (brokenShiels % 2 === 0) {
                    expenses += armorPrice;
                }
            } else if (i % 2 === 0) {
                expenses += helmetPrice;
            } else if (i % 3 === 0) {
                expenses += swordPrice;
            }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5)