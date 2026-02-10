import { Product } from "./entities/product.entity";
export declare class ProductsRepository {
    products: Product[];
    findAll(): Product[];
}
