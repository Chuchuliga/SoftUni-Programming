class Hex {}

let FF = new Hex(255);
console.log(FF.toString());
// 0XFF
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
// 0XF
console.log(a.plus(b).toString() === "0xF");
// true
console.log(FF.parse("AAA"));
// 2730
