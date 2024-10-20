function valueOfAString(input) {
    const [text, specialWord] = input;
    const lowerRegex = /[a-z]/;
    const upperRegex = /[A-Z]/;
    let split = [];
    let sum = 0;

    if (specialWord === `UPPERCASE`) {
        split = text.split('').filter(letter => upperRegex.test(letter));
    } else if (specialWord === `LOWERCASE`) {
        split = text.split('').filter(letter => lowerRegex.test(letter));
    }

    for (const letter of split) {
        let code = letter.charCodeAt(0);
        sum += code
    }
    console.log(`The total sum is: ${sum}`);
}

valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE'])
// The total sum is: 1539