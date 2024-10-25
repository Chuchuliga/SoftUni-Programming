
// Used as Rest Operator
function rest(...arr) {
    console.log(arr);
}

rest(10, 20, 30, 40);

// Rest is on rigth
let [a, b, ...rest] = [10, 20, 30, 40];



// Used as Spread Operator
function spread(a, b, c, d) {
    console.log(a, b, c, d);
}

spread(...[10, 20, 30, 40]);

// Spread is on left
let secondArr = [...firstArr];