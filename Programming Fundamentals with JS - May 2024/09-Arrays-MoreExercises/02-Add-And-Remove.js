function addAndRemove(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        switch (command) {
            case `add`:
                newArray.push(i + 1);
                break;
            case `remove`:
                newArray.pop();
                break;
        }
    }
    if (!newArray.length ) {
        console.log(`Empty`);
    }
    console.log(newArray.join(` `));
}

addAndRemove(['add', 'add', 'add', 'add'])