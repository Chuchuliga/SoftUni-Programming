function tseamAccount(array) {
    let account = array[0].split(` `);
    for (let i = 1; i < array.length; i++) {
        let command = array[i].split(` `);
        let type = command[0];
        let game = command[1];

        if (type !== `Play!`) {
            if (type === `Install`) {
                if (!account.includes(game)) {
                    account.push(game);
                }
            } else if (type === `Uninstall`) {
                if (account.includes(game)) {
                    let indexToRemove = account.indexOf(game);
                    account.splice(indexToRemove, 1);
                }
            } else if (type === `Update`) {
                if (account.includes(game)) {
                    let indexToUpdate = account.indexOf(game);
                    account.splice(indexToUpdate, 1);
                    account.push(game);
                }
            } else if (type === `Expansion`) {
                let gameString = game.split(`-`);
                game = gameString[0];
                let expansion = gameString[1];
                if (account.includes(game)) {
                    let indexOfExpension = account.indexOf(game);
                    account.splice(indexOfExpension + 1, 0, `${game}:${expansion}`)
                }
            }
        }
    }
    console.log(account.join(` `));
}

tseamAccount(["CS WoW Diablo", "Install LoL", "Expansion WoW-Legion", "Play!"])