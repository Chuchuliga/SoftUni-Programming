function cake(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let cakeSize = length * width;

    let index = 2;
    let command = input[index];

    while (command !== `STOP`) {
        let pieces = Number(command);

        cakeSize -= pieces;
        
        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    } 
    

    if (command == `STOP`) {
        console.log(`${cakeSize} pieces are left.`);
    }
}

cake([`10`, `2`, `2`, `4`, `6`, `STOP`])