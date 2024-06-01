function addAndSubtract(array) {
    let sum = 0;
    let newSum = 0;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        sum += number;
        if (number % 2 === 0) {
            number += i;
        } else {
            number -= i;
        }
        newArray.push(number)
        newSum += number
    }
    console.log(newArray);
    console.log(sum);
    console.log(newSum);
}

addAndSubtract()