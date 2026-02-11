import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Categories } from 'src/categories/entities/category.entity';
export declare class ProductsService {
    private readonly categoriesRepository;
    private readonly productsRepository;
    constructor(categoriesRepository: Repository<Categories>, productsRepository: Repository<Product>);
    seeder(): Promise<string>;
}
