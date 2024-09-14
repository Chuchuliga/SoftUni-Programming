function printEveryNthElementFromAnArray(arr, num) {
    const result = [];
    for (let i = 0; i < arr.length; i += num) {
        const str = arr[i];
        result.push(str);
    }
    return result;
}

console.log(printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2));
// ['5', '31', '20']