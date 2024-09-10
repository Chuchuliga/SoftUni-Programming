function stringLength(string1, string2, string3) {
    let total = string1.length + string2.length + string3.length;
    let avg = Math.floor(total / 3);
    console.log(total);
    console.log(avg);
}

stringLength('chocolate', 'ice cream', 'cake')
// 22
// 7