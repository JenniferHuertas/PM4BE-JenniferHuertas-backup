// export class Product {
// id:number;
// name: string;
// description: string;
// price: number;
// stock: boolean;
// imgUrl: string;
// }

import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categories } from '../../categories/entities/category.entity';
import { OrderDetails } from '../../orders/entities/orderDetails.entity';

@Entity({
    name: 'PRODUCTS',
})

export class Products {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: "varchar", length: 50, nullable: false})
    name: string

    @Column({type: "text", nullable: false})
    description: string

    @Column({type: "decimal", precision: 10, scale: 2, nullable: false})
    price: number

    @Column({type: "int", nullable: false})
    stock: number

    @Column({type: "text", default: 'No image'})
    imgUrl?: string

    @OneToMany( () => Categories, category => category.products)
    @JoinColumn({name: 'category_id'})
    category: Categories[]

    @ManyToMany( () => OrderDetails, orderDetails => orderDetails.products)
    orderDetails: OrderDetails[]


    // @OneToOne( () => Credential, { cascade: true })
    // @JoinColumn()
    // credentials: Credential

    // @OneToMany( () => Appointment, appointment => appointment.user)
    // appointments: Appointment[]

    // @CreateDateColumn()
    // createdAt?: Date

    // @UpdateDateColumn()
    // updatedAt?: Date
}
