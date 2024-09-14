function rotateArray(arr, num) {
    
    for (let i = arr.length - 1; num > 0; i += 0) {
        const str = arr[i];
        arr.pop(str);
        arr.unshift(str);
        num--;
    }
    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2)
// 3 4 1 2