function triangleOfNumbers(n) {
    let text = ``;
    for (let i = 1; i <= n; i++) {
        text = `${i} `;
        for (let a = 1; a < i; a++) {
            text += `${i} `;
        }
        console.log(text);
    }
}

triangleOfNumbers(7)