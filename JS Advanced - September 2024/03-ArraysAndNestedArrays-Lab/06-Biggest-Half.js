function biggestHalf(arr) {
    arr.sort((a, b) => a - b);
    const biggest = arr.slice(arr.length / 2, arr.length);
    return biggest;
}

console.log(biggestHalf([4, 7, 3, 5]));
// [5, 7]