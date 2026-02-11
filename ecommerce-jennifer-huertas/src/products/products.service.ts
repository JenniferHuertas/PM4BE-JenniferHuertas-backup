import { Injectable, NotFoundException } from '@nestjs/common';
import data from '../data.json';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Categories } from 'src/categories/entities/category.entity';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoriesRepository: Repository<Categories>,
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) { }

  async seeder() {
    const categories: Categories[] = await this.categoriesRepository.find();

    const newProducts: Product[] = data.map((product) => {
      const category: Categories | undefined = categories.find(
        (category) => product.category === category.name
      );

      const newProduct = new Product();
      newProduct.name = product.name;
      newProduct.description = product.description;
      newProduct.price = product.price;
      newProduct.imgUrl = product?.imgUrl;
      newProduct.stock = product.stock;
      newProduct.category = category!;

      return newProduct; 
    });
    await this.productsRepository.upsert(newProducts, ['name']); 
    return "Products Added"

  }
  

  // async create(createProductDto: CreateProductDto) {
  //   const newProduct = this.productsRepository.create(createProductDto);
  //   return await this.productsRepository.save(newProduct);
  // }

  // async findAll() {
  //   return await this.productsRepository.find();
  // }

  // async findOne(id: string) {
  //   const product = await this.productsRepository.findOneBy({ id });
  //   if (!product) throw new NotFoundException(`Producto con ID ${id} no encontrado`);
  //   return product;
  // }

  // async update(id: string, updateProductDto: UpdateProductDto) {
  //   await this.productsRepository.update(id, updateProductDto);
  //   return await this.findOne(id);
  // }

  // async remove(id: string) {
  //   const product = await this.findOne(id);
  //   return await this.productsRepository.delete(id);
  // }
}
