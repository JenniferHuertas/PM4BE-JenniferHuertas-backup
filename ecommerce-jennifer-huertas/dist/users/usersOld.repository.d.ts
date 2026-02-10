import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersRepository {
    users: User[];
    findAll(): User[];
    findOne(id: number): User | undefined;
    save(user: CreateUserDto): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    };
    update(id: number, data: UpdateUserDto): User | "user not found";
    delete(id: number): User[];
}
