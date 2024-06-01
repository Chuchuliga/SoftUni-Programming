function login(input) {
    let password = ``;
    let tries = 0;
    for(let i = input[0].length - 1; i >= 0; i--) {
        password += input[0].charAt(i);
       
    }

    let a = 1;    
    let curPassword = input[a];
    while(curPassword !== password) {
        if(tries >= 3) {
            if(curPassword === "password") {
                console.log(`User ${input[0]} logged in.`)
                return;
            }else{
                console.log(`User ${input[0]} blocked!`)
                return;
            }
        }
        console.log("Incorrect password. Try again.")
        tries++;
        a++;
        curPassword = input[a];
    }
    console.log(`User ${input[0]} logged in.`)
}

login(['Acer','login','go','let me in','recA'])