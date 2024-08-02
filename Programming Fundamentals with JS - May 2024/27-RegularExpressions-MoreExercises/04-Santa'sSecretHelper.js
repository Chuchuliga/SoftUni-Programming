function santasSecretHelper(input) {
    const [key, goodChildren] = [input[0], []]

    for (const info of input.splice(1, input.indexOf('end'))) {
        const data = info.split('').map(x => String.fromCharCode(x.charCodeAt(0) - key)).join('')
        let [regex, matchInfo] = [/[@](?<name>[A-Za-z]+)[^@!:>-]+[!](?<behaviour>[G|N])[!]/g, '']

        while ((matchInfo = regex.exec(data)) !== null) {
            const {name: childName, behaviour: childBehaviour} = matchInfo.groups
            if (childBehaviour === 'G') goodChildren.push(childName)
        }
    }
    console.log(goodChildren.join('\n'))
}

santasSecretHelper(['3', 'CNdwhamigyenumje$J$', 'CEreelh-nmguuejnW$J$', 'CVwdq&gnmjkvng$Q$', 'end'])
// Kate
// Bobbie