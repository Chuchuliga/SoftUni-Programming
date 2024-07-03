function catalogue(array) {
    let output = [];
    let products = []; 
    let alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

    for (let i = 0; i < array.length; i++) {
        let product = array[i].split(` : `).join(`: `);
        products.push(product);
    }
    products.sort((a, b) => a.localeCompare(b));

    for (let j = 0; j < products.length; j++) {

        for (let k = 0; k < alphabet.length; k++) {
            let lether = alphabet[k];

            if (products[j][0] === lether) {

                if (!output.includes(lether)) {
                    output.push(lether);
                }
                output.push(`  ${products[j]}`);
            }
        }
    }
    console.log(output.join(`\n`));
}

catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])
// A
//   Anti-Bug Spray: 15
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