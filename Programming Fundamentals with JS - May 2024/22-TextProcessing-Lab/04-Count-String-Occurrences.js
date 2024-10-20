function countStringOccurences(text, specialWord) {
    let count = 0;
    const splitedWords = text.split(' ');

    for (const word of splitedWords) {
        
        if (word === specialWord) {
            count++;
        }
    }
    console.log(count);
}

countStringOccurences('This is a word and it also is a sentence', 'is')
// 2