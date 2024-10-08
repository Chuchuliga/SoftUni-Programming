function commandProcessor() {
  let output = "";

  return {
    append: (s) => (output += s),
    removeStart: (n) => (output = output.slice(n)),
    removeEnd: (n) => (output = output.slice(0, -n)),
    print: () => console.log(output),
  };
}

let firstZeroTest = commandProcessor();

firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
// loa