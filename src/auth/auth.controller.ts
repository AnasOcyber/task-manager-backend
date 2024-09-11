import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { SigninDto } from './dtos/signin.dto';
import { SignupDto } from './dtos/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() signUpDto: SignupDto): Promise<User> {
    return this.authService.register(signUpDto);
  }

  @Post('login')
  signin(
    @Body() signinDto: SigninDto,
  ): Promise<
    { access_token: string; userId: number; username: string } | undefined
  > {
    return this.authService.login(signinDto);
  }
}
