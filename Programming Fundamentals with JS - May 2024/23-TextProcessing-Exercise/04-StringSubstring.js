function stringSubstring(language, text) {
    text = text.split(` `);

    for (const word of text) {
        
        if (word.toLowerCase() === language) {
            console.log(language);
            return;
        }
    }
    console.log(`${language} not found!`);
}

stringSubstring('javascript', 'JavaScript is the best programming language')
// javascript