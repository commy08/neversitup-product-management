import { Inject, Injectable } from '@nestjs/common';

import { PRODUCT_REPOSITORY } from '../../core/constants';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async findById(id): Promise<Product> {
    return this.productRepository.findByPk(id);
  }
}
