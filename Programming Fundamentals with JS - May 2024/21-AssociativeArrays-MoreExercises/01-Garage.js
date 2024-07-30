function garage(input) {
    const garage = new Map();

    for (const string of input) {
        const [gargeNumber, carInfo] = string.split(` - `);
        const car = carInfo.split(`: `).join(` - `);

        if (!garage.has(gargeNumber)) {
            garage.set(gargeNumber, new Set());
            garage.get(gargeNumber).add(car);
        } else {
            garage.get(gargeNumber).add(car);
        }
    }

    for (const [garageNumber, carInfo] of garage) {
        console.log(`Garage № ${garageNumber}`);

        for (const car of carInfo) {
            console.log(`--- ${car}`);
        }
    }
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])
// Garage № 1
// --- color - blue, fuel type - diesel
// --- color - red, manufacture - Audi
// Garage № 2
// --- fuel type - petrol
// Garage № 4
// --- color - dark blue, fuel type - diesel, manufacture - Fiat