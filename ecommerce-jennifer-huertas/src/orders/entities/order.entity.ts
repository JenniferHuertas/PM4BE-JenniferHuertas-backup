import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { OrderDetails } from './orderDetails.entity';
import { User } from '../../users/entities/user.entity';


@Entity({
    name: 'ORDERS',
})

export class Orders {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    date: Date

    @OneToOne(() => OrderDetails, orderDetails => orderDetails.order)
    @JoinColumn({ name: 'order_detail_id' })
    orderDetails: OrderDetails;

    @ManyToOne(() => User, user => user.order)
    @JoinColumn({ name: 'user_id' })
    user: User;



}
