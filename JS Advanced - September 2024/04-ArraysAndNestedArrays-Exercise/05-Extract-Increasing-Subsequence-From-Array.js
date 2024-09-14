function extractIncreasingSubsetFromArray(arr) {
    let biggestNum = 0;
    const result = [];

    for (const num of arr) {
        
        if (num >= biggestNum) {
            result.push(num);
            biggestNum = num;
        }
    }
    return result;
}

console.log(extractIncreasingSubsetFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// [1, 3, 8, 10, 12, 24]