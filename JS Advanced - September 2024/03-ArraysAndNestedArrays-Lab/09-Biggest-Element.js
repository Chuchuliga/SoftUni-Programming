function biggestElelment(arr) {
    let arr1 = [];

    for (const tempArr of arr) {
        arr1 = arr1.concat(tempArr);
    }

    arr1.sort((a, b) => a - b);
    return arr1.pop();
}

console.log(biggestElelment([[20, 50, 10], [8, 33, 145]]));
// 145