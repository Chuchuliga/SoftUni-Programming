function negativePositiveNumbers(arr) {
    const result = [];

    for (const num of arr) {
        
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }
    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9])
// -2
// 7
// 8
// 9