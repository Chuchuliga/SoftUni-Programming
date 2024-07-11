function wordTracker(array) {
    const map = new Map();
    let arr = [];
    let specialWords = array.shift().split(` `);
    
    for (const specialWord of specialWords) {
        let times = 0;

        for (const word of array) {
            
            if (word === specialWord) {
                times++;
            }
        }
        map.set(specialWord, times)
    }

    for (const info of map) {
        arr.push(info);
    }

    arr.sort((a, b) => b[1] - a[1])

    for (const [word, times] of arr) {
        console.log(`${word} - ${times}`);
    }
}

wordTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])
// this - 3
// sentence - 2