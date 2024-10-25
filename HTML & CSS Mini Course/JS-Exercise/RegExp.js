// \w – matches any word character (a-z, A-Z, 0-9, _)
// \W – matches any non-word character (the opposite of \w)
// \s – matches any white-space character
// \S – matches any non-white-space character (opposite of \s)
// \d – matches any decimal digit (0-9)
// \D – matches any non-decimal character (the opposite of \d)

// [nvj]+ matches any character that is either n, v or j
// {n}ode.{j}s {v}0.12.2 
// {} - emphasized
// [^abc] – matches any character that is not a, b or c
// {A}b{r}a{h}a{m} 
// {} - emphasized
// [0-9] – character range: matches any digit from 0 to 9
// John is {8} years old. 
// {} - emphasized

// * – matches the previous element zero or more times
// \+\d*    =>  {+359885976002} a{+}b
// {} - emphasized
// + – matches the previous element one or more times
// \+\d+    =>  {+359885976002} a+b
// {} - emphasized
// ? – matches the previous element zero or one time
// \+\d?    =>  {+3}59885976002 a{+}b
// {} - emphasized
// {3} – matches the previous element exactly 3 times
// \+\d{3}  =>  {+359}885976002 a+b
// {} - emphasized

// (subexpression) – captures the matched subexpression as numbered group
// \d{2}-(\w{3})-\d{4}  =>  {22}-{Jan}-{2015}
// {} - emphasized
// (?:subexpression) – defines a non-capturing group
// ^(?:Hi|hello),\s*(\w+)$  =>  {Hi}, {Peter}
// {} - emphasized
// (?<name>subexpression) – defines a named capturing group
// (?<day>\d{2})-(?<month>\w{3})-(?<year>\d{4})  =>  {22}-{Jan}-{2015}
// {} - emphasized


// The method test(string)
// Determines whether there is a match
let text = 'Today is 2015-05-11';
let regexp = /\d{4}-\d{2}-\d{2}/g;
let containsValidDate = regexp.test(text);
console.log(containsValidDate); // true


// The method - match(regexp)
// Returns an array of all matches (strings)
let text1 = 'Peter: 123 Mark: 456';
let regexp1 = /([A-Z][a-z]+): (\d+)/g;
let matches = text1.match(regexp1);
console.log(matches.length); // 2
console.log(matches[0]); // Peter: 123
console.log(matches[1]); // Mark: 456


// The method exec(string, text)
// Works with a pointer and returns the groups
let text2 = 'Peter: 123 Mark: 456';
let regexp2 = /([A-Z][a-z]+): (\d+)/g;
let firstMatch = regexp2.exec(text2);
let secondMatch = regexp2.exec(text2);
console.log(firstMatch[0]) // Peter: 123
console.log(firstMatch[1]); // Peter
console.log(firstMatch[2]); // 123


// The method replace(regexp, stringReplacement)
// Replaces all strings that match the pattern with the provided replacement
let text3 = 'Peter: 123 Mark: 456';
let replacement = '999';
let regexp3 = /\d{3}/g;
let result = text3.replace(regexp3, replacement);
console.log(result); // Peter: 999 Mark: 999


// The method matchAll(regexp)
// Returns an iterator of all results matching a string against a regular expression, including capturing groups
const regexp4 = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp4)];
console.log(array[0]); // ['test1', 'e', 'st1', '1', index: 0, input:'test1test2', length: 4]

// The method split(regexp)
// Splits the text by the pattern
// Returns an array of strings
let text4 = '1 2 3 4';
let regexp5 = /\s+/g;
let result1 = text4.split(regexp5);
console.log(result1) // ['1', '2', '3', '4'];