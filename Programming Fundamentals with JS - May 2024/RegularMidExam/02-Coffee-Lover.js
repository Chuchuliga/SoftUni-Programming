function coffeeLover(array) {
    let list = array.shift().split(` `);
    let commandsNum = array.shift();
    for (let i = 0; i < commandsNum; i++) {
        let commands = array[i].split(` `);
        let command = commands.shift();

        switch (command) {
            case `Include`:
                let coffee = commands.shift();
                list.push(coffee);
                break;
            case `Remove`:
                let firstOrLast = commands.shift();
                let numberOfCoffees = Number(commands.shift()); 

                if (firstOrLast === `first`) {
                    for (let j = 0; j < numberOfCoffees; j++) {
                        list.shift();
                    }
                } else {
                    for (let k = 0; k < numberOfCoffees; k++) {
                        list.pop();
                    }
                }
                break;
            case `Prefer`:
                let index1 = Number(commands.shift());
                let index2 = Number(commands.shift());
                
                if (index1 < list.length && index2 < list.length) {
                    let temp = list[index1]; 
                    list.splice(index1, 1, list[index2]);
                    list.splice(index2, 1, temp);
                }
                break;
            case `Reverse`:
                list.reverse()
                break;
        }
    }
    console.log(`Coffees:`);
    console.log(list.join(` `));
}

coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "5", "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"])
// Coffees:
// StrongCoffee Magnistipula Robusta BulkCoffe Charrieriana