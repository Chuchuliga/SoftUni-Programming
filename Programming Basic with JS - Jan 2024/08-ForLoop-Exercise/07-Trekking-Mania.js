function trekkingMania(input) {

    let groups = Number(input[0]);

    let sum = 0;
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 1; i < input.length; i++) {
        let climbersPerGroup = Number(input[i]);
        sum += Number(input[i]);

        if (climbersPerGroup <= 5) {
            count1 += climbersPerGroup;
        } else if (climbersPerGroup <= 12) {
            count2 += climbersPerGroup;
        } else if (climbersPerGroup <= 25) {
            count3 += climbersPerGroup;
        } else if (climbersPerGroup <= 40) {
            count4 += climbersPerGroup;
        } else {
            count5 += climbersPerGroup;
        }
    }
    
    let p1 = (count1 / sum) * 100;
    let p2 = (count2 / sum) * 100;
    let p3 = (count3 / sum) * 100;
    let p4 = (count4 / sum) * 100;
    let p5 = (count5 / sum) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

trekkingMania(["5", "25", "41", "31", "250", "6"])