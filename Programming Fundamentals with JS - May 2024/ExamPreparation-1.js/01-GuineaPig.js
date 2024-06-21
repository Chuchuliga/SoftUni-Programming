function guineaPig(array) {
    let food  = Number(array.shift()) * 1000;
    let hay = Number(array.shift()) * 1000;
    let cover = Number(array.shift()) * 1000;
    let weight = Number(array.shift()) * 1000;

    for (let day = 1; day <= 30; day++) {
        food = food - 300;
        
        if (day % 2 === 0) {
            hay -= food * 0.05;
            if (hay <= 0) {
                console.log(`Merry must go to the pet store!`);
                return;
            }
        }
        if (day % 3 === 0) {
            cover -= weight / 3;
            if (cover <= 0) {
                console.log(`Merry must go to the pet store!`);
                return;
            }
        }
        if (food <= 0) {
            console.log(`Merry must go to the pet store!`);
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
}

guineaPig(["10", "5", "5.2", "1"]) 
// Everything is fine! Puppy is happy! Food: 1.00, Hay: 1.10, Cover: 1.87 
guineaPig(["1", "1.5", "3", "1.5"]) 
// Merry must go to the pet store! 
guineaPig(["9", "5", "5.2", "1"]) 
// Merry must go to the pet store!