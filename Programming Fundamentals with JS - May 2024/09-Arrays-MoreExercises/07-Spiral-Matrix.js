function generateSpiralMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push(0);
        }
    }

    let topRow = 0, bottomRow = rows - 1;
    let leftCol = 0, rightCol = cols - 1;
    let num = 1;

    while (topRow <= bottomRow && leftCol <= rightCol) {
        
        for (let i = leftCol; i <= rightCol; i++) {
            matrix[topRow][i] = num;
            num++;
        }
        topRow++;

        for (let i = topRow; i <= bottomRow; i++) {
            matrix[i][rightCol] = num;
            num++;
        }
        rightCol--;

        for (let i = rightCol; i >= leftCol && topRow <= bottomRow; i--) {
            matrix[bottomRow][i] = num;
            num++;
        }
        bottomRow--;

        for (let i = bottomRow; i >= topRow && leftCol <= rightCol; i--) {
            matrix[i][leftCol] = num;
            num++;
        }
        leftCol++;
    }
    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(' '));
    }
}

generateSpiralMatrix(5, 5);