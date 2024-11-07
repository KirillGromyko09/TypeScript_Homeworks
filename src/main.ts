
function filterByProperty<T , K extends keyof T>(array:T[],property: K, value: T[K]): T[] {
    return array.filter((item:T) => item[property] === value);
}

type User = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
};

const users: User[] = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];
const activeUsers1 = filterByProperty(users, 'isActive', true);
const activeUsers2 = filterByProperty(users, 'isActive', true);
console.log(activeUsers1);
console.log(activeUsers2);
console.log(activeUsers1 === activeUsers2);
