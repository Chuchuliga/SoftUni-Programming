function cutAndReverse(input) {
    let halfLength = input.length / 2;
    let firstResult = input.slice(0, halfLength).split('').reverse().join('');
    let secondResult = input.slice(halfLength).split('').reverse().join('');
    
    console.log(firstResult);
    console.log(secondResult);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
// ThisIsDifficult
// ThisIsSoAmazing