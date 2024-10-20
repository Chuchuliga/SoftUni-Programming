function postOffice(inputInfo) {
    let input = inputInfo.toString().split('|');
    const capitalLetters = getCapitalLetters(input[0]);
    const wordLengthsByFirstLetter = getWordLengths(input[1], capitalLetters);
    const extractedWords = extractValidWords(input[2], wordLengthsByFirstLetter);

    for (let i = 0; i < capitalLetters.length; i++) {
        console.log(extractedWords.find(x => x[0] === capitalLetters[i]));
    }

    function getCapitalLetters(inputText) {
        const pattern = /([#$%*&])(?<capitalChars>[A-Z]+)\1/g;
        let regexResult = "";
        
        while ((match = pattern.exec(inputText)) !== null) {
            regexResult += match.groups.capitalChars;
        }
        return regexResult.split('');
    }

    function getWordLengths(inputText, capitalLetters) {
        const pattern = /(?<ascii>[\d]{2}):(?<length>[\d]{2})/g;
        const wordLengthsByFirstLetter = {};

        while ((match = pattern.exec(inputText)) !== null) {
            const asciiSymbol = String.fromCharCode(parseInt(match.groups.ascii));
            const length = Number(match.groups.length) + 1;

            if (capitalLetters.includes(asciiSymbol)) {
                wordLengthsByFirstLetter[asciiSymbol] = length; 
            } 
        }
        return wordLengthsByFirstLetter;
    }

    function extractValidWords(inputText, wordLengthsByFirstLetter) {
        const allWords = inputText.split(' ');
        const validWords = [];

        for (const word of allWords) {
            const firstLetter = word[0];

            if (wordLengthsByFirstLetter.hasOwnProperty(firstLetter) && wordLengthsByFirstLetter[firstLetter] === word.length) {
                validWords.push(word);
            }
        }
        return validWords;
    }
}

postOffice('sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos')
// Argo
// Or
// The
// Parahaos