interface OriginalType {
    a: number;
    b: { c: number };
    d: number[];
}

const original: OriginalType = { a: 1, b: { c: 2 }, d: [3, 4] };
function deepClone<T>(obj : T): T {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    const clone = (Array.isArray(obj) ? [] : {}) as { [K in keyof T]: T[K] };

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key as keyof T] = deepClone(obj [key as keyof T]);
        }
    }
    return clone;
}

const copy = deepClone(original);
console.log(original !== copy);
console.log(original.b !== copy.b);
console.log(original.d !== copy.d);
console.log(copy);
