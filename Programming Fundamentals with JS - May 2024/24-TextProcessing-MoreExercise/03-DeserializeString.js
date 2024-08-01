function deserializeString(input) {
    let array = [];
    let result = [];

    for (const text of input) {
        
        if (text !== 'end') {
            
            const [char, indexes] = text.split(':')
            let splitIndexes = indexes.split('/')
            
            for (const index of splitIndexes) {
                array.push([index, char]);
            }
        }
    }

    array.sort((a, b) => a[0] - b[0]);
    
    for (const [index, char] of array) {
        result.push(char)
    }
    console.log(result.join(''));
}

deserializeString(['a:0/2/4/6','b:1/3/5','end'])
// abababa