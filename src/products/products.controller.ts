import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductDto }  from './interfaces/product.dto'

@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return 'Should get all products'
  }

  @Post()
  create(@Body() productDto: ProductDto) {
    return productDto
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This is the product with id: ${id}`
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `Product id ${id} was updated`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Product id ${id} was deleted`
  }

}

