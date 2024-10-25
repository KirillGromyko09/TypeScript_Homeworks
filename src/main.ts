let

const original: object = { a: 1, b: { c: 2 }, d: [3, 4] };
function deepClone(obj: object) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
    // const clone: object | [] = Array.isArray(obj) ? [] : {};
    const clone: object = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone((obj as never)[key]);
        }
    }
    return clone;
}

const copy = deepClone(original);
console.log(original !== copy);
// console.log(original.b !== copy.b);
// console.log(original.d !== copy.d);
