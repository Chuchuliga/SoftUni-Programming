function arrayRotation(array, totalRotations) {
    for (let curRotation = 1; curRotation <= totalRotations; curRotation++) {
        let element = array.shift();
        array.push(element)
    }
    console.log(array.join(` `));
}

arrayRotation()