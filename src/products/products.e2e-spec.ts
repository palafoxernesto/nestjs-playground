import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { ProductsModule } from './products.module'
import { ProductsService } from './products.service'
import { INestApplication } from '@nestjs/common'

describe('Products', () => {
  let app: INestApplication
  const productsService = { findAll: () => ['test'] }

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ProductsModule]
    })
      .overrideProvider(ProductsService)
      .useValue(productsService)
      .compile()

    app = module.createNestApplication()
    await app.init()
  })

  it('/GET products', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect(productsService.findAll())
  })

  afterAll(async () => {
    await app, close()
  })
})
