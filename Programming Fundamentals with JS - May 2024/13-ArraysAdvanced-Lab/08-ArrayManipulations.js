function arrManipulations(input) {
    let arr = input.shift().split(` `).map(Number);

    for (let i = 0; i < input.length; i++) {
        let commandParts = input[i].split(` `);
        let command = commandParts[0];
        let number = 0;
        let index = 0;

        switch (command) {
            case `Add`:
                number = Number(commandParts[1]);
                arr.push(number)
                break;
            case `Remove`:
                number = Number(commandParts[1]);
                arr = arr.filter(element => element !== number);
                break;
            case `RemoveAt`:
                index = Number(commandParts[1]);
                arr.splice(index, 1);
                break;
            case `Insert`:
                number = Number(commandParts[1]);
                index = Number(commandParts[2]);
                arr.splice(index, 0, number);
                break;
        }
    }
    console.log(arr.join(` `));
}

arrManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']) // 4 53 6 8 43 3