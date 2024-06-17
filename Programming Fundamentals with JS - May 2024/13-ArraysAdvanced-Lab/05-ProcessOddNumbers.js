function processOddNumbers(array) {
    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        let num = array[index];

        if (index % 2 !== 0) {
            let oddNum = num * 2;
            newArray.unshift(oddNum);
        }
    }
    console.log(newArray.join(` `));
}

processOddNumbers([10, 15, 20, 25]) // 50 30