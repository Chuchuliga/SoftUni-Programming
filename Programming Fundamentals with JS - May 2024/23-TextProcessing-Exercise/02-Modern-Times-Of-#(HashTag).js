function modernTimesOfHaskTag(input) {
    const regex = /^[A-Za-z]+$/;
    input = input.split(` `).filter(word => word.startsWith('#') && word.length > 1);

    for (const hashTagWord of input) {
        const word = hashTagWord.slice(1);

        if (regex.test(word)) {
            console.log(word);
        }
    }
}

modernTimesOfHaskTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
// special
// socialMedia