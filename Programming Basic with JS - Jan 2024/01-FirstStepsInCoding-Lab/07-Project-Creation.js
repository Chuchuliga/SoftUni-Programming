function projectCreation(input){
    let name = input[0];
    let projectNumbers = input[1];
    let hoursToFinish = projectNumbers * 3;
    console.log(`The architect ${name} will need ${hoursToFinish} hours to complete ${projectNumbers} project/s.`)
}

projectCreation([`Sanya`, `9`]);