function oddOccurrences(input) {
    let result = [];
    let map = new Map();
    input = input.split(` `).map(word => word.toLowerCase());
    
    for (const word of input) {
        
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }

    for (const [word, count] of map.entries()) {

        if (count % 2 !== 0) {
            result.push(word)
        }
    }
    console.log(result.join(` `));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
// c# php 1 5