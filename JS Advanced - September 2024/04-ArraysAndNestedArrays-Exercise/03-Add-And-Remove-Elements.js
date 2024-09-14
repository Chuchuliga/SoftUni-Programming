function addAndRemoveElements(arr) {
    const result = [];
    let num = 1;

    for (const command of arr) {
        
        if (command === 'add') {
            result.push(num);
        } else {
            result.pop();
        }
        num++;
    }

    if (result.length !== 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty'); 
    }
}

addAndRemoveElements(['add', 'add', 'add', 'add'])
addAndRemoveElements(['add', 
    'add', 
    'remove', 
    'add', 
    'add'])
    addAndRemoveElements(['remove', 
        'remove', 
        'remove']
        )

    
// 1
// 2
// 3
// 4