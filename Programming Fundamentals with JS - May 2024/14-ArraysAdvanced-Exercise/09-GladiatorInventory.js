function gladiatorInventory(array) {
    let inventory = array.shift().split(` `);

    for (let i = 0; i < array.length; i++) {
        let commands = array[i].split(` `);
        let command = commands[0];
        let equipment = commands[1];

        switch (command) {
            case `Buy`:
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment)
                }
                break;
            case `Trash`:
                if (inventory.includes(equipment)) {
                    let indexToDelete = inventory.indexOf(equipment);
                    inventory.splice(indexToDelete, 1)
                }
                break;
            case `Repair`:
                if (inventory.includes(equipment)) {
                    let indexToRepair = inventory.indexOf(equipment);
                    inventory.splice(indexToRepair, 1);
                    inventory.push(equipment);
                }
                break;
            case `Upgrade`:
                let equipmentSplited = equipment.split(`-`);
                equipment = equipmentSplited[0];
                let upgrade = equipmentSplited[1];
                
                if (inventory.includes(equipment)) {
                    let indexOfUpdate = inventory.indexOf(equipment);
                    inventory.splice(indexOfUpdate + 1, 0, `${equipment}:${upgrade}`)
                }
                break;
        }
        
    }
    console.log(inventory.join(` `));
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']) // SWORD SWORD:Steal Bag Spear