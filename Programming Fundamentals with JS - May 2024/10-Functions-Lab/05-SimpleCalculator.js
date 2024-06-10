function simpleCalculator(num1, num2, operator) {
    switch (operator) {
        case `multiply`:
            console.log(num1 * num2);
            break;
        case `divide`:
            console.log(num1 / num2);
            break;
        case `add`:
            console.log(num1 + num2);
            break;
        case `subtract`:
            console.log(num1 - num2);
            break;
    }
}

simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')