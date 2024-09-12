function cookingByNumbers(points, op1, op2, op3, op4, op5) {
    let arr = [op1, op2, op3, op4, op5]

    for (operation of arr) {

        switch (operation) {
            case 'chop': points /= 2; break;
            case 'dice': points = Math.sqrt(points); break;
            case 'spice': points += 1; break;
            case 'bake': points *= 3;  break;
            case 'fillet': points *= 0.80; break;
        }
        console.log(points);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
// 16
// 8
// 4
// 2
// 1