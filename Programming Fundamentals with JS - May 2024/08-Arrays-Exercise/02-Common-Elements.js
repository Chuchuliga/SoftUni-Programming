function commonElements(array1, array2) {
    for (let i1 = 0; i1 < array1.length; i1++) {
        let string1 = array1[i1];
        
        for (let i2 = 0; i2 < array2.length; i2++) {
            let string2 = array2[i2];
            
            if (string1 === string2) {
                console.log(string1);
            }
        }
    }
}

commonElements()