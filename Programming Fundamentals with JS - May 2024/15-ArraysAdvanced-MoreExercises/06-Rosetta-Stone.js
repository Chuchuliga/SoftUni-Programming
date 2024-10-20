function rosettaStone(arr) {
    const linesNumber = Number(arr.shift());
    const template = arr.splice(0, linesNumber).map(el => el.split(' ').map(Number));
    const encodedMatrix = arr.map(row => row.split(' ').map(Number));

    let result = '';

    for (let row = 0; row < encodedMatrix.length; row++) {

        for (let col = 0; col < encodedMatrix[row].length; col++) {
            const column = col % template[0].length;
            const roww = row % linesNumber;
            const letter = String.fromCharCode(((encodedMatrix[row][col] + template[roww][column]) % 27) + 64);
            result += letter;
        }
    }
    console.log(result.split('@').join(' '));
}

rosettaStone([ '2', '59 36', '82 52', '4 18 25 19 8', '4 2 8 2 18', '23 14 22 0 22', '2 17 13 19 20', '0 9 0 22 22' ])
// I CAME I SAW I CONQUERED