import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  async getProducts() {
    const products = await this.productService.findAll();

    return products;
  }

  @Get(':id')
  async getProductByID(@Param('id') id: number) {
    const product = await this.productService.findById(id);

    if (!product) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Product not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return product;
  }
}
