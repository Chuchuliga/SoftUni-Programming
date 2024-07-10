function addressBook(array) {
    let addressBook = {};
    
    for (const row of array) {
        const [name, address] = row.split(`:`);
        addressBook[name] = address;
    }
    
    const entries = Object.entries(addressBook);
    entries.sort();

    for (const [name, address] of entries) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])
// Bill -> Ornery Rd
// Peter -> Carlyle Ave
// Tim -> Doe Crossing