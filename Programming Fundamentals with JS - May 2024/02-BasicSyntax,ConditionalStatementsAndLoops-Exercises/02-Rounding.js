function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let roundedNum = num.toFixed(precision);
    console.log(parseFloat(roundedNum));
}

rounding(10.5, 3)