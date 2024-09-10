function rotateArray(array) {
    let lastElement = Number(array.slice(-1));
    array.pop();
    for (let curRotation = 1; curRotation <= lastElement; curRotation++) {
        let element = array.pop();
        array.unshift(element);
    }
    console.log(array.join(` `));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])