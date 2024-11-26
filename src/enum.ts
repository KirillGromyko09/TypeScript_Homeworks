export enum OrderStatus {
    Pending = 'pending',
    Processing = 'processing',
    Shipped = 'shipped',
    Delivered = 'delivered',
    Canceled = 'canceled',
}

export enum PaymentType {
    CreditCard = 'creditCard',
    PayPal = 'paypal',
    BankTransfer = 'bankTransfer',
    CashOnDelivery = 'cashOnDelivery',
}
