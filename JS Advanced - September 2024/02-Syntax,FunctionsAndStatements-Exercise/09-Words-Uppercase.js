function wordsUppercase(str) {
    let pattern = /\w+/g;
    let arr = [];
    
    if (str.match(pattern)) {
        let matches = str.match(pattern);

        for (const match of matches) {
            arr.push(match.toLocaleUpperCase());
        }
        console.log(arr.join(', '));
    }
}

wordsUppercase('Hi, how are you?')
// HI, HOW, ARE, YOU