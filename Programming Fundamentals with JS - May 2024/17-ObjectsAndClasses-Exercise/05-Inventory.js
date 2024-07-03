function inventory(array) {
    let inventory = [];
    
    class Heros {
        constructor(name, level, item) {
            this.name = name;
            this.level = level;
            this.item = item;
        }

        log() {
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${Number(this.level)}`);
            console.log(`items => ${this.item}`); 
        }

    }

    for (let i = 0; i < array.length; i++) {
        let info = array[i].split(` / `);
        inventory.push(new Heros(info[0], info[1], info[2]));
    }
    inventory.sort((a, b) => a.level - b.level);

    for (let hero of inventory) {
        hero.log();
    }
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])
// Hero: Hes
// level => 1
// items => Desolator, Sentinel, Antara
// Hero: Derek
// level => 12
// items => BarrelVest, DestructionSword
// Hero: Isacc
// level => 25
// items => Apple, GravityGun