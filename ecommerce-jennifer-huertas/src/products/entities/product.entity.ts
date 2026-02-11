import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Categories } from '../../categories/entities/category.entity';
import { OrderDetails } from '../../orders/entities/orderDetails.entity';

@Entity({
    name: 'PRODUCTS',
})

export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: "varchar", length: 50, nullable: false, unique: true})
    name: string

    @Column({type: "text", nullable: false})
    description: string

    @Column({type: "decimal", precision: 10, scale: 2, nullable: false})
    price: number

    @Column({type: "int", nullable: false})
    stock: number

    @Column({type: "text", default: 'No image'})
    imgUrl?: string

    @ManyToOne( () => Categories, (category) => category.products)
    @JoinColumn({name: 'category_id'})
    category?: Categories;

    @ManyToMany( () => OrderDetails, orderDetails => orderDetails.products)
    orderDetails?: OrderDetails[]
}
