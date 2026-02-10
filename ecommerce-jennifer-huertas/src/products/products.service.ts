import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Injectable()
export class ProductsService {
   constructor(
     @InjectRepository(Product)
     private readonly productsRepository: Repository<Product>,) { }

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productsRepository.create(createProductDto);
    return await this.productsRepository.save(newProduct);
  }

async findAll() {
    return await this.productsRepository.find();
  }

async findOne(id: string) {
    const product = await this.productsRepository.findOneBy({ id });
    if (!product) throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    return product;
  }

async update(id: string, updateProductDto: UpdateProductDto) {
    await this.productsRepository.update(id, updateProductDto);
    return await this.findOne(id); 
  }

async remove(id: string) {
    const product = await this.findOne(id);
    return await this.productsRepository.delete(id);
  }
}
