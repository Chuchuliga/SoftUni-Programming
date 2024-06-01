function binaryToDecimal(num) {
    let numStr = num.toString();
    let decimal = 0;
    for (let i = 0; i < numStr.length; i++) {
        decimal += Number(numStr[i]) * Math.pow(2, numStr.length - 1 - i);
    }
    console.log(decimal);
}

binaryToDecimal(1111)