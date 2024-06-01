function requiredReading(pages, pagesPerHour, days) {
    let totalTime = pages / pagesPerHour;
    let pagerPerDay = totalTime / days;
    console.log(pagerPerDay);
}

requiredReading(212, 20, 2)