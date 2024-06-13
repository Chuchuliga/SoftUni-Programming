function numberModification(input) {
    let number = input.toString();

    function calculateAverage(num) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }
        return sum / num.length;
    }

    while (calculateAverage(number) <= 5) {
        number += '9';
    }
    console.log(number);
}

numberModification(101)
numberModification(5835)