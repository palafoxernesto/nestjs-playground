import { Test, TestingModule } from '@nestjs/testing'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { Product as ProductEntity } from './products.entity'
describe('Products Controller', () => {
  let productsController: ProductsController
  let productsService: ProductsService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService]
    }).compile()

    productsService = module.get<ProductsService>(ProductsService)
    productsController = module.get<ProductsController>(ProductsController)
  })

  describe('findAll', () => {
    it('it should return an array of products', async () => {
      const result: ProductEntity[] = []
      jest.spyOn(productsService, 'findAll').mockImplementation(() => Promise.resolve(result))

      expect(await productsController.findAll()).toBe(result)
    })
  })
})
