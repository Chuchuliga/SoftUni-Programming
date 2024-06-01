function test(input) {

    let locationCount = Number(input[0]);

    let a = 1;
    let sumGold = 0;
    let avgGoldPerDay = 0;
    let daysPerLocation = 0;
    let avgGold = 0;

    for (let location = 1; location <= locationCount; location++) {
        for (let index = 1; index <= input.length; index++) {
            avgGoldPerDay = Number(input[index]);
            index++;
            daysPerLocation = Number(input[index]);
            index++;
            let goldPerDay = Number(input[index]);

            while (daysPerLocation >= a) {
                sumGold += goldPerDay;
                index++;
                goldPerDay = Number(input[index]);
                a++;
            }
            
            a = 1;
            index--;
            
            avgGold = sumGold / daysPerLocation;
            if (avgGold >= avgGoldPerDay) {
                console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`);
                sumGold = 0;
                continue;
            } else if (avgGoldPerDay > avgGold) {
                let goldNeeded = avgGoldPerDay - avgGold;
                console.log(`You need ${goldNeeded.toFixed(2)} gold.`);
                break;       
            }
        }
    }
}
test(["1",
"5",
"3",
"10",
"1",
"3"])


	