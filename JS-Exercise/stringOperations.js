// charAt()
let str = "Hello, JS";
char = str.charAt(2); // Expected output: l

// concat()
let greet = "Hello, ";
let name = "John!";
let result = greet.concat(name);
console.log(result); // Expected output: "Hello, John!"

// indexOf()
let str1 = "I am JavaScript developer";
console.log(str1.indexOf("Java")); // Expected output: 5
console.log(str1.indexOf("java")); // Expected output: -1

// lastIndexOf()
let str2 = "Intro to programming";
let last = str2.lastIndexOf("o");
console.log(last); // Expected output: 11

// substrring()
let str3 = "I am JavaScript developer";
let sub = str3.substring(5, 10);
console.log(sub); // Expected output: JavaS

// replace()
let text = 'Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.';
let replacedText = text.replace(".bg", ".com");
console.log(replacedText);
// Hello, john@softuni.com, you have been using john@softuni.bg in your registration.

// replaceAll()
let text1 = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.";
let replacedText1 = text1.replaceAll(".bg", ".com");
console.log(replacedText1);
// Hello, john@softuni.com, you have been using john@softuni.com in your registration.

// split()
let text2 = "I love fruits";
let words = text2.split(' ');
console.log(words); // Expected output: ['I', 'love', 'fruits']

// includes()
let text3 = "I love fruits.";
console.log(text3.includes("fruits")); // Expected output: true
console.log(text3.includes("banana")); // Expected output: false

// repeat()
let num = 3;
for (let i = 0; i <= num; i++) {
    console.log('*'.repeat(i));
}

// trim()
let text4 = "   Annoying spaces   ";
console.log(text4.trim()); // Expected output: "Annoying spaces"

//trimStart()
let text5 = "   Annoying spaces   ";
console.log(text5.trimStart()); // Expected output: "Annoying spaces"

// trimEnd()
let text6 = "   Annoying spaces   ";
console.log(text6.trimEnd()); // Expected output: "Annoying spaces"

// startsWith()
let text7 = "My name is John"
console.log(text7.startsWith('My')); // Expected output: true

// endsWith()
let text8 = "My name is John"
console.log(text8.endsWith('John')); // Expected output: true

// padStart()
let text9 = "010";
console.log(text9.padStart(8, '0')); // Expected output: 00000010

// padEnd()
let sentence = "He passed away";
console.log(sentence.padEnd(20, '.'));
// Expected output: He passed away......