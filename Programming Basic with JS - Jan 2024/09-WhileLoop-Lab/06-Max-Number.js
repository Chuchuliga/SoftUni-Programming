function maxNumber(input) {

    let index = 0;
    let currentRow = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (currentRow !== `Stop`) {
        let rowAsNumber = Number(currentRow);

        if (maxNumber < rowAsNumber) { 
            maxNumber = rowAsNumber;
        }
        index++;
        currentRow = input[index];
    }

    console.log(maxNumber);
}

maxNumber(["-1", "-2", "Stop"])