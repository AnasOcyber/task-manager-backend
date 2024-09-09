import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dtos/signup.dto';
import { SigninDto } from './dtos/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject() private authService: AuthService) {}
  @Post('signup')
  signup(@Body() signUpDto: SignupDto) {
    return this.authService.signup(signUpDto);
  }

  @Get('signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }
}
