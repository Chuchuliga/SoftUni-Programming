function melrahShake([text, pattern]) {

    while (pattern.length > 0) {
        const firstMatch = text.indexOf(pattern);
        const lastMatch = text.lastIndexOf(pattern);

        if (firstMatch > -1 && lastMatch > -1 && firstMatch !== lastMatch) {

            text = text.split('');
            text.splice(lastMatch, pattern.length);
            text.splice(firstMatch, pattern.length);
            const removeFromPatt = pattern[Math.floor(pattern.length / 2)];
            pattern = pattern.replace(removeFromPatt, '');
            text = text.join('');

            console.log('Shaked it.');
        } else {
            break;
        } 
    }
    console.log('No shake.');
    console.log(text);
}

melrahShake(['astalavista baby', 'sta'])
// Shaked it.
// No shake.
// alavi baby 