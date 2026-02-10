import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './usersOld.repository';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    create(createUserDto: CreateUserDto): {
        id: number;
        email: string;
        name: string;
        password: string;
        address: string;
        phone: string;
        country: string;
        city: string;
    };
    findAll(page: number, limit: number): import("./entities/user.entity").User[];
    findOne(id: number): import("./entities/user.entity").User | undefined;
    update(id: number, updateUserDto: UpdateUserDto): import("./entities/user.entity").User | "user not found";
    remove(id: number): import("./entities/user.entity").User[];
}
