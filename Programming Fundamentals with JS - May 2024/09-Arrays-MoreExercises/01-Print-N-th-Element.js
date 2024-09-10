function printNthElement(array) {
    let newArray = [];
    let N = array.slice(-1);
    array.pop()
    for (let i = 0; i < array.length; i += Number(N)) {
        let element = array[i];
        newArray.push(element);
    }
    console.log(newArray.join(` `));
}

printNthElement(['1', '2', '3', '4', '5', '6'] )