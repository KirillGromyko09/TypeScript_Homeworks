enum OrderStatus {
    Pending = 'pending',
    Processing = 'processing',
    Shipped = 'shipped',
    Delivered = 'delivered',
    Canceled = 'canceled',
}

enum PaymentType {
    CreditCard = 'creditCard',
    PayPal = 'paypal',
    BankTransfer = 'bankTransfer',
    CashOnDelivery = 'cashOnDelivery',
}

interface Order {
    id: string;
    amount: number;
    status: OrderStatus;
    payment: PaymentType;
}

const orders: Order[] = [
    { id: "1", amount: 100, status: OrderStatus.Pending, payment: PaymentType.CreditCard },
    { id: "2", amount: 200, status: OrderStatus.Processing, payment: PaymentType.PayPal },
    { id: "3", amount: 150, status: OrderStatus.Shipped, payment: PaymentType.BankTransfer },
    { id: "4", amount: 250, status: OrderStatus.Delivered, payment: PaymentType.CashOnDelivery },
    { id: "5", amount: 300, status: OrderStatus.Canceled, payment: PaymentType.CreditCard }
];

function updateOrderStatus(order: Order , status:OrderStatus) : void {
    order.status = status;
    console.log(`Статус заказа ${order.id} был обновлен до ${status}`);
}

function getOrdersByStatus(orders: Order[], status: OrderStatus) : Order[] {
    return orders.filter(order => order.status === status);
}
updateOrderStatus(orders[0], OrderStatus.Processing);
console.log('Заказы со статусом Processing:', getOrdersByStatus(orders, OrderStatus.Processing));
