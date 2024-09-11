import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { SigninDto } from './dtos/signin.dto';
import { SignupDto } from './dtos/signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(signupDto: SignupDto): Promise<User> {
    const generatedSalt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(signupDto.password, generatedSalt);

    return await this.usersService.create({
      ...signupDto,
      password: hashedPassword,
    });
  }

  async login({
    email,
    password,
  }: SigninDto): Promise<{ access_token: string } | undefined> {
    const user = await this.usersService.findOne(email);

    if (user) {
      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) throw new BadRequestException('Invalid credentials');

      const payload = {
        sub: user.id,
        email: user.email,
      };

      return { access_token: await this.jwtService.signAsync(payload) };
    }
  }
}
