import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Orders } from '../../orders/entities/order.entity';

@Entity({
    name: 'USERS',
})

export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: "varchar", length: 50, nullable: false, unique: true})
    email: string

    @Column({type: "varchar", length: 50, nullable: false})
    name: string

    @Column({type: "varchar", length: 20, nullable: false})
    password: string

    @Column({type: "text"})
    address: string

    @Column({type: "bigint"})
    phone: number

    @Column({type: "varchar", length: 50})
    country: string

    @Column({type: "varchar", length: 50})
    city: string

    @OneToMany(() => Orders, order => order.user)
    order?: Orders[]

}
