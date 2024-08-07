function bookShelf(input) {
    const shelf = new Map();
    const booksOnShelf = new Map()

    for (const command of input) {
        
        if (command.includes(`->`)) {
            const [id, genre] = command.split(` -> `);

            if (!shelf.get(id)) {
                shelf.set(id, genre);
                booksOnShelf.set(id, []);
            }
        } else {
            const [bookTitle, autorAndGenre] = command.split(`: `);
            const [bookAuthor, bookGenre] = autorAndGenre.split(`, `);

            for (let [id, genre] of shelf) {

                if (bookGenre === genre) {
                    booksOnShelf.get(id).push([bookTitle, bookAuthor]);
                    break;
                }
            }
        }
    }

    let array = [...booksOnShelf].sort( (a, b) => b[1].length - a[1].length);

    for (const [id, books] of array) {
        console.log(`${id} ${shelf.get(id)}: ${books.length}`);

        for (const [title, author] of books) {
            console.log(`--> ${title}: ${author}`);
        }
    }
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])
// 3 sci-fi: 3
// --> Future of Dawn: Aiden Rose
// --> Losing Dreams: Gail Starr
// --> Name of Earth: Jo Bell
// 1 history: 2
// --> Lions and Rats: Gabe Roads
// --> Pilots of Stone: Brook Jay
// 2 mystery: 1
// --> Child of Silver: Bruce Rich