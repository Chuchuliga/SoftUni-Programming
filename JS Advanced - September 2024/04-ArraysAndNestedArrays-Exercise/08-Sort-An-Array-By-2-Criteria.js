function sortAnArrayBy2Criteria(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    arr.sort((a, b) => a.length - b.length);
    console.log(arr.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
// beta
// alpha
// gamma