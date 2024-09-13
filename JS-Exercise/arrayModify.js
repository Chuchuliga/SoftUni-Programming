// Pop 

// ▪ Removes the last element from an array and returns that element
// ▪ This method changes the length of the array
let nums1 = [10, 20, 30, 40, 50, 60, 70];
console.log(nums1.length); // 7
console.log(nums1.pop()); // 70
console.log(nums1.length); // 6
console.log(nums1); // [ 10, 20, 30, 40, 50, 60 ]


// Push

// ▪ The push() method adds one or more elements to
// the end of an array and returns the new length of the array

let nums2 = [10, 20, 30, 40, 50, 60, 70];
console.log(nums2.length); // 7
console.log(nums2.push(80)); // 8 (nums.length)
console.log(nums2); // [ 10, 20, 30, 40, 50, 60, 70, 80 ]


// Shift

// ▪ The shift() method removes the first element
// from an array and returns that removed element
// ▪ This method changes the length of the array

let nums3 = [10, 20, 30, 40, 50, 60, 70];
console.log(nums3.length); // 7
console.log(nums3.shift()); // 10 (removed element)
console.log(nums3); // [ 20, 30, 40, 50, 60, 70 ]


// Unshift

// ▪ The unshift() method adds one or more
// elements to the beginning of an array and returns
// the new length of the array

let nums4 = [40, 50, 60];
console.log(nums4.length); // 3
console.log(nums4.unshift(30)); // 4 (nums.length)
console.log(nums4.unshift(10,20)); // 6 (nums.length)
console.log(nums4); // [ 10, 20, 30, 40, 50, 60 ]


// Splice

// ▪ Changes the contents of an array by removing or replacing
// existing elements and/or adding new elements

let nums5 = [1, 3, 4, 5, 6];
nums5.splice(1, 0, 2); // inserts at index 1
console.log(nums5); // [ 1, 2, 3, 4, 5, 6 ]
nums5.splice(4, 1, 19); // replaces 1 element at index 4
console.log(nums5); // [ 1, 2, 3, 4, 19, 6 ]
let el = nums5.splice(2, 1); // removes 1 element at index 2
console.log(nums5); // [ 1, 2, 4, 19, 6 ]
console.log(el); // [ 3 ]


// Fill

// ▪ Fills all the elements of an array from a start index to
// an end index with a static value

let arr1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(arr1.fill(0, 2, 4)); // [1, 2, 0, 0]

// fill with 5 from position 1
console.log(arr1.fill(5, 1)); // [1, 5, 5, 5]
console.log(arr1.fill(6)); // [6, 6, 6, 6]


// Reverse 

// ▪ Reverses the array
// ▪ The first array element becomes the last, and the last
// array element becomes the first

let arr2 = [1, 2, 3, 4];
arr2.reverse();
console.log(arr2); // [ 4, 3, 2, 1 ]


// Join

// ▪ Creates and returns a new string by concatenating all
// of the elements in an array (or an array-like object),
// separated by commas or a specified separator string

let elements = ['Fire', 'Air', 'Water'];
console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // "FireAirWater"
console.log(elements.join('-')); // "Fire-Air-Water"
console.log(['Fire'].join(".")); // Fire


// Concat

// ▪ The concat() method is used to merge two or
// more arrays
// ▪ This method does not change the existing arrays, but
// instead returns a new array

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers1 = num1.concat(num2, num3);
console.log(numbers1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Slice

// ▪ The slice() method returns a shallow copy of a
// portion of an array into a new array object selected
// from begin to end (end not included)
// ▪ The original array will not be modified

let fruits1 = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits1.slice(1, 3);
let fruitsCopy = fruits1.slice();
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange', 'Lemon']


// Includes

// ▪ Determines whether an array contains a certain
// element, returning true or false as appropriate

// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97
let arr3 = ['a', 'b', 'c'];
arr3.includes('a', -100); // true
arr3.includes('b', -100); // true
arr3.includes('c', -100); // true
arr3.includes('a', -2); // false


// IndexOf

// ▪ The indexOf() method returns the first index at
// which a given element can be found in the array
// ▪ Output is -1 if element is not present

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
// start from index 2
console.log(beasts.indexOf('bison', 2)); // 4
console.log(beasts.indexOf('giraffe')); // -1


// ForEach

// ▪ The forEach() method executes a provided function
// once for each array element
// ▪ Converting a for loop to forEach

const items = ['item1', 'item2', 'item3'];
const copy = [];

// For loop
for (let i = 0; i < items.length; i++) {
    copy.push(items[i]);
}

// ForEach
items.forEach(item => { copy.push(item); });


// Map

// ▪ Creates a new array with the results of calling a
// provided function on every element in the
// calling array

let numbers2 = [1, 4, 9];
let roots = numbers2.map(function(num2, i, arr) {
return Math.sqrt(num2)
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


// Some

// ▪ The some() method tests whether at least one
// element in the array passes the test implemented by
// the provided function
// ▪ It returns a Boolean value

let array = [1, 2, 3, 4, 5];
let isEven = function(element) {
    // checks whether an element is even
    return element % 2 === 0;
};
console.log(array.some(isEven)); // true


// Find 

// ▪ Returns the first found value in the array, if an
// element in the array satisfies the provided testing
// function or undefined if not found

let array1 = [5, 12, 8, 130, 44];
let found = array1.find(function(element) {
    return element > 10;
});
console.log(found); // 12


// Filter

// ▪ Creates a new array with filtered elements only
// ▪ Calls a provided callback function once for each element in
// an array
// ▪ Does not mutate the array on which it is called

let fruits2 = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// Filter array items based on search criteria (query)
function filterItems(arr, query) {
        return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
};
console.log(filterItems(fruits2, 'ap')); // ['apple', 'grapes']


// Reduce

// ▪ The reduce() method executes a reducer function
// on each element of the array, resulting in a single
// output value

const array2 = [1, 2, 3, 4];
const reducer =
(accumulator, currentValue) => accumulator + currentValue;
console.log(array2.reduce(reducer)); // 10
console.log(array2.reduce(reducer, 5)); // 15


// Reduce Function 

// ▪ The reducer function takes four arguments:
// ▪ Accumulator
// ▪ Current Value
// ▪ Current Index (Optional)
// ▪ Source Array (Optional)
// ▪ Your reducer function's returned value is assigned to
// the accumulator
// ▪ Accumulator's value - the final, single resulting value

// Examples for Reduce and Reduce Function

// ▪ Sum all values
let sum = [0, 1, 2, 3].reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
console.log(sum); // 6

// ▪ Finding an average with reduce
const numbersArr= [30, 50, 40, 10, 70];
const average = 
    numbersArr.reduce((total, number, index, array) => {
        total += number;
        if( index === array.length-1) {
            return total/array.length;
        } else { return total; }
    });
console.log(average) // 40