function sumOfTwoNumbers(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let isFound = false;

    for (let x =  start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let sum = x + y;
            combinations++;
            
            if (sum == magicNumber) {
                console.log(`Combination N:${combinations} (${x} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            } 
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["23", "24", "20"])