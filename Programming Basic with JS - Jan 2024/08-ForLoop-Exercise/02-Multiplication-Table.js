function multiplicationTable(input) {
    let num = Number(input[0]);
    for (let num1 = 1; num1 <= 10; num1++) {
        let num2 = num1 * num;
        console.log(`${num1} * ${num} = ${num2}`);
    }
}

multiplicationTable([`5`])