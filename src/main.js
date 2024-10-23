"use strict";
function formatProduct(product) {
    const availability = product.available ? 'Так' : 'Ні';
    return `Товар: ${product.name}, Ціна: ${product.price} грн., В наявності: ${availability}`;
}
const product = {
    name: 'Ноутбук',
    price: 15000,
    available: true
};
console.log(formatProduct(product));
