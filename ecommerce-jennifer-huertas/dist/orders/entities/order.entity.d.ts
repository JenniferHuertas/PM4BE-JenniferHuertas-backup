import { OrderDetails } from './orderDetails.entity';
import { User } from '../../users/entities/user.entity';
export declare class Orders {
    id: string;
    date: Date;
    orderDetails: OrderDetails;
    user: User;
}
