function maxNumber(array) {
    let topNums = [];
    for (let i = 0; i < array.length; i++) {
        let firstNum = array[i];
        let isTop = true; 

        for (let j = i + 1; j < array.length; j++) {
            let nextNum = array[j];

            if (firstNum <= nextNum) {
                isTop = false;
                break;
            } 
        }
        if (isTop) {
            topNums.push(firstNum);
        }
    }
    console.log(topNums.join(` `));
}

maxNumber()