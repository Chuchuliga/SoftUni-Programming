function distinctArray(array) {
    let uniqueNums = [];
    
    for (let num of array) {

        if (!uniqueNums.includes(num)) {
            uniqueNums.push(num);
        }
    }
    console.log(uniqueNums.join(` `));
}

distinctArray([1, 2, 3, 4]) // 1 2 3 4