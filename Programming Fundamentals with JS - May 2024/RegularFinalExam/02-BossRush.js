function bossRush(input) {
    const pattern = /\|(?<boss>[A-Z]+)\|:#(?<title>[A-Za-z]+[ ]*[A-Z]*[a-z]*)#/g;
    let rownNum = Number(input.shift());  
    let result = []; 
    
    for (let i = 0; i < rownNum; i++) {
        
        if (!input[i].match(pattern)) {
            console.log('Access denied!');
        }
        
        while (result = pattern.exec(input[i])) {
            let strength = result.groups.boss.length;
            let armor = result.groups.title.length;
            console.log(`${result.groups.boss}, The ${result.groups.title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
        }
    }
}

bossRush(['3', '|PETER|:#Lead architect#', '|GEORGE|:#High Overseer#', '|ALEX|:#Assistant Game Developer#'])
// PETER, The Lead architect
// >> Strength: 5
// >> Armor: 14
// GEORGE, The High Overseer
// >> Strength: 6
// >> Armor: 13
// Access denied!