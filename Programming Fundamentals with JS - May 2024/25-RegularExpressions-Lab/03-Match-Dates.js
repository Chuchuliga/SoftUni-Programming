function matchDates(dates) {
    const pattern = /(?<day>\d{2})([-.\/])(?<month>\w{3})\2(?<year>\d{4})/g;
    
    while ((validDate = pattern.exec(dates)) !== null) {
        const day = validDate.groups['day'];
        const month = validDate.groups['month'];
        const year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])
// Day: 13, Month: Jul, Year: 1928
// Day: 10, Month: Nov, Year: 1934
// Day: 25, Month: Dec, Year: 1937