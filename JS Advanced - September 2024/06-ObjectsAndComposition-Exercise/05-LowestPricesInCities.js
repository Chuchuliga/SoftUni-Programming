function lowestPricesInCities(cityProducts) {
    const uniqueCityPriceLowest = []
    const findProduct = (productToFind) => uniqueCityPriceLowest.find(product => product.name === productToFind);
    cityProducts.forEach(city => {
        const [town, name, price] = city.split(' | ').map(x => isNaN(x) ? x : Number(x));
        const product = findProduct(name);

        if (product && product.hasOwnProperty('price') && price < product.price) {
            product.town = town;
            product.name = name;
            product.price = price;

        } else if (!product) {
            uniqueCityPriceLowest.push({
                town, name, price
            });
        }
    });
    Object.values(uniqueCityPriceLowest).forEach(product => {
        console.log(`${product.name} -> ${product.price} (${product.town})`);
    });
}

lowestPricesInCities(['Sample Town | Sample Product | 1000', 'Sample Town | Orange | 2', 'Sample Town | Peach | 1', 'Sofia | Orange | 3', 'Sofia | Peach | 2', 'New York | Sample Product | 1000.1', 'New York | Burger | 10'])
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)