function jansNation(arr) {
    const stack = [];

    for (const el of arr) {

        if (typeof el === 'number') {
            stack.push(el);
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            if (operand1 === undefined || operand2 === undefined) {
                console.log('Error: not enough operands!');
                return;
            }

            switch (el) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
            }
        }
    }

    if (stack.length !== 1) {
        console.log('Error: too many operands!');
        return;
    }
    console.log(stack[0]);
}

jansNation([5, 3, 4, '*', '-']);
// -7