function orders(product, numbers) {
    switch (product) {
        case `coffee`:
            console.log((numbers * 1.50).toFixed(2));
            break;
        case `coke`:
            console.log((numbers * 1.40).toFixed(2));
            break;
        case `water`:
            console.log((numbers * 1.00).toFixed(2));
            break;
        case `snacks`:
            console.log((numbers * 2.00).toFixed(2));
            break;
    }
}

orders(`water`, 5)
orders(`coffee`, 2)