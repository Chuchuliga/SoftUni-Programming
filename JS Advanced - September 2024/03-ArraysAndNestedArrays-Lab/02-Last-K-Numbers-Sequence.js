function lastKNumbersSequence(n, k) {
    let result = [1];
    let m = k;
    let j = 0;
    
    for (let i = 1; i < n; i++) {
        let nums = result.slice(j, k)
        let sum = 0;

        if (result.length >= m) {
            j++; 
            k++;
        }

        for (const num of nums) {
            sum += num;
        }
        result.push(sum);
    }
    return result;
}

console.log(lastKNumbersSequence(6, 3));
// [1, 1, 2, 4, 7, 13]