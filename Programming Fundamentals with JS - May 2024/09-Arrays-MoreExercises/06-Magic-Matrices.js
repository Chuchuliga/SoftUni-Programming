function magicMatrices(array) {
    let isMagic = true;
    let firstRow = array[0];
    for (let i = 0; i < array.length; i++) {
        let currRowSum = 0;
        let currColSum = 0;

        for (let j = 0; j < array.length; j++) {
            let currRow = array[j];
            currRowSum += firstRow[j];
            currColSum += currRow[i];
        }
    
        if (currRowSum !== currColSum) {
            isMagic = false;
            break;
        } 
    }
    console.log(isMagic);
}

magicMatrices()