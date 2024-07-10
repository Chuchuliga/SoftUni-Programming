function storage(array) {
    const map = new Map();
    
    for (const info of array) {
        const [product, quantuty] = info.split(` `);
    
        if (map.has(product)) {
            let newQuantity = map.get(product) + Number(quantuty);
            map.set(product, newQuantity);
        } else {
            map.set(product, +quantuty)
        }
    }

    for (const [product, quantuty] of map) {
        console.log(`${product} -> ${quantuty}`);
    }
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])
// tomatoes -> 10
// coffee -> 45
// olives -> 100