import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from './interfaces/users.interface'

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly userRepository: Repository<User>
  ) {}

  async findOne(email: string): Promise<User> {
    return await this.userRepository.findOne({ email })
  }

  async create(user: User) {
    return await this.userRepository.save(user)
  }
}
