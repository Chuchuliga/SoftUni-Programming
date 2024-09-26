function pascalOrCamelCase() {
    const input = document.getElementById('text').value;
    const currentCase = document.getElementById('naming-convention').value;

    const result = document.getElementById('result');
    let output = [];

    if (currentCase === "Camel Case") {
        let word = input.toLowerCase().split(' ');

        for (let i = 0; i < word.length; i++) {

            if (i === 0) {
                output.push(word[0]);
            } else {
                let splitedWord = word[i].split('');
                splitedWord[0] = splitedWord[0].toUpperCase();
                output.push(splitedWord.join(''));
            }
        }

        result.textContent = output.join('');
    } else if (currentCase === "Pascal Case") {
        let splitedInput = input.toLowerCase().split(' ');

        for (const word of splitedInput) {
            let splitedWord = word.split('');
            splitedWord[0] = splitedWord[0].toUpperCase();
            output.push(splitedWord.join(''));
        }

        result.textContent = output.join('');
    } else {
        result.textContent = 'Error!';
    }
}