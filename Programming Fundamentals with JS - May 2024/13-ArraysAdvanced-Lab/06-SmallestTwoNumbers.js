function smallestTwoNumbers(array) {
    let sorted = array.sort((a, b) => {
        return a - b;
    })
    console.log(sorted[0], sorted[1]);
}

smallestTwoNumbers([30, 15, 50, 5]) // 5 15