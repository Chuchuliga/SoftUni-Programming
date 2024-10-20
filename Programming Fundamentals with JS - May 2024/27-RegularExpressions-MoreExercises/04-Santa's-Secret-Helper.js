function santasSecretHelper(input) {
    const regex = /[@](?<name>[A-Za-z]+)[^@!:>-]+[!](?<behaviour>[G|N])[!]/g;
    const key = input.shift();

    for (const info of input) {
        
        if (info !== 'end') {
            const data = info.split('').map(x => String.fromCharCode(x.charCodeAt(0) - key)).join('');

            while (matchInfo = regex.exec(data)) {
                const {name, behaviour} = matchInfo.groups;

                if (behaviour === 'G') {
                    console.log(name);
                }
            }
        }
    }
}

santasSecretHelper(['3', 'CNdwhamigyenumje$J$', 'CEreelh-nmguuejnW$J$', 'CVwdq&gnmjkvng$Q$', 'end'])
// Kate
// Bobbie