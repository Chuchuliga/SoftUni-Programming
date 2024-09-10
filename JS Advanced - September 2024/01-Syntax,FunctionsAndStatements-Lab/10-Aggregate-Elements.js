function aggregateElements(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let concat = '';

    for (const num of arr) {
        sum1 += num;
        sum2 += 1 / num;
        let str = num.toString();
        concat += str;
    }
    console.log(sum1);
    console.log(sum2);
    console.log(concat);
}

aggregateElements([1, 2, 3])
// 6
// 1.8333333333333333
// 123