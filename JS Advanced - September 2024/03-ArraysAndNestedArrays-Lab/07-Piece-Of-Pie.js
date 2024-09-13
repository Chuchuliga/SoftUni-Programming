function pieceOfPie(arr, startPie, endPie) {
    return arr.slice(arr.indexOf(startPie), arr.indexOf(endPie) + 1);
}
console.log(pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'], 'Key Lime Pie', 'Lemon Meringue Pie'));
// ['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie']