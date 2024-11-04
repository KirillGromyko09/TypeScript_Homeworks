"use strict";
const user = {
    city: 'Odessa',
    street: 'Radistna',
    zipCode: 65033,
    name: 'Kirill',
    age: 21,
    email: 'hello@gmail.com',
};
console.log(user);
const product1 = {
    name: 'Sofa',
    price: 200,
    category: {
        categoryName: 'Furniture',
        categoryId: 1
    }
};
const product2 = {
    name: "Phone",
    price: 800,
    category: {
        categoryName: "Electronics",
        categoryId: 1
    }
};
const product3 = {
    name: "Headphones",
    price: 200,
    category: {
        categoryName: "Accessories",
        categoryId: 2
    }
};
const order1 = {
    orderId: 1,
    userId: 1,
    products: [product1]
};
const order2 = {
    orderId: 2,
    userId: 2,
    products: [product2, product3]
};
const orders = [order1, order2];
console.log(orders);
const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'Smith'
};
const user2 = {
    firstName: 'Anna',
    lastName: 'Karenina',
};
const getFullName = (user) => {
    if (user.middleName) {
        return `${user.firstName} ${user.middleName} ${user1.lastName}`;
    }
    else {
        return `${user.firstName} ${user1.lastName}`;
    }
};
console.log(getFullName(user1));
console.log(getFullName(user2));
const settings = {
    theme: 'light',
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 3000,
    }
};
const applySettings = (settings) => {
    if (settings.theme === 'dark') {
        console.log('Applying dark theme...');
    }
    else if (settings.theme === 'light') {
        console.log('Applying light theme...');
    }
    if (settings.notifications) {
        console.log("Notifications are enabled.");
    }
    else {
        console.log("Notifications are disabled.");
    }
    if (settings.autoSave.enabled) {
        console.log(`AutoSave is enabled. Interval: ${settings.autoSave.interval} minutes.`);
    }
    else {
        console.log("AutoSave is disabled.");
    }
};
applySettings(settings);
