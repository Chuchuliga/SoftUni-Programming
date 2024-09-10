function charactersInRange(char1, char2) {
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);
    let result = "";
    
    if (code1 > code2) {
        let tempCode = code1;
        code1 = code2;
        code2 = tempCode;
    }

    for (let code = code1 + 1; code < code2; code++) {
        result += String.fromCharCode(code) + " ";
    }
    console.log(result.trim());
}

charactersInRange(`a`, `d`) // b c