function accountBalance(input) {

    let totalSum = 0;
    let index = 0;
    let currentRow = input[index];

    while (currentRow !== `NoMoreMoney`) {
        let rowAsNumber = Number(currentRow);

        if (rowAsNumber < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${rowAsNumber.toFixed(2)}`);
        totalSum += rowAsNumber;
        index++;
        currentRow = input[index];
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"])