"use strict";
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    // const clone: object | [] = Array.isArray(obj) ? [] : {};
    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}
const copy = deepClone(original);
console.log(original !== copy);
// console.log(original.b !== copy.b);
// console.log(original.d !== copy.d);
