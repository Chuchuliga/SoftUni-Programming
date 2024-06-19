function searchForaNumber(array1, array2) {
    let j = 0;
    let count = 0;
    let elToTake = array2.shift();
    let elToDelete = array2.shift();
    let numWeSearch = array2.shift();
    
    while (elToTake < array1.length) {
        array1.pop();
    }

    while (j < elToDelete) {
        array1.shift();
        j++;
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === numWeSearch) {
            count++;
        }
        
    }
    console.log(`Number ${numWeSearch} occurs ${count} times.`);
}

searchForaNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]) // Number 3 occurs 1 times.