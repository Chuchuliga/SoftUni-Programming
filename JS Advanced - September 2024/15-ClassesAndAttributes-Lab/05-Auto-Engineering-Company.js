function autoEngineeringCompany(carData) {
  const result = {};

  for (const info of carData) {
    let [brand, model, count] = info.split(" | ");
    count = Number(count);

    if (!result.hasOwnProperty(brand)) {
      result[brand] = {};
    }

    if (!result[brand].hasOwnProperty(model)) {
      result[brand][model] = 0;
    }

    result[brand][model] += count;
  }

  for (const brand in result) {
    console.log(brand);

    for (const model in result[brand]) {
      console.log(`###${model} -> ${result[brand][model]}`);
    }
  }
}

autoEngineeringCompany(["Audi | Q7 | 1000", "Audi | Q6 | 100", "BMW | X5 | 1000", "BMW | X6 | 100", "Citroen | C4 | 123", "Volga | GAZ-24 | 1000000", "Lada | Niva | 1000000", "Lada | Jigula | 1000000", "Citroen | C4 | 22", "Citroen | C5 | 10",]);
// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ-24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000
