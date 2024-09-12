function timeToWalk(stepCount, length, speed) {
    let distanceInM = (stepCount * length);
    let speedInS = speed / 3.6;
    let time = distanceInM / speedInS;
    let rest = Math.floor(distanceInM / 500);

    let hours = 0;
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;

    minutes += rest;

    if (minutes >= 60) {
        hours = Math.floor(minutes / 60);
        minutes -= hours * 60;
    }

    if (hours < 10) {
        hours = `0${hours}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    console.log(`${hours}:${minutes}:${seconds.toFixed()}`);
}

timeToWalk(4000, 0.60, 5)
// 00:32:48