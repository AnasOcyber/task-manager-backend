import { Injectable } from '@nestjs/common';
import { SignupDto } from './dtos/signup.dto';
import { SigninDto } from './dtos/signin.dto';

@Injectable()
export class AuthService {
  signup(signupDto: SignupDto) {
    return signupDto;
  }

  signin(signinDto: SigninDto) {
    return signinDto;
  }
}
