function add(number) {
  return (secondNum) => number + secondNum;
}

let add5 = add(5);
console.log(add5(2));
// 7
console.log(add5(3));
// 8