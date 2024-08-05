function decryptingCommands(input) {
    let word = input.shift();
    
    for (const command of input) {
        let splitedCommand = command.split(' ');
            
        if (command.includes('Replace')) {
            let [text, curChar, newChar] = splitedCommand;

            while (word.includes(curChar)) {
                word = word.replace(curChar, newChar);
            }
            console.log(word);
        } else if (command.includes('Cut')) {
            let [text, startIndex, endIndex] = splitedCommand;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            if (startIndex >= 0 && startIndex < word.length && endIndex >= 0 && endIndex < word.length) {
                word = word.substring(0, startIndex) + word.substring(endIndex + 1);
                console.log(word);
            } else {
                console.log('Invalid indices!');
            }
        } else if (command.includes('Make')) {
            let [text, upperOrLower] = splitedCommand;

            if (upperOrLower === 'Upper') {
                word = word.toUpperCase();
                console.log(word);
            } else {
                word = word.toLowerCase()
                console.log(word); 
            }
        } else if (command.includes('Check')) {
            let [text, string] = splitedCommand;

            if (word.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }
        } else if (command.includes('Sum')) {
            let [text, startIndex, endIndex] = splitedCommand;
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);

            if (startIndex >= 0 && startIndex < word.length && endIndex >= 0 && endIndex < word.length) { 
                let tempWord = word.substring(startIndex, endIndex + 1).split('');
                let sum = 0;
                
                for (const el of tempWord) {
                    sum += el.charCodeAt(0);
                }
                console.log(sum);
            } else {
                console.log('Invalid indices!');
            }
        } else break;
    }
}

decryptingCommands(["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"])    
// WeLikeSoftUni
// WELIKESOFTUNI
// Message doesn't contain SoftUni
// 293
// WESOFTUNI