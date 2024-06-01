function evenPowersOf2(input) {
    let power = Number(input[0]);
    for(let a = 0; a <= power; a++) {
        if(a % 2 == 0) {
        console.log(Math.pow(2,a));
        }
    }
}

evenPowersOf2([`3`])