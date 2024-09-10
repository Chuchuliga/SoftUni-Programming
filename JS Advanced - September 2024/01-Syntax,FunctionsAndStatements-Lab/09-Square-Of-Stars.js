function squareOFStars(input) {
    let arr = [];

    for (let row = 1; row <= input; row++) {
        arr.push('*')
        
        for (let col = 1; col < input; col++) {
            arr.push('*')
        }
        console.log(arr.join(' '));
        arr = [];
    }
}

squareOFStars(2)
// * *
// * *