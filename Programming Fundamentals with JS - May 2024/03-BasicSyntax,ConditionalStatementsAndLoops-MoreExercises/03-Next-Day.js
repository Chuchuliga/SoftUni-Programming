function nextDay(year, month, day) {
    let daysInMonth = 0;
    let months = 0;
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        daysInMonth = 31;
        day++;
    } else if (month === 4 || month === 6 || month === 9 || month === 11 ) {
        daysInMonth = 30;
        day++;
    } else if (month === 2 && year % 4 === 0) {
        daysInMonth = 29;
        day++;
    } else if (month === 2) {
        daysInMonth = 28;
        day++;
    }
    if (day > daysInMonth) {
        day = 1;
        month += 1;
    }
    if (month === 13) {
        month = 1;
        year += 1;
    }
    if (year < 100) {
        year = 1900 + year;
    }
    console.log(`${year}-${month}-${day}`);
}

nextDay(1, 1, 1)