import { Injectable } from '@nestjs/common';
import * as data  from '../data.json';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './entities/category.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Categories) 
  private readonly categoriesRepository: Repository<Categories>,
) {}

  async seeder() {
    const categoryNames: Set<string> = new Set(data.map((product) => product.category));
    const categoriesArray = Array.from(categoryNames);
    const categories = categoriesArray.map((string) => ({
      name: string,
    }));
    await this.categoriesRepository.upsert(categories, ['name']);
    return 'This action adds a new category';
  }

  // findAll() {
  //   return `This action returns all categories`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} category`;
  // }

  // update(id: number, updateCategoryDto: UpdateCategoryDto) {
  //   return `This action updates a #${id} category`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} category`;
  // }
}
