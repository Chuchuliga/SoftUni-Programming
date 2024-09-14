function magicMatrices(arr) {
    const result = [];
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];

        for (let j = 0; j < row.length; j++) {
            sum1 += row[j];
        }

        for (let k = 0; k < arr.length; k++) {
            sum2 += arr[k][i];
        }
        result.push(sum2);
        sum2 = 0;
        result.push(sum1);
        sum1 = 0;
    }
    
    for (let n = 0; n < result.length - 1; n++) {
        
        if (result[n] !== result[n + 1]) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]])
// true