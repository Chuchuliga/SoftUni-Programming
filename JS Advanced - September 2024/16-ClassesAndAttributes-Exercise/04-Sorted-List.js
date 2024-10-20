class List {
  result = [];
  size = this.result.length;

  add(num) {
    this.result.push(num);
    this.result.sort((a, b) => a - b);
    this.size++;
  }

  remove(index) {
    if (index >= 0 && this.size > index) {
      this.result.splice(index, 1);
      this.size--;
    }
  }

  get(index) {
    if (index >= 0 && this.size > index) {
      return this.result[index];
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
// 6
list.remove(1);
console.log(list.get(1));
// 7
