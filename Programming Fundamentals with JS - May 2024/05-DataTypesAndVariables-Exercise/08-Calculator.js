function calculator(num1, operator, num2) {
    switch (operator) {
        case `+`:
            num1 += num2;
            break;
        case `-`:
            num1 -= num2;
            break;
        case `/`:
            num1 /= num2;
            break;
        case `*`:
            num1 *= num2;
            break;
    }
    console.log(num1.toFixed(2));
}

calculator(5, `+`, 10)