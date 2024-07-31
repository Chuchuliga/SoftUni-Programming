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