function magicSum(list, targetSum) {
    list.forEach((x, i) => {
        for (let j = i + 1; j < list.length; j++) {
            if (x + list[j] === targetSum) {
                console.log(`${x} ${list[j]}`);
            }
        }
    });
}


magicSum([1, 7, 6, 2, 19, 23], 8)