import { Connection } from 'typeorm'
import { Product } from './products.entity'
import { productRepositoryToken } from './product.constants'

export const productProviders = [
  {
    provide: productRepositoryToken,
    useFactory: (connection: Connection) => connection.getRepository(Product),
    inject: ['DATABASE_CONNECTION']
  }
]
