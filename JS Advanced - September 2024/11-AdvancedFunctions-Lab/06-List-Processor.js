function listProcessor(arr) {
  const result = [];

  for (const str of arr) {
    let [command, word] = str.split(" ");
    if (command === "add") {
      add(word);
    } else if (command === "remove") {
      remove(word);
    } else {
      print();
    }
  }

  function add(word) {
    result.push(word);
  }

  function remove(word) {
    while (result.includes(word)) {
        result.splice(result.indexOf(word), 1);
    }
  }

  function print() {
    console.log(result.join(","));
  }
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
// again,again