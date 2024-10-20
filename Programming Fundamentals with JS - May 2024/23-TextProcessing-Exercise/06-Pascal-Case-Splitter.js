function pascalCaseSplitter(input) {
    const regex = /[A-Z][a-z]*/g;
    const allMatches = input.matchAll(regex);
    const result = [];

    for (const matchObj of allMatches) {
        result.push(matchObj[0]);
    }
    console.log(result.join(`, `));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
// Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can