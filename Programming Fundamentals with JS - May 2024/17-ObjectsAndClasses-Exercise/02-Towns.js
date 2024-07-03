function towns(array) {
    let towns = {};

    for (let i = 0; i < array.length; i++) {
        let info = array[i].split(` | `);
        towns.town = info[0];
        towns.latitude = Number(info[1]).toFixed(2);
        towns.longitude = Number(info[2]).toFixed(2);
        console.log(towns);
    }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])
// {town: 'Sofia', latitude: '42.70', longitude: '23.33'}
// {town: 'Beijing', latitude: '39.91', longitude: '116.36'}