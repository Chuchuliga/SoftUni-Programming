function orbit([rows, cols, starRow, starCol]) {
    const matrix = [];

    for(let row = 0; row < rows; row++) {
        matrix[row] = [];

        for(let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - starRow), Math.abs(col - starCol)) + 1;
        }
        console.log(matrix[row].join(' '));
    }
}

orbit([4, 4, 0, 0])
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4