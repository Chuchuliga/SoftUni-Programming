function functionSum(start) {
    let sum = 0;

    function inner(num) {
      sum += num;
      return inner;
    }

    inner.toString = () => {
      return sum;
    };

    return inner(start);
}

console.log(functionSum(1)(6)(-3).toString());
// 4