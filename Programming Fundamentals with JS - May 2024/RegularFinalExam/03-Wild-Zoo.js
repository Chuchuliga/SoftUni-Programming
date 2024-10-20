function wildZoo(input) {
    let animals = new Map();
    let areas = new Map();
    
    for (const command of input) {
        let splitedCommand = command.split('-');
        
        if (command.includes('Add')) {
            let [text, food, area] = splitedCommand;
            let [text1, name] = text.split(': ');
            food = Number(food);

            if (!animals.has(name)) {
                animals.set(name, food);

                if (!areas.has(area)) {
                    areas.set(area, []);
                }
                areas.get(area).push(name);

            } else {
                animals.set(name, animals.get(name) + food);
            }
        } else if (command.includes('Feed')) {
            let [text, food] = splitedCommand;
            let [text1, name] = text.split(': ')
            food = Number(food);

            if (animals.has(name)) {
                let feeded = animals.get(name) - food;

                if (feeded > 0) {
                    animals.set(name, feeded);
                } else {
                    animals.delete(name)
                    console.log(`${name} was successfully fed`);
                    
                    for (let [area, animals] of areas) {
                        let index = animals.indexOf(name);

                        if (index !== -1) {
                            animals.splice(index, 1);
                            
                            if (animals.length === 0) {
                                areas.delete(area);
                            }
                            break;
                        }
                    }
                }
            }
        } else {
            console.log('Animals:');
            
            for (const animal of animals) {
                let [name, food] = animal;
                console.log(` ${name} -> ${food}g`);
            }
            console.log('Areas with hungry animals:');
            
            for (const area of areas) {
                let [areaName, names] = area;
                let count = 0;

                for (const name of names) {
                    count++;
                }
                console.log(` ${areaName}: ${count}`);
            }
        }
    }
}

wildZoo(["Add: Adam-4500-ByTheCreek", "Add: Maya-7600-WaterfallArea", "Add: Maya-1230-WaterfallArea", "Feed: Jamie-2000", "EndDay"])
// Animals:
// Adam -> 4500g
// Maya -> 8830g
// Areas with hungry animals:
// ByTheCreek: 1
// WaterfallArea: 1                     