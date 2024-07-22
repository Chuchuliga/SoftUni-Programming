function partyTime(input){
    let vipList = [];
    let regList = [];
    let guest = input.shift();

    while (guest !== `PARTY`){
    
        if (/^\d+/.test(guest)) {
            vipList.push(guest);
        } else {
            regList.push(guest);
        }
        guest = input.shift();
    }
 
    for (const guest of input) {

        if (vipList.includes(guest)) {
            vipList.splice(vipList.indexOf(guest), 1);
        } 
        
        if(regList.includes(guest)){
            regList.splice(regList.indexOf(guest),1);
        }
    }
    let missingGuests = [...vipList, ...regList];
    console.log(missingGuests.length);
    console.log(missingGuests.join(`\n`));
}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])
// 2
// 7IK9Yo0h
// tSzE5t0p