function time15Minutes(input) {
    let hour = Number(input[0]);
    let minute = Number(input[1]);
    let minutes = hour * 60 + minute + 15;
    let newHour = Math.floor(minutes / 60);
    let newMinute = minutes % 60;
    if (newHour === 24) {
        newHour = 0;
    }
    if (newMinute < 10) {
        console.log(`${newHour}:0${newMinute}`);
    } else {
        console.log(`${newHour}:${newMinute}`);
    }
}

time15Minutes([`1`, `46`])