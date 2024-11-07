"use strict";
function filterByProperty(array, property, value) {
    return array.filter((item) => item[property] === value);
}
const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];
const activeUsers1 = filterByProperty(users, 'isActive', true);
const activeUsers2 = filterByProperty(users, 'isActive', true);
console.log(activeUsers1);
console.log(activeUsers2);
console.log(activeUsers1 === activeUsers2);
