function employees(array) {
    let lenght = [];

    class Name {
        constructor(name) {
            this.name = name;
        }
    }

    for (let i = 0; i < array.length; i++) {
        let employeeName = array[i];
        let personalNum = 0;
        lenght.push(new Name(employeeName[0]));

        for (let j = 0; j < array.length; j++) {
            personalNum = employeeName.length;
        }
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
// Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18