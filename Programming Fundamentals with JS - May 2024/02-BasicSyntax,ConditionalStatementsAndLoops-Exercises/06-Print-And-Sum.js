function printAndSum(start, end) {
    let sum = 0;
    let b = ``;
    for (let a = start; a <= end; a++) {
        b += a + ` `;
        sum += a;
    }
    console.log(b)
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)