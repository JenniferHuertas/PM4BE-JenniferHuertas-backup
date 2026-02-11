import { Injectable } from '@nestjs/common';
import data from '../data.json';
import { InjectRepository } from '@nestjs/typeorm';
import { Categories } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoriesRepository: Repository<Categories>,

  ) {}

  async seeder() {
    const categoryNames = new Set(data.map((product) => product.category));
    const categoriesArray = Array.from(categoryNames);
    const categories = categoriesArray.map((nameProduct) => ({
      name: nameProduct,
    }));

    await this.categoriesRepository.upsert(categories, ['name']);

    return 'Categories added';
  }
}


// @Injectable()
// export class CategoriesService {
//   constructor(
//     @InjectRepository(Categories) 
//   private readonly categoriesRepository: Repository<Categories>,
// ) {}

//   async seeder() {
//     const categoryNames = new 
    
    
//     Set(
//       data.map((product) => product.category),
//     );

//     const categoriesArray = Array.from(categoryNames);

//     const categories = categoriesArray.map((string) => ({
//       name: string,
//     }));

//     await this.categoriesRepository.upsert(categories, ['name']);

//     return 'Categories added';
//   }
// }
