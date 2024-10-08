function cars(arr) {
  let result = {};

  for (const info of arr) {
    let [command, name, word, parentName] = info.split(" ");

    if (command === "create") {
      if (!word) {
        result[name] = {};
      } else {
        result[name] = Object.create(result[parentName]);
      }
    } else if (command === "set") {
      const key = word;
      const value = parentName;
      result[name][key] = value;
    } else {
      const info = [];
      for (const key in result[name]) {
        info.push(`${key}:${result[name][key]}`);
      }
      console.log(info.join(","));
    }
  }
}

cars(["create c1", "create c2 inherit c1", "set c1 color red", "set c2 model new", "print c1", "print c2",]);
// color:red
// model:new,color:red