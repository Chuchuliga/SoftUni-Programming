function reverseAnArrayOfNumbers(number, elements) {
    let newArr = [];
    for (let i = 0; i < number; i++) {
        let element = elements[i];
        newArr.push(element);
    }
    newArr = newArr.reverse().join(` `);
    console.log(newArr);
}

reverseAnArrayOfNumbers()