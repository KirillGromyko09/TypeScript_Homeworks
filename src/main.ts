// 1
interface Address {
    city: string;
    street: string;
    zipCode: number;
}
interface User {
    name: string;
    age: number;
}
interface UserWithAddress extends Address, User {
    email: string;
}
const user: UserWithAddress = {
    city: 'Odessa',
    street: 'Radistna',
    zipCode: 65033,
    name: 'Kirill',
    age: 21,
    email: 'hello@gmail.com',
}
console.log(user);

// 2
