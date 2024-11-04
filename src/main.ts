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
interface Product {
    name: string;
    price: number;
    category: {
        categoryName: string;
        categoryId: number;
    };
}
interface Order{
    orderId: number;
    userId: number;
    products: Product[];
}

type OrdersArray = Order[];

const product1: Product = {
    name: 'Sofa',
    price : 200,
    category: {
        categoryName: 'Furniture',
        categoryId: 1
    }
}
const product2: Product = {
    name: "Phone",
    price: 800,
    category: {
        categoryName: "Electronics",
        categoryId: 1
    }
};
const product3: Product = {
    name: "Headphones",
    price: 200,
    category: {
        categoryName: "Accessories",
        categoryId: 2
    }
};
const order1 : Order = {
    orderId: 1,
    userId: 1,
    products: [product1]
}
const order2 : Order = {
    orderId: 2,
    userId:2,
    products:[product2,product3]
}
const orders: OrdersArray = [order1,order2];
console.log(orders);

// 3

interface Person {
    firstName: string;
    lastName: string;
    middleName?: string;
}
const user1:Person = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'Smith'
}
const user2:Person = {
    firstName: 'Anna',
    lastName: 'Karenina',
}

const getFullName = (user: Person) => {
    if(user.middleName){
        return `${user.firstName} ${user.middleName} ${user1.lastName}`
    }else {
        return `${user.firstName} ${user1.lastName}`
    }
}
console.log(getFullName(user1));
console.log(getFullName(user2));

// 4

interface Settings {
    theme: 'dark' | 'light';
    notifications: boolean;
    autoSave:{
        enabled:boolean;
        interval: number;
    }
}
const settings: Settings = {
    theme:'light',
    notifications: true,
    autoSave:{
        enabled: true,
        interval: 3000,
    }
}
const applySettings =(settings: Settings) : void=> {
    if (settings.theme === 'dark') {
        console.log('Applying dark theme...')
    }else if (settings.theme === 'light') {
        console.log('Applying light theme...')
    }

    if (settings.notifications) {
        console.log("Notifications are enabled.");
    } else {
        console.log("Notifications are disabled.");
    }

    if (settings.autoSave.enabled) {
        console.log(`AutoSave is enabled. Interval: ${settings.autoSave.interval} minutes.`);
    } else {
        console.log("AutoSave is disabled.");
    }
}
applySettings(settings);
