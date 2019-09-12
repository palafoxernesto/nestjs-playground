import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Product }  from './interfaces/product.interface'
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  findAll() {
    return this.productsService.findAll()
  }

  @Post()
  create(@Body() product: Product) {
    return this.productsService.create(product)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
   return this.productsService.findOne(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: Product) {
    return this.productsService.update(id, product)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id)
  }

}

