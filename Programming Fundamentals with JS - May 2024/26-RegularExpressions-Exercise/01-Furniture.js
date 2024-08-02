function furniture(input) {
    const pattern = />>(?<furniture>[A-Z]*[a-z]*)<<(?<price>[0-9]*.[0-9]*)!(?<quantity>[0-9]*)/g;
    input = input.join(' ');
    let sum = 0;
    const furnitures = [];
    let furnituresInfo = [];

    while (furnituresInfo = pattern.exec(input)) {
        
        if (!furnituresInfo.includes('Invalid')) {
            const furniture = furnituresInfo.groups['furniture'];
            const price = furnituresInfo.groups['price'];
            const quantity = furnituresInfo.groups['quantity'];
            furnitures.push(furniture);
            sum += price * quantity;
        }
    }
    console.log('Bought furniture:');
    
    for (const furniture of furnitures) {
        console.log(furniture);
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
// Bought furniture:
// Sofa
// TV
// Total money spend: 2436.69 