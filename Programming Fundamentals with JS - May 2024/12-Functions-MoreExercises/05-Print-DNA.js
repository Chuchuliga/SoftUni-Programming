function printDNA(num) {
    let sequence = "ATCGTTAGGG".split(``);
    let output = [];
    let count = 1;

    for (let j = 0; j < num; j++) { 
        let first = sequence.shift();
        let second = sequence.shift();

        if (count === 1) {
            output.push(`**${first}${second}**`); 
        } else if (count === 2 || count === 4) {
            output.push(`*${first}--${second}*`);     
        } else if (count === 3) {
            output.push(`${first}----${second}`);   
        }

        if (count === 4) {
            count = 0;
        }

        sequence.push(first)
        sequence.push(second)
        count++;
    }
    console.log(output.join(`\n`));
}

printDNA(4)
// **AT**
// *C--G*
// T----T
// *A--G*