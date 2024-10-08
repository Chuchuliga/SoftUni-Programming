function fibonacci() {
  let num1 = 0;
  let num2 = 1;

  return () => {
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;

    return num1;
  };
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13