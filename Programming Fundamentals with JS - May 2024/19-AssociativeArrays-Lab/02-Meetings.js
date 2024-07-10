function meetings(array) {
    const meetings = {};

    for (const reservation of array) {
        const [weekday, name] = reservation.split(` `);

        if (!meetings.hasOwnProperty(weekday)) {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])
// Scheduled for Monday
// Scheduled for Wednesday
// Conflict on Monday!
// Scheduled for Friday
// Monday -> Peter
// Wednesday -> Bill
// Friday -> Tim