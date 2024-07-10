function phoneBook(array) {
    const phoneBook = {};

    for (const detiles of array) {
        const detilesArray = detiles.split(` `);
        const name = detilesArray[0];
        const number = detilesArray[1];
        phoneBook[name] = number;
    }

    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

phoneBook([`Tim 0834212554`, `Maria 0877547887`, `Gosho 0896543112`, `Tim 0876566344`])
// Tim -> 0876566344
// Peter -> 0877547887
// Bill -> 0896543112 