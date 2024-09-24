function cityRecord(name, population, treasury) {
    const city = {};
    city.name = name;
    city.population = population;
    city.treasury = treasury;
    return city;
}

console.log(cityRecord('Tortuga', 7000, 15000))
// {name: 'Tortuga', population: 7000, treasury: 15000}