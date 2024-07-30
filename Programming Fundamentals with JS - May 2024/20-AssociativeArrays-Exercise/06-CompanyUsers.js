function companyUsers(input) {
    let map = new Map();
    
    for (const info of input) {
        const [company, id] = info.split(` -> `);
    
        if (!map.has(company)) {
            map.set(company, new Set());
            map.get(company).add(id);
        } else {
            map.get(company).add(id);
        }
    }

    const array = [...map].sort();

    for (const [company, ids] of array) {
        console.log(`${company}`);
        for (const id of ids) {
            console.log(`-- ${id}`);
        }
    }
}

companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])
// HP
// -- BB12345
// Microsoft
// -- CC12345
// SoftUni
// -- AA12345
// -- BB12345