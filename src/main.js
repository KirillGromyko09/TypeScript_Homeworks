"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "pending";
    OrderStatus["Processing"] = "processing";
    OrderStatus["Shipped"] = "shipped";
    OrderStatus["Delivered"] = "delivered";
    OrderStatus["Canceled"] = "canceled";
})(OrderStatus || (OrderStatus = {}));
var PaymentType;
(function (PaymentType) {
    PaymentType["CreditCard"] = "creditCard";
    PaymentType["PayPal"] = "paypal";
    PaymentType["BankTransfer"] = "bankTransfer";
    PaymentType["CashOnDelivery"] = "cashOnDelivery";
})(PaymentType || (PaymentType = {}));
const orders = [
    { id: "1", amount: 100, status: OrderStatus.Pending, payment: PaymentType.CreditCard },
    { id: "2", amount: 200, status: OrderStatus.Processing, payment: PaymentType.PayPal },
    { id: "3", amount: 150, status: OrderStatus.Shipped, payment: PaymentType.BankTransfer },
    { id: "4", amount: 250, status: OrderStatus.Delivered, payment: PaymentType.CashOnDelivery },
    { id: "5", amount: 300, status: OrderStatus.Canceled, payment: PaymentType.CreditCard }
];
function updateOrderStatus(order, status) {
    order.status = status;
    console.log(`Статус заказа ${order.id} был обновлен до ${status}`);
}
function getOrdersByStatus(orders, status) {
    return orders.filter(order => order.status === status);
}
updateOrderStatus(orders[0], OrderStatus.Processing);
console.log('Заказы со статусом Processing:', getOrdersByStatus(orders, OrderStatus.Processing));
