function piccolo(array) {
    let parking = [];
    
    for (const info of array) {
        let [direction, car] = info.split(`, `);

        if (direction === `IN`) {
            if (!parking.includes(car)) {
                parking.push(car);
            }
        } else if (direction === `OUT`) {
            let index = parking.indexOf(car);
            if (index !== -1) {
                parking.splice(index, 1);
            }
        }
    }

    if (parking.length > 0) {
        let sortedParking = Array.from(parking).sort();
        console.log(sortedParking.join(`\n`));
    } else {
        console.log(`Parking Lot is Empty`);
    }
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])
// CA2822UU
// CA2844AA
// CA9876HH
// CA9999TT