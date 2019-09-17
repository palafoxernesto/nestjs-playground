import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm'
import { User } from './interfaces/users.interface'

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly userRepository: Repository<User>) {}

  async findOne(email: string): Promise<User> {
    try {
      return await this.userRepository.findOne({email});
    } catch (err) {
      return err;
    }
  }

  async create(user: User) {
    try {
      return await this.userRepository.save(user);
    } catch (err) {
      return err;
    }
  }
}
