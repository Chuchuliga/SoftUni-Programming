function condenseArrayToNumber(numbers) {
    while (numbers.length > 1) {
        let array = [];

        for (let i = 0; i < numbers.length - 1; i++) {
            array[i] = numbers[i] + numbers[i + 1];
        }
        numbers = array;
    }
    console.log(Number(numbers));
}

condenseArrayToNumber()