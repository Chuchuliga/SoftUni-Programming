function minNumber(input) {

    let index = 0;
    let currentRow = input[index];
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (currentRow !== `Stop`) {
        let rowAsNumber = Number(currentRow);

        if (rowAsNumber < minNumber) { 
            minNumber = rowAsNumber;
        }
        index++;
        currentRow = input[index];
    }

    console.log(minNumber);
}

minNumber(["100", "99", "80", "70", "Stop"])