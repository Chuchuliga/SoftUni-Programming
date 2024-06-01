function sumOfNumbers(input) {

    let numString = input[0];
    let sum = 0;

    for(let index = 0; index < numString.length; index++) {
        let num = Number(numString[index]);
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers([`1234`])