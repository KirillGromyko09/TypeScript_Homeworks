import {OrderStatus , PaymentType} from "./enum.ts";

export interface Order {
    id: string;
    amount: number;
    status: OrderStatus;
    payment: PaymentType;
}
