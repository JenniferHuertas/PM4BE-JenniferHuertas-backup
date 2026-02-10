import { Orders } from '../../orders/entities/order.entity';
export declare class User {
    id: string;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    order?: Orders[];
}
