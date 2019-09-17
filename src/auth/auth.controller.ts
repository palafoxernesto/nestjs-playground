import { Controller, Post, Request, Body, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthGuard } from '@nestjs/passport'
import { CreateUserDto } from '../users/dtos/user.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const { email, password, username } = createUserDto
    return this.authService.SignUp({ email, username, password })
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.Login(req.email, req.password)
  }
}
