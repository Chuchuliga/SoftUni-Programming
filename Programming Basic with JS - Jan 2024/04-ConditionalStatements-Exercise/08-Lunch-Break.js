function lunchBreak(input) {
    let name = input[0];
    let episode = Number(input[1]);
    let rest = Number(input[2]);
    let lunchBreak = rest * 0.125;
    let recreation = rest * 0.25;
    let finalRest = rest - (lunchBreak + recreation);
    if (finalRest >= episode) {
        let timeLeft = Math.ceil(finalRest - episode); 
        console.log(`You have enough time to watch ${name} and left with ${timeLeft} minutes free time.`)
    } else if (finalRest < episode) {
        let timeNeed = Math.ceil(episode - finalRest);
        console.log(`You don't have enough time to watch ${name}, you need ${timeNeed} more minutes.`)
    }
}

lunchBreak(["Game of Thrones", "60", "96"])