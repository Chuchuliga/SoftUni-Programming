function NxNMatrix(number) {
    for (let i = 0; i < number; i++) {
        let array = [];

        for (let j = 0; j < number; j++) {
            array.push(number);
        }
        console.log(array.join(` `));
        array = [];
    }
}

NxNMatrix(3)