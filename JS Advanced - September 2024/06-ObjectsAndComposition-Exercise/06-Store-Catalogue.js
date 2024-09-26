function storeCatalogue(array) {
    const products = {}
    array.forEach(x => {
        const [name, price] = x.split(' : ')
        const capitalLetter = name[0]
        if (!products.hasOwnProperty(capitalLetter)) products[capitalLetter] = {}
        products[capitalLetter][name] = price
    })
    Object.keys(products).sort().forEach(x => {
        console.log(x)
        Object.keys(products[x])
            .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
            .forEach(p => console.log(`  ${p}: ${products[x][p]}`))
    })
}

storeCatalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])
// A
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499