import { Categories } from '../../categories/entities/category.entity';
import { OrderDetails } from '../../orders/entities/orderDetails.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl?: string;
    category?: Categories;
    orderDetails?: OrderDetails[];
}
