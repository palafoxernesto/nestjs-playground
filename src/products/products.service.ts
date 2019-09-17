import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Product } from './interfaces/product.interface'
import { productRepositoryToken } from './product.constants'

@Injectable()
export class ProductsService {
  constructor(
    @Inject(productRepositoryToken)
    private readonly productRepository: Repository<Product>
  ) {}

  async create(product: Product) {
    return await this.productRepository.save(product)
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find()
  }

  async findOne(id: string): Promise<Product> {
    return await this.productRepository.findOne(id)
  }

  async update(id: string, product: Product): Promise<Product> {
    const productToUpdate = await this.productRepository.findOne(id)
    return await this.productRepository.save({ ...productToUpdate, ...product })
  }

  async remove(id: string) {
    return await this.productRepository.delete(id)
  }
}
