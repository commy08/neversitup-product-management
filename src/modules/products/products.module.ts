import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { productsProviders } from './products.provider';

@Module({
  controllers: [ProductsController],
  providers: [...productsProviders, ProductsService],
})
export class ProductsModule {}
