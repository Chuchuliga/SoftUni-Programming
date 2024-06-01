function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let number = Number(numbers[i]);
        if (number % 2 === 0) {
            sum += number;
        }
    }
    console.log(sum);
}

sumEvenNumbers()