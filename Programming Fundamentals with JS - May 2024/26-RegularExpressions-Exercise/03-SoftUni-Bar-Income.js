function softUniBarIncome(input) {
    const pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.\d]*(?<price>[0-9]+\.?\d*)\$/g;
    input = input.join(' ');
    let total = 0;
    let command;

    while ((command = pattern.exec(input)) !== null) {
        const name = command.groups.name;
        const product = command.groups.product;
        const quantity = Number(command.groups.quantity);
        const price = Number(command.groups.price);
        const totalPrice = quantity * price;
        total += totalPrice

        console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift'])
// George: Croissant - 20.60
// Peter: Gum - 1.30
// Maria: Cola - 2.40
// Total income: 24.30