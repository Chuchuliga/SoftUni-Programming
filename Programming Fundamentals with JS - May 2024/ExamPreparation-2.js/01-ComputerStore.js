function computerStore(array) {
    let totalPrice = 0;
    let taxes = 0;
    let totalPriceWithTaxes = 0;
    for (let i = 0; i < array.length; i++) {
        let prices = array[i];

        while (prices !== `regular` && prices !== `special`) {

            if (prices > 0) {
                totalPrice += Number(prices)
                taxes += prices * 0.20;
                break;
            } else {
                console.log(`Invalid price!`);
                break;
            }
        }
        totalPriceWithTaxes = totalPrice + taxes;
        if (prices === `special`) {
            totalPriceWithTaxes *= 0.90;
        }
    }
    if (totalPrice === 0) {
        console.log(`Invalid order!`);
        return;
    }

    console.log(`Congratulations you've just bought a new computer!`)
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special'])
// Congratulations you've just bought a new computer!
// Price without taxes: 1737.36$
// Taxes: 347.47$ 
// -----------
// Total price: 1876.35$