function substring(string, startIndex, count) {
    const endIndex = startIndex + count;
    console.log(string.substring(startIndex, endIndex));
}

substring('ASentence', 1, 8)
// Sentence