function ladybugs(array) {
    let fieldSize = array[0];
    let ladybugsIndex = array[1].split(` `).map(Number);
    let field = [];

    for (let i = 0; i < fieldSize; i++) {
        
        if (ladybugsIndex.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let j = 2; j < array.length; j++) {
        let command = array[j];
        let tokens = command.split(` `);
        
        let ladubugIndex = Number(tokens[0]);
        let direction = tokens[1];
        let flyLength = Number(tokens[2]);

        if (!field[ladubugIndex]) {
            continue;
        } 

        field[ladubugIndex] = 0;

        if (direction === `left`) {
            let newIndex = ladubugIndex - flyLength;

            if (newIndex >= 0) {

                while (field[newIndex] === 1) {
                    newIndex -= flyLength;
                }

                if (newIndex >= 0) {
                    field[newIndex] = 1;
                }
            }
        } else {
            let newIndex = ladubugIndex + flyLength;

            if (newIndex < field.length) {

                while (field[newIndex] === 1) {
                    newIndex += flyLength;
                }

                if (newIndex < field.length) {
                    field[newIndex] = 1;
                }
            }
        }
    }
    console.log(field.join(` `));
}

ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ])