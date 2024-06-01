function vacationBooksList(input){
    let pageNumber = Number(input[0]);
    let page = Number(input[1]);
    let daysNumber = Number(input[2]);
    let allTime = pageNumber / daysNumber;
    let hoursInOneDay = allTime / page;
    console.log(hoursInOneDay)
}

vacationBooksList([`212`, `20`, `2`])