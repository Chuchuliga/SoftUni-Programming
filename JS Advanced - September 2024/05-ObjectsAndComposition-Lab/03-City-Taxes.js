function cityTaxes(name, population, treasury) {
    const city = {};
    city.name = name;
    city.population = population;
    city.treasury = treasury;
    city.taxRate = 10;

    city.collectTaxes = function name(params) {
        this.treasury += Math.floor(this.population * this.taxRate);
    };

    city.applyGrowth = function(percent) {
        this.population += Math.floor((percent / 100) * this.population);
    };

    city.applyRecession = function(percent) {
        this.treasury -= Math.ceil((percent / 100) * this.treasury);
    };

    return city;
}

const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
// {name: 'Tortuga', population: 7000, treasury: 15000, taxRate: 10, collectTaxes: ƒ, …}


city.collectTaxes();
console.log(city);
// {name: 'Tortuga', population: 7000, treasury: 85000, taxRate: 10, collectTaxes: ƒ, …}

city.applyGrowth(5);
console.log(city);
// {name: 'Tortuga', population: 7350, treasury: 85000, taxRate: 10, collectTaxes: ƒ, …}

city.applyRecession(7);
console.log(city);
// {name: 'Tortuga', population: 7350, treasury: 79049, taxRate: 10, collectTaxes: ƒ, …}