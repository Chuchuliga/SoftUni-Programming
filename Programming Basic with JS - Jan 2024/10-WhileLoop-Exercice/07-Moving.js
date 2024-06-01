function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let space = width * length * height;

    let index = 3;
    let command = input[index];

    let boxesSum = 0;

    while (command !== `Done`) {
        let boxes = Number(command);

        boxesSum += boxes;

        if (boxesSum > space) {
            let spaceNeeded = boxesSum - space;
            console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`);
            break;
        }

        index++;
        command = input[index];
    }
    if (space >= boxesSum) {
        let spaceLeft = space - boxesSum
        console.log(`${spaceLeft} Cubic meters left.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"])