function arrayManipulator(print, commands) {
    let index = 0;
    let el = 0;
    let sum = [];
    for (let i = 0; i < commands.length; i++) {
        let commandsSplited = commands[i].split(` `);
        let command = commandsSplited.shift();

        switch (command) {
            case `add`:
                index = Number(commandsSplited.shift());
                el = Number(commandsSplited.shift());
                print.splice(index, 0, el);
                break;
            case `addMany`:
                index = Number(commandsSplited.shift());
                print.splice(index, 0, ...commandsSplited.map(x => Number(x)));
                break;
            case `contains`:
                el = Number(commandsSplited.shift());
                index = print.indexOf(el);
                console.log(index);
                break;
            case `remove`:
                index = Number(commandsSplited.shift());
                print.splice(index, 1);
                break;
            case `shift`:
                let position = Number(commandsSplited.shift());
                for (let j = 0; j < position; j++) {
                    el = print.shift();
                    print.push(el);
                }
                break;
            case `sumPairs`:
                let tempPrint = [];
                for (let k = 0; k < print.length; k += 2) {
                    sum = print[k] + (print[k + 1] || 0);
                    tempPrint.push(sum)
                }
                print = tempPrint;
                break;
            case `print`:
                    console.log(`[ ${print.join(`, `)} ]`);
                return; 
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
// 0
// -1 
// [ 1, 8, 2, 4, 5, 6, 7 ]
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);