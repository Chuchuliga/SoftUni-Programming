function sumOfOddNumbers(n) {
    let sum = 0;
    for (let a = 1;  a <= n * 2 - 1; a += 2) {  
        console.log(a);
        sum += a;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)    