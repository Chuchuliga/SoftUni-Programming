function breakfastRobot() {
  const recipes = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  const stocks = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const commands = {
    restock,
    prepare,
    report,
  };

  return manager;

  function manager(input) {
    const [command, ...params] = input.split(" ");
    return commands[command](...params);
  }

  function restock(microelement, count) {
    stocks[microelement] += Number(count);
    return "Success";
  }

  function prepare(recipe, count) {
    count = Number(count);
    const ingredients = Object.entries(recipes[recipe]);

    for (const [ingredient, required] of ingredients) {
      if (stocks[ingredient] < required * count) {
        return `Error: not enough ${ingredient} in stock`;
      }
    }

    for (const [ingredient, required] of ingredients) {
      stocks[ingredient] -= required * count;
    }

    return "Success";
  }

  function report() {
    return `protein=${stocks.protein} carbohydrate=${stocks.carbohydrate} fat=${stocks.fat} flavour=${stocks.flavour}`;
  }
}

let manager = breakfastRobot();
console.log(manager("prepare turkey 1"));
// Error: not enough protein in stock
console.log(manager("restock protein 10"));
// Success
console.log(manager("prepare turkey 1"));
// Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
// Success
console.log(manager("prepare turkey 1"));
// Error: not enough fat in stock
console.log(manager("restock fat 10"));
// Success
console.log(manager("prepare turkey 1"));
// Error: not enough flavour in stock
console.log(manager("restock flavour 10"));
// Success
console.log(manager("prepare turkey 1"));
// Success
console.log(manager("report"));
// protein=0 carbohydrate=0 fat=0 flavour=0