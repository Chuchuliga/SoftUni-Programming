function heroes() {
    const fighter = (name) => {
        return {
            health: 100,
            stamina: 100,
            name,
            fight() {
                this.stamina--
                console.log(`${this.name} slashes at the foe!`)
            }
        }
    }

    const mage = (name) => {
        return {
            health: 100,
            mana: 100,
            name,
            cast(spell) {
                this.mana--
                console.log(`${this.name} cast ${spell}`)
            }
        }
    }
    return {mage, fighter}
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
// Scorcher cast fireball
scorcher.cast("thunder")
// Scorcher cast thunder
scorcher.cast("light")
// Scorcher cast light

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
// Scorcher 2 slashes at the foe!

console.log(scorcher2.stamina);
// 99
console.log(scorcher.mana);
// 97