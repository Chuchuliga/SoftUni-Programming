function personalInfo(firstName, lastName, age) {
    // let person = {firstName: firstName, lastName: lastName, age: age};
    
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

console.log(personalInfo(`Peter`, `Pan`, `20`));
// {firstName: 'Peter', lastName: 'Pan', age: '20'}