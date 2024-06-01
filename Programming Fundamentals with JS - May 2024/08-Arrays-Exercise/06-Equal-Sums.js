function equalSums(array) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let i = 0; i < array.length; i++) {
        
        for (let a = 0; a < array.length; a++) {
            let number = array[a];
            
            if (a < i) {
                sumLeft += number;
            } else if (a > i) {
                sumRight += number;
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

equalSums([1,2,3,3])