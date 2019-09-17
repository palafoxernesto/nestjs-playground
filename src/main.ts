import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { QueryFailedFilter } from './filters/bad-query.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  const reflector = app.get(Reflector)
  app.useGlobalFilters(new QueryFailedFilter(reflector))
  await app.listen(3000)
}
bootstrap()
