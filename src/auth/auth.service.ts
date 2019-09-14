import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import * as argon2 from 'argon2'
import { randomBytes } from 'crypto'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
    ) {}

  async SignUp(email, password, name): Promise<any> {
    const salt = randomBytes(32)
    const passwordHashed = await argon2.hash(password, { salt })

    const userRecord = await this.usersService.create({
      password: passwordHashed,
      email,
      salt: salt.toString('hex'),
      name
    })

    return {
      user: {
        email: userRecord.email,
        name: userRecord.name,
      }
    }
  }
  async Login(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email)
    if (!user) {
      throw new Error('User not found')
    } else {
      const correctPassword = await argon2.verify(user.password, password)
      if (!correctPassword) {
        throw new Error('Incorrect password')
      }
      return {
      user: {
        email: user.email,
        name: user.name
      },
      token: this.jwtService.sign({username: user.email, sub: user.id})
    }
  }
}

  async oldLogin(user: any) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token:  this.jwtService.sign(payload)
    }
  }
}
