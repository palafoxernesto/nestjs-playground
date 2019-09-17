import { createConnection } from 'typeorm'
import { join } from 'path'

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'adminPassword',
        database: 'my_ecommerce',
        logging: true,
        entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
        synchronize: true
      })
  }
]
