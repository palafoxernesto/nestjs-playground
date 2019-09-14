import { Injectable, Inject } from '@nestjs/common'
import { User } from './users.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    ) {}

  async findOne(email: string): Promise<any> {
    return await this.userRepository.findOne({ email })
  }

  async create({password, email, salt, name}): Promise<User> {
    return await this.userRepository.save({email, password, salt, name})
  }
}
