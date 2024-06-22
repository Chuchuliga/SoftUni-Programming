function numbers(string) {
    let averageNum = 0;
    let count = 0;
    let greaterNums = [];
    string = string.split(` `);

    for (let i = 0; i < string.length; i++) {
        let num = Number(string[i]);
        averageNum += num;
        count++;    
    }
    averageNum /= count;

    for (let j = 0; j < string.length; j++) {
        let num = Number(string[j]);
        if (num > averageNum) {
            greaterNums.push(num);
        }
    }
    greaterNums.sort((a, b) => b - a)

    if (greaterNums.length > 5) {
        for (let k = 0; greaterNums.length > 5; k++) {
            greaterNums.pop()
        }
    }

    if (greaterNums.length === 0) {
        console.log(`No`);
    } else {
        console.log(greaterNums.join(` `));
    }
}

numbers(`10 20 30 40 50`) // 50 40