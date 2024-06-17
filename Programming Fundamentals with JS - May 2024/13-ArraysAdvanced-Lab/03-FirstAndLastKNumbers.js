function firstAndLastKNumbers(array) {
    let k = array[0];
    let copy = array.slice(1)
    let result1 = copy.slice(0, k);
    let result2 = copy.slice(-k);
    console.log(result1.join(` `));
    console.log(result2.join(` `));
}

firstAndLastKNumbers([2, 7, 8, 9])