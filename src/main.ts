interface Product {
    name: string;
    price: number;
    available: boolean;
}

function formatProduct(product: Product): string {
    const availability = product.available ? 'Так' : 'Ні';
    return `Товар: ${product.name}, Ціна: ${product.price} грн., В наявності: ${availability}`;
}


const product: Product = {
    name: 'Ноутбук',
    price: 15000,
    available: true
};

console.log(formatProduct(product));
