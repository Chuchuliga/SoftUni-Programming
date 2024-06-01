function equalSums(array) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        
        for (let a = 0; a < array.length; a++) {
            let number2 = array[a];
            
            if (a < i) {
                sumLeft += number2;
            } else if (a > i) {
                sumRight += number2;
            }
        }
        if (sumLeft === sumRight) {
            console.log(i);
            return;
        }
        
        if (array.length === 1) {
            console.log(0);
            return;
        }
        sumLeft = 0;
        sumRight = 0;   
    }
    console.log(`no`);
}

equalSums()