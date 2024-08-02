function winningTicket(input) {
    const pattern = /(@{6,10}|#{6,10}|\${6,10}|\^{6,10})/;
    const tickets = input.split(', ');
    const output = [];

    function checkTicketHalves(left, right) {
        const leftMatch = left.match(pattern);
        const rightMatch = right.match(pattern);

        if (rightMatch && leftMatch && leftMatch[0][0] === rightMatch[0][0]) {
            const minLength = Math.min(leftMatch[0].length, rightMatch[0].length);
            const symbol = leftMatch[0][0];
            return minLength === 10 ? `10${symbol} Jackpot!` : `${minLength}${symbol}`;
        }
        return null;
    }

    for (const ticketInfo of tickets) {
        let ticket = ticketInfo.trim();

        if (ticket.length !== 20) {
            output.push(`invalid ticket`);
            continue;
        }

        const [left, right] = [ticket.slice(0, 10), ticket.slice(10)];
        const matchResult = checkTicketHalves(left, right);

        if (matchResult) {
            output.push(`ticket "${ticket}" - ${matchResult}`);
        } else {
            output.push(`ticket "${ticket}" - no match`);
        }
    }
    console.log(output.join('\n'));
}

winningTicket('Cash$$$$$$Ca$$$$$$sh')
// ticket "Cash$$$$$$Ca$$$$$$sh" - 6$