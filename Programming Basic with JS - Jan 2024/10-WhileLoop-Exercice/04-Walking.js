function walking(input) {

    let totalSteps = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== `Going home`) {
        let steps = Number(command);

        totalSteps += steps;

        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - 10000} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command == `Going home`) {
        let stepsGoingHome = Number(input[index]);

        totalSteps += stepsGoingHome

        if (totalSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${totalSteps - 10000} steps over the goal!`);
        } else {
            console.log(`${10000 - totalSteps} more steps to reach goal.`);
        }
    }
}

walking(["1000", "1500", "2000", "6500"])