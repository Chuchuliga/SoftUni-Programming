function repeatString(string, repeat) {
    let count = 0;
    let newString = ``;
    while (count < repeat) {
        newString += string;
        count++;
    }
    console.log(newString);
}

repeatString("String", 2)