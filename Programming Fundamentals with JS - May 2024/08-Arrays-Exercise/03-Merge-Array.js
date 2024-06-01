function mergeArray(array1, array2) {
    let array3 = [];
    for (let i = 0; i < array1.length; i++) {
        let string1 = array1[i];
        let string2 = array2[i];

        if (i % 2 === 0) {
            array3.push(Number(string1) + Number(string2));
        } else {
            array3.push(string1 + string2);
        }
    }
    console.log(array3.join(` - `));
}

mergeArray()