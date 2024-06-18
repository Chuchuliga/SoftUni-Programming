function houseParty(array) {
    let list = [];
    for (let i = 0; i < array.length; i++) {
        let commands = array[i];
        let command = commands;
        commands = array[i].split(` `);
        const name = commands[0];
        
        if (command === `${name} is going!`) {
            if (list.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else { 
                list.push(name);
            }
        } else if (command === `${name} is not going!`) {
            if (list.includes(name)) {
                list = list.filter(item => item !== name);
            } else {
            console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(list.join(`\n`));
}

houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])
// John is not in the list! 
// Allie