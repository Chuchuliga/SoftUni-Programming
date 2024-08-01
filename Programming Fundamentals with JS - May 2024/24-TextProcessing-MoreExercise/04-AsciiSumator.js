function asciiSumator([char1, char2, text]) {
    const splitedText = text.split('');
    const charCode1 = char1.charCodeAt(0);
    const charCode2 = char2.charCodeAt(0);
    let sum = 0;

    for (const letter of splitedText) {
        const charCode = letter.charCodeAt(0);

        if (charCode > charCode1 && charCode < charCode2 || charCode < charCode1 && charCode > charCode2) {
            sum += charCode
        }
    }
    console.log(sum);
}

asciiSumator(['.', '@', 'dsg12gr5653feee5'])
// 363