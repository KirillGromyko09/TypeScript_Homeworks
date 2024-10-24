"use strict";
const getAverage = (array) => {
    if (array.length === 0)
        return 0;
    const sum = array.reduce((acc, el) => acc + el, 0);
    return sum / array.length;
};
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [4, 5, 9];
const array3 = [154, 283, 981];
console.log(getAverage(array1));
console.log(getAverage(array2));
console.log(getAverage(array3));
