function palindromeIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i].toString();
        let reverseNumber = number.split(``).reverse().join(``);
        
        if (number === reverseNumber) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123,323,421,121])