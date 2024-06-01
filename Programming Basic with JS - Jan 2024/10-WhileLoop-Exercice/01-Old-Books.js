function oldBooks(input) {

    let favBook = input[0];
    let nameBook = 1;
    let serchingBook = input[nameBook];
    nameBook++;

    let numberBooks = 0;

    while (serchingBook !== `No More Books`) {

        if (serchingBook == favBook) {
            console.log(`You checked ${numberBooks} books and found it.`)
            break;
        }
        numberBooks++;

        serchingBook = input[nameBook];
        nameBook++;

    }
    if (serchingBook == `No More Books`) {
        console.log(`The book you search is not here!`)
        console.log(`You checked ${numberBooks} books.`)
    }
}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"])