function schoolGrades(array) {
    let students = {};

    for (const string of array) {
        let info = string.split(' ');
        let name = info.shift();
        let grades = [];
        
        for (const grade of info) {
            grades.push(Number(grade));
        }

        if (!students[name]) {
            students[name] = [];
        }

        for (const grade of grades) {
            students[name].push(grade);
        }
    }

    let sortedNames = Object.keys(students).sort();

    for (const name of sortedNames) {
        let grades = students[name];
        let totalGrades = 0;

        for (const grade of grades) {
            totalGrades += grade;
        }

        let averageGrade = totalGrades / grades.length;
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])
// Lilly: 5.25
// Tammy: 3.00
// Tim: 5.75