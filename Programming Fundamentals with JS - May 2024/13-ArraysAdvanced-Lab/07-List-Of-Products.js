function listOfProducts(array) {
    let sorted = array.sort();
    
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
// 1.Apples 
// 2.Onions 
// 3.Potatoes 
// 4.Tomatoes