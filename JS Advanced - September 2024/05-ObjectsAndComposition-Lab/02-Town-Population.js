function townpopulation(arr) {
    const result = {};

    for (const cityInfo of arr) {
        let [city, population]= cityInfo.split(' <-> ');
        population = Number(population);

        if (result.hasOwnProperty(city)) {
            result[city] += population;
        } else {
            result[city] = population;
        }
    }
    
    for (const city in result) {
        console.log(`${city} : ${result[city]}`);
    }
}

townpopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000'])
// Sofia : 1200000
// Montana : 20000
// New York : 10000000
// Washington : 2345000
// Las Vegas : 1000000