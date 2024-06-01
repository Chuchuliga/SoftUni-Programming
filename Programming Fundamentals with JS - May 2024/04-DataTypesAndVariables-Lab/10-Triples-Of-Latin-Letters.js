function triplesOfLatinLetters(numAsStr) {
    let num = Number(numAsStr)

    for (let a = 0; a < num; a++) {
        let firstChar = String.fromCharCode(97 + a);

        for (let b = 0; b < num; b++) {
            let secondChar = String.fromCharCode(97 + b);
            
            for (let c = 0; c < num; c++) {
                let thirdChar = String.fromCharCode(97 + c);
                console.log(`${firstChar}${secondChar}${thirdChar}`);
            }
        }
    }
}

triplesOfLatinLetters(`3`)