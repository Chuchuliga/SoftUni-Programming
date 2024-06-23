function ChatLogger(array) {
    let chatHistroy = [];
    for (let i = 0; i < array.length; i++) {
        let commands = array[i].split(` `);
        let command = commands.shift();
        let massage = ``;
        let index = 0;

        switch (command) {
            case `Chat`:
                massage = commands.shift();
                chatHistroy.push(massage);
                break;
            case `Delete`:
                massage = commands.shift();
                if (chatHistroy.includes(massage)) {
                    index = chatHistroy.indexOf(massage);
                    chatHistroy.splice(index, 1);
                }
                break;
            case `Edit`:
                massage = commands.shift();
                let editedMassage = commands.shift();
                if (chatHistroy.includes(massage)) {
                    index = chatHistroy.indexOf(massage);
                    chatHistroy.splice(index, 1, editedMassage);
                }
                break;
            case `Pin`:
                massage = commands.shift();
                if (chatHistroy.includes(massage)) {
                    index = chatHistroy.indexOf(massage);
                    chatHistroy.splice(index, 1);
                    chatHistroy.push(massage);
                }
                break;
            case `Spam`:
                let tempArray = [];
                for (let j = 0; j < commands.length; j++) {
                    massage = commands[j];
                    chatHistroy.push(massage);
                }
                break;
            case `end`:
                console.log(chatHistroy.join(`\n`));
                return;
        }
        
    }
}

ChatLogger(["Chat John", "Spam Let's go to the zoo", "Edit zoo cinema", "Chat tonight", "Pin John", "end"])
// Let's
// go
// to
// the
// cinema
// tonight
// John