function getPerson() {
  const result = [];

  class Person {
    firstName;
    lastName;
    age;
    email;

    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }

    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }

  result.push(new Person("Anna", "Simpson", 22, "anna@yahoo.com"));
  result.push(new Person("SoftUni"));
  result.push(new Person("Stephan", "Johnson", 25));
  result.push(new Person("Gabriel", "Peterson", 24, "g.p@gmail.com"));

  return result;
}

console.log(getPerson());
// [
//   Person {
//     firstName: 'Anna', 
//     lastName: 'Simpson', 
//     age: 22, 
//     email: 'anna@yahoo.com'
//   },
//   Person {
//     firstName: 'SoftUni', 
//     lastName: undefined, 
//     age: undefined, 
//     email: undefined
//   },
//   Person {
//     firstName: 'Stephan', 
//     lastName: 'Johnson', 
//     age: 25, 
//     email: undefined
//   },
//   Person {
//     firstName: 'Gabriel', 
//     lastName: 'Peterson', 
//     age: 24, 
//     email: 'g.p@gmail.com'
//   }
// ]