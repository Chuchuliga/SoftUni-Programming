function sortArray(arr, word) {
  if (word === "asc") {
    arr.sort((a, b) => a - b);
  } else {
    arr.sort((a, b) => b - a);
  }
  return arr;
}

console.log(sortArray([14, 7, 17, 6, 8], "asc"));
// [6, 7, 8, 14, 17]