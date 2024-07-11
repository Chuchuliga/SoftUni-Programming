function worldOccurrences(array) {
    let map = new Map()
    let arr = [];
    
    for (const word of array) {
        let count = 0;
        
        for (let i = 0; i < array.length; i++) {
            
            if (word === array[i]) {
                count++;
            }
        }
        map.set(word, count)
    }

    for (const info of map) {
        arr.push(info);
    }

    arr.sort((a, b) => b[1] - a[1]);

    for (const [word, times] of arr) {
        console.log(`${word} -> ${times} times`);
    }
}

worldOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
// sentence -> 3 times
// Here -> 2 times
// is -> 2 times
// the -> 2 times
// first -> 1 times
// another -> 1 times
// And -> 1 times
// finally -> 1 times
// third -> 1 times