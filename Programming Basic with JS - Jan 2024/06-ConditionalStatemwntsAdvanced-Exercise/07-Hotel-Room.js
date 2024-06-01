function hotelRoom(input) {
    let month = input[0];
    let sleep = Number(input[1]);
    let studioSleep = 0;
    let apartmentSleep = 0;
    let Sdiscount = 0;
    let Adiscount = 0;
    if (month == `May` || month == `October`) {
            studioSleep = 50; 
            apartmentSleep = 65;
    } else if (month == `June` || month == `September`) {
            studioSleep = 75.20;
            apartmentSleep = 68.70;
    } else if (month == `July` || month == `August`) {
            studioSleep = 76;
            apartmentSleep = 77;
    }


    if ((sleep > 7 && sleep <= 14) && (month == `May` || month == `October`)) {
            studioSleep *= 0.95;
    } else if (sleep > 14 && (month == `May` || month == `October`)) {
            studioSleep *= 0.70;
    } else if (sleep > 14 && (month == `June` || month == `September`)) {
            studioSleep *= 0.80;
    } if (sleep > 14) {
        apartmentSleep *= 0.90;
    }
    let Sprice = sleep * studioSleep;
    let Aprice = sleep * apartmentSleep;
    console.log(`Apartment: ${Aprice.toFixed(2)} lv.`)
    console.log(`Studio: ${Sprice.toFixed(2)} lv.`)
}

hotelRoom([`August`, `14`])