function worldSwimmingRecord(input) {
    let worldRecord = Number(input[0]);
    let distans = Number(input[1]);
    let time = Number(input[2]);
    let record = distans * time;
    let resistance = Math.floor(distans / 15) * 12.5;
    let bestRecord = record + resistance;
    if (bestRecord < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${bestRecord.toFixed(2)} seconds.`)
    } else if (bestRecord >= worldRecord) {
        let timeNeed = bestRecord - worldRecord
        console.log(`No, he failed! He was ${timeNeed.toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"])