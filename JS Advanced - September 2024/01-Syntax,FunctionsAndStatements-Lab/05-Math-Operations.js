function mathOperations(num1, num2, symbol) {
    let result;

    switch (symbol) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break; 
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '**': result = num1 ** num2; break;
    }
    console.log(result);
}

mathOperations(5, 6, '+')
// 11