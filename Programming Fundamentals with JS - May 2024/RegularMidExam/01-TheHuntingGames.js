function theHuntingGames(array) {
    let days = Number(array.shift());
    let players = Number(array.shift());
    let groupEnergy = Number(array.shift());
    let waterPerDayForOne = Number(array.shift());
    let foodPerDayForOne = Number(array.shift());
    let totalWater = days * players * waterPerDayForOne;
    let totalFood = days * players * foodPerDayForOne;

    for (let day = 1; day <= array.length; day++) {
        let energyLossPerDay = Number(array[day - 1]);

        groupEnergy -= energyLossPerDay;

        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }

        if (day % 2 === 0) {
            groupEnergy += groupEnergy *0.05;
            totalWater *= 0.70;
        }

        if (day % 3 === 0) {
            totalFood -= totalFood / players;
            groupEnergy += groupEnergy * 0.10
        }
    }
    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
}

theHuntingGames(["10", "7", "5035.5", "11.3", "7.2", "942.3", "500.57", "520.68", "540.87","505.99", "630.3", "784.20", "321.21", "456.8", "330"]) 
// You are ready for the quest. You will be left with - 658.72 energy!