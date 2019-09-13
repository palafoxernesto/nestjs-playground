import { Injectable } from '@nestjs/common';
import { tsConstructorType } from '@babel/types';

export type User = any

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme'
      },

      {
        userId: 2,
        username: 'peter',
        password: 'secret'
      },
      {
        userId: 3,
        username: 'cass',
        password: 'guess'
      },
    ]
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username)
  }
}