function multiplicationTable(n) {
    let product = 0;
    for (let times = 1; times <= 10; times++) {
        product = n * times;
        console.log(`${n} X ${times} = ${product}`)
    }
}

multiplicationTable(5)