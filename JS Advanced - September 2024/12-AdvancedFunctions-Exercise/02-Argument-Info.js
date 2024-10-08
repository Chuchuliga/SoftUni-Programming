function argumentInfo() {
  const collection = {};

  for (const el of arguments) {
    const type = typeof el;
    console.log(`${type}: ${el}`);

    if (!collection.hasOwnProperty(type)) {
      collection[type] = 1;
    } else {
      collection[type]++;
    }
  }

  let output = Object.keys(collection)
    .sort((a, b) => collection[b] - collection[a])
    .forEach((word) => console.log(`${word} = ${collection[word]}`));
}

argumentInfo("cat", 42, function () { console.log("Hello world!"); });
// string: cat
// number: 42
// function: function () { console.log("Hello world!"); }
// string = 1
// number = 1
// function = 1