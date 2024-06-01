function reverseString(str) {
    let splitStr = str.split(``);
    let reverseStr = splitStr.reverse(``);
    let joinStr = reverseStr.join(``);
    console.log(joinStr);
}

reverseString(`Hello`)