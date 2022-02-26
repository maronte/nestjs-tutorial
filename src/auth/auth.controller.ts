import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  async singin() {
    return this.authService.signin();
  }

  @Post('/signup')
  async singup() {
    return this.authService.signup();
  }
}
