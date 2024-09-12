function sameNumbers(nums) {
    let numsString = nums.toString();
    let isSame = true;
    let sum = 0;
    let firstNumber = numsString[0];

    for (let i = 0; i < numsString.length; i++) {

        if (numsString[i] !== firstNumber) {
            isSame = false;
        }
        sum += Number(numsString[i]);
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222)
// true
// 14