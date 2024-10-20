function schoolRegister(input) {
    let students = new Map();
    
    for (const info of input) {
        let [nameInfo, gradeInfo, avgInfo] = info.split(', ');
        let[text1, name] = nameInfo.split(': ');
        let[text2, grade] = gradeInfo.split(': ');
        let[text3, avg] = avgInfo.split(': ');

        if (avg >= 3.00) {

            if (!students.has(grade)) {
                students.set(grade, new Map());
            } 
            students.get(grade).set(name, avg);
        }
    }

    let array = [...students].sort((a, b) => a[0] - b[0]);

    for (const [grade, studentInfo] of array) {
        let gradeNum = Number(grade) + 1;
        let names = [];
        let avges = 0;
        let count = 0;

        for (const [name, avg] of studentInfo) {
            names.push(name);
            avges += Number(avg);
            count++;
        }
        console.log(`${gradeNum} Grade`);
        console.log(`List of students: ${names.join(', ')}`);
        console.log(`Average annual score from last year: ${(avges / count).toFixed(2)}`);
        console.log('');
    }
}

schoolRegister([ "Student name: Mark, Grade: 8, Graduated with an average score: 4.75", "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66", "Student name: George, Grade: 8, Graduated with an average score: 2.83", "Student name: Steven, Grade: 10, Graduated with an average score: 4.20", "Student name: Joey, Grade: 9, Graduated with an average score: 4.90", "Student name: Angus, Grade: 11, Graduated with an average score: 2.90", "Student name: Bob, Grade: 11, Graduated with an average score: 5.15", "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95", "Student name: Bill, Grade: 9, Graduated with an average score: 6.00", "Student name: Philip, Grade: 10, Graduated with an average score: 5.05", "Student name: Peter, Grade: 11, Graduated with an average score: 4.88", "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]) 
// 9 Grade
// List of students: Mark, Daryl
// Average annual score from last year: 5.35
    
// 10 Grade
// List of students: Ethan, Joey, Bill
// Average annual score from last year: 5.52
    
// 11 Grade
// List of students: Steven, Philip, Gavin
// Average annual score from last year: 4.42
    
// 12 Grade
// List of students: Bob, Peter
// Average annual score from last year: 5.02