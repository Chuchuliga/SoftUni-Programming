function equalArrays(arr1, arr2) {
    let sum = 0;
    let i = 0;
    let a = 0;
    while (i < arr1.length) {
        let num1 = Number(arr1[i]);
        let num2 = Number(arr2[a]);
        if (num1 === num2) {
            sum += num1;
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        i++;
        a++;
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
} 

equalArrays()
