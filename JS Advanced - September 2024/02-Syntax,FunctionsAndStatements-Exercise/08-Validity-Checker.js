function validityChecker(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isValidDistance(distance) {
        return Number.isInteger(distance)
    }

    let distance1 = calculateDistance(x1, y1, 0, 0)
    if (isValidDistance(distance1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let distance2 = calculateDistance(x2, y2, 0, 0);
    if (isValidDistance(distance2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let distanceBetween = calculateDistance(x1, y1, x2, y2);
    if (isValidDistance(distanceBetween)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(3, 0, 0, 4)
// {3, 0} to {0, 0} is valid
// {0, 4} to {0, 0} is valid
// {3, 0} to {0, 4} is valid