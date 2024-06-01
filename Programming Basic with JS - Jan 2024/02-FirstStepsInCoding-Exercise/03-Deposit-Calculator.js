function depositCalculator(input){
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestDecimal = Number(input[2]);
    let annualInterestPercent = annualInterestDecimal / 100;
    let sum = depositSum + depositPeriod *((depositSum * annualInterestPercent) / 12);
    console.log(sum);

}

depositCalculator(["200 ", "3 ", "5.7 "])