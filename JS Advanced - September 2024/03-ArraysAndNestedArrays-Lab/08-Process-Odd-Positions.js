function processOddPositions(arr) {
    const result = [];

    for (let i = 1; i < arr.length; i += 2) {
        const num = arr[i];
        result.push(num * 2);
    }
    return result.reverse();
}

console.log(processOddPositions([10, 15, 20, 25]));
// 50 30