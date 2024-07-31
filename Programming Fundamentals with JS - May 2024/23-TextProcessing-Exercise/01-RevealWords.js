function revealWords(words, text) {
    words = words.split(', ');

    while (text.includes('*')) {
        
        for (const word of words) {
            text = text.replace('*'.repeat(word.length), word);
        }
    }
    console.log(text);
}

revealWords('great', 'softuni is ***** place for learning new programming languages')
// softuni is great place for learning new programming languages