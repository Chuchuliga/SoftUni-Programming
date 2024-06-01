function graduation(input) {

    let name = input[0];
    let grades = 1;
    let current = Number(input[grades]);
    let gradeSum = 0;
    let excluded = 0;

    while (grades <= 12) {
        current = Number(input[grades]);
        gradeSum += current;
                
        if (current < 4) {
            excluded++;
        }
        if (excluded >= 1) {
            console.log(`${name} has been excluded at ${grades} grade`);
            return;
        }
        grades++;
    }

    let avgGrade = gradeSum / 12;
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
}

graduation(["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])