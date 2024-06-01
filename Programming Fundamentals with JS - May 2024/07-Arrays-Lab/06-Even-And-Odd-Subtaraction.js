function evenAndOddSubtaraction(array) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < array.length; i++) {
        let number = Number(array[i]);
        if (number % 2 === 0) {
            even += number;
        } else {
            odd += number;
        }
    }
    console.log(even - odd);
}

evenAndOddSubtaraction()