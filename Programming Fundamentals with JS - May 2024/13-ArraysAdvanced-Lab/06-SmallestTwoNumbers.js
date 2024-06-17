function smallestTwoNumbers(array) {
    let sorted = array.sort((a, b) => a - b)
    console.log(sorted[0], sorted[1]); // mine option
    console.log(sorted.slice(0, 2).join(` `)); // softuni option
}

smallestTwoNumbers([30, 15, 50, 5]) // 5 15