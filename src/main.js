"use strict";
const arr = [1, 2, 3];
const test = [1, 2, 3, 4, [1, 3], 'hello', { 'Type': 'Script' }];
function reverseArr(arr) {
    const length = arr.length;
    for (let i = 0; i < length / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
}
const reversedArr = reverseArr(arr);
const reversedTest = reverseArr(test);
console.log(reversedArr);
console.log(reversedTest);
console.log(reversedTest === test);
console.log(reversedArr === arr);
