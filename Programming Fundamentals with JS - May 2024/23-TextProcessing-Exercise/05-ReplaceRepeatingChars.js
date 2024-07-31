function replaceRepeatingChars(input) {
    let result = '';
    let lastChar = '';

    for (const char of input) {
        
        if (char !== lastChar) {
            result += char;
            lastChar = char;
        }
    }
    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
// abcdedsa