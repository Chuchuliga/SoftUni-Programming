function magicSum(array, number) {
    let newArray = [];
    while (array.length > 0) {

        let number1 = array.shift();
        
        for (let j = 0; j < array.length; j++) {
            let number2 = array[j];
            
            if (number === number1 + number2 && number1 !== number2) {
                newArray.push(number1);
                newArray.push(number2);
                console.log(newArray.join(` `));
            }
            newArray = [];
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)