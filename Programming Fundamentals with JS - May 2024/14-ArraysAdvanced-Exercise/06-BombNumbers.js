function bombNumbers(nums, bomb) {
        let bombNum = bomb.shift();
        let bombPower = bomb.shift();
     
    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i];

        if (currNum === bombNum) {   
            let bombIndex = i;
            let startIndex = bombIndex - bombPower;
            let detonatedIndexes = bombPower * 2 + 1;

            while (startIndex < 0) {
                startIndex++;
                detonatedIndexes--;
            }
            nums.splice(startIndex, detonatedIndexes);
            i--;
        }
    }
    let sum = 0;
     
    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i];
        sum += currNum;
    }
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]) // 12