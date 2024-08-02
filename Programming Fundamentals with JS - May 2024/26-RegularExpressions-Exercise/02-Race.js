function race(input) {
    const patternForName = /[A-Za-z]/g;
    const patternForDistance = /[0-9]/g;
    const names = input.shift().split(', ');
    const race = new Map();
    
    for (const command of input) {

        if (command !== 'end of race') {
            const name = command.match(patternForName).join('');
            const distance = command.match(patternForDistance);
            let distanceSum = 0;

            for (const number of distance) {
                distanceSum += Number(number);
            }

            if (names.includes(name)) {

                if (!race.has(name)) {
                    race.set(name, distanceSum);
                } else {
                    race.set(name, race.get(name) + distanceSum);
                }
            }
        }
    }
    
    let result = [...race].sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < 3; i++) {
        const [name, distance] = result[i];
        if (i === 0) {
            console.log(`1st place: ${name}`);
        } else if (i === 1) {
            console.log(`2nd place: ${name}`);
        } else {
            console.log(`3rd place: ${name}`);
        }
    }
}

race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race'])
// 1st place: George
// 2nd place: Peter
// 3rd place: Tom  