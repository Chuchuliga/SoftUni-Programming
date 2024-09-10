function nonDecreasingSubset(array) {
    let newArray = [];
    let biggestOne = array[0];
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (number >= biggestOne) {
            newArray.push(number);
            biggestOne = number;
        }
    }
    console.log(newArray.join(` `));
}

nonDecreasingSubset([ 1, 2, 3, 4])