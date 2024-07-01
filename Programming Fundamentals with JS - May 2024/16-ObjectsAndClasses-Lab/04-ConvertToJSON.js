function convertToJSON(name, lastName, hairColor) {
    let person = {name: name, lastName, hairColor};
    console.log(JSON.stringify(person));
}

convertToJSON('George', 'Jones', 'Brown')
// {"name":"George","lastName":"Jones","hairColor":"Brown"}