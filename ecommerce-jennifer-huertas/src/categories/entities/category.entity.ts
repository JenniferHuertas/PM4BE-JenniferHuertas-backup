import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Products } from '../../products/entities/product.entity';

@Entity({
    name: 'CATEGORIES',
})

export class Categories {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: "varchar", length: 50, nullable: false})
    name: string

    @ManyToOne( () => Products, products => products.category)
    products: Products[]

}
