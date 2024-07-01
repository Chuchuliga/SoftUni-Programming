function employees(array) {
    let lenght = [];
    class Name {
        constructor(name) {
            this.name = name;
        }
    }

    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        let personalNum = 0;
        lenght.push(new Name(name[0]));

        for (let j = 0; j < array.length; j++) {
            personalNum = name.length;
        }
        console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
    }
}

// employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
// Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18
// employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland'])
// Name: Samuel Jackson -- Personal Number: 14
// Name: Will Smith -- Personal Number: 10
// Name: Bruce Willis -- Personal Number: 12
// Name: Tom Holland -- Personal Number: 11    