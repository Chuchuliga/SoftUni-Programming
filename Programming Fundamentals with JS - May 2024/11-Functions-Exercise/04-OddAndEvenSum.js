function oddAndEvenSum(num) {
    let sumEven = 0;
    let sumOdd  = 0
    let array = num.toString().split(``).map(Number);
    for (let i = 0; i < array.length; i++) {
        let evenOrOdd = array[i];
        
        if (evenOrOdd % 2 === 0) {
            sumEven += evenOrOdd;
        } else {
            sumOdd += evenOrOdd;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(1000435)