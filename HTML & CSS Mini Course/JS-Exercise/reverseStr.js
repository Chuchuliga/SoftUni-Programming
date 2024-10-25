function reverseString(str) {
    let splitStr = str.split(``); //Тук на всяка буква се добавят ``, което прави всяка буква на отделен string, тоест [`H`, `e`, `l`, `l`, `o`]
    let reverseStr = splitStr.reverse(); //Тук последния string става първи и т.н., тоест [`o`, `l`, `l`, `e`, `H`]
    let joinStr = reverseStr.join(``); //Тук се махат всички `` и пак се превръща в един общ string, тоест [`olleH`]
    console.log(joinStr); //Тук се принтира това, което сме получили като joinStr, тоест olleH
}
reverseString('Hello')