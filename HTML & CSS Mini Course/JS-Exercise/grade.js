function grade(input) {
    let grade = Number(input[0]);

    if (grade >= 5.50) {
        console.log(`Excellent!`);

    } else if (grade >= 4.50) {
        console.log(`Very good!`);

    } else if (grade >= 3.50) {
        console.log(`Good!`);

    } else if (grade >= 3) {
        console.log(`Bad!`);
        
    } else {
        console.log(`Really bad!`);
    }
}

grade(["4.50"])