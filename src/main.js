"use strict";
const arr = [1, 2, 3];
function reverseArr(arr) {
    return arr.reverse();
}
const reversedArr = reverseArr(arr);
console.log(arr);
console.log(reversedArr);
console.log(reversedArr === arr);
