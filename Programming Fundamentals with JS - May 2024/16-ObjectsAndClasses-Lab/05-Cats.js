function cats(array) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < array.length; i++) {
        let catData = array[i].split(` `);
        cats.push(new Cat(catData[0], catData[1]));
    }

    for (let cat of cats) {
        cat.meow(); 
    }

}

cats([`Mellow 2` , `Tom 5`])
// Mellow, age 2 says Meow
// Tom, age 5 says Meow