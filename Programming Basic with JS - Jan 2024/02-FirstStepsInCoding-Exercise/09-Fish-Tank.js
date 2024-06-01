function fishTank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]) / 100;
    let capacityDry = width * lenght * height;
    let capacityWet = (capacityDry - (procent * capacityDry)) / 1000;
    console.log(capacityWet)
}

fishTank(["85 ","75 ","47 ","17 "])