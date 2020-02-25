import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  async create(@Body() product: any) {
    return this.productService.createProduct(product);
  }

  @Get()
  async list() {
    return this.productService.list();
  }

  @Get('/count')
  async count() {
    return this.productService.count();
  }
}
