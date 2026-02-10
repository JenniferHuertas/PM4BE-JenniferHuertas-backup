import { Column, Entity, ManyToMany, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Product } from '../../products/entities/product.entity';
import { Orders } from './order.entity';

@Entity({
    name: 'ORDERDETAILS',
})

export class OrderDetails {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: "decimal", precision: 10, scale: 2, nullable: false })
    price: number

    @ManyToMany(() => Product)
    @JoinTable({ name: 'ORDER_DETAILS_PRODUCTS' })
    products: Product[]

    @OneToOne( () => Orders, order => order.orderDetails)
    order: Orders;

}