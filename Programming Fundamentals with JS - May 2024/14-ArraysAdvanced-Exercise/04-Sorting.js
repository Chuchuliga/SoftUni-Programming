function sorting(array) {
    let resultArray = [];
    array.sort((a, b) => b - a);

    while (array.length > 0) {
        const firstElement = array.shift();
        resultArray.push(firstElement);
        
        const lastElement = array.pop();
        resultArray.push(lastElement);
    }
    console.log(resultArray.join(` `));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]) // 94 1 69 2 63 3 52 18 31 21