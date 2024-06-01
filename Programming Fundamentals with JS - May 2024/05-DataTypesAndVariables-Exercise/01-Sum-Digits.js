function sumDuguts(num) {
    let sum = 0;
    let numStr = num.toString();
    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);        
    }
    console.log(sum);
}

sumDuguts(245678)
sumDuguts(97561)
sumDuguts(543)