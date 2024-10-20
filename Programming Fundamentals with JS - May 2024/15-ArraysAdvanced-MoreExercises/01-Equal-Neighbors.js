function equalNeighbors(matrix) {
    let count = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let row1 = matrix[i+1];
            
        for (let j = 0; j < row.length; j++) {
        
            if (row1 !== undefined) {

                if (row[j] === row[j+1] && row[j] === row1[j]) {
                    count += 2;              
                } else if (row[j] === row[j+1] || row[j] === row1[j]) {
                    count++;
                }
            } else if (row[j] === row[j+1]) {
                count++;
            }
        }
    }
    console.log(count);
}

equalNeighbors([['2', '3', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']])
// 1