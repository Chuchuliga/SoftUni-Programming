function train(arr) {
    let wagons = arr[0].split(` `).map(Number);
    let capacity = arr[1];

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i];
        
        if (command.includes(`Add`)) {
            let token = command.split(` `);
            let passangers = Number(token[1]);
            wagons.push(passangers)
        } else {
            let newPassangers = Number(command);

            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + newPassangers <= capacity) {
                    wagons[j] += newPassangers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(` `));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']) // 72 54 21 12 4 75 23 10 0