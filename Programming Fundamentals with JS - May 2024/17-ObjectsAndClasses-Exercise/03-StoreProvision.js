function storeProvision(stock, ordered) {
    let products = [];
    let quantities = [];

    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);
        products.push(product);
        quantities.push(quantity);
    }

    for (let j = 0; j < ordered.length; j += 2) {
        let product = ordered[j];
        let quantity = Number(ordered[j + 1]);

        if (products.includes(product)) {
            let index = products.indexOf(product);
            quantities[index] += quantity;
        } else {
            products.push(product);
            quantities.push(quantity);
        }
    }

    for (let k = 0; k < products.length; k++) {
        console.log(`${products[k]} -> ${quantities[k]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
// Chips -> 5
// CocaCola -> 9
// Bananas -> 44
// Pasta -> 11
// Beer -> 2
// Flour -> 44
// Oil -> 12
// Tomatoes -> 70