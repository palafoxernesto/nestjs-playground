import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { DatabaseModule } from '../database/database.module'
import { productProviders } from './product.providers'

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [
    ProductsService, ...productProviders,
  ]
})
export class ProductsModule {}
