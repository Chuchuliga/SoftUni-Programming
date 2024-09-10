function diagonalAttack(input) {
    let matrix = input.map(row => row.split(` `).map(Number));
    let diagonal1 = 0;
    let diagonal2 = 0;

    for(let row = 0; row < matrix.length; row++) {
        diagonal1 += matrix[row][row];
        diagonal2 += matrix[row][matrix[row].length - row - 1];
    }
    if(diagonal1 === diagonal2) {

        for(let row = 0; row < matrix.length; row++) {

            for(let col = 0; col < matrix.length; col++) {
                
                if(row === col || row + col + 1 === matrix.length){
                    continue;
                }
                matrix[row][col] = diagonal1;
            }
        }
    }
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

diagonalAttack(['1 1 1', '1 1 1', '1 1 0'] )
// 1 1 1
// 1 1 1
// 1 1 0