import { Product } from '../../products/entities/product.entity';
import { Orders } from './order.entity';
export declare class OrderDetails {
    id: string;
    price: number;
    products: Product[];
    order: Orders;
}
