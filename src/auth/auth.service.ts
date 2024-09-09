import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SigninDto } from './dtos/signin.dto';
import { SignupDto } from './dtos/signup.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async signup(signupDto: SignupDto): Promise<User> {
    const user = this.usersRepository.create(signupDto);
    return await this.usersRepository.save(user);
  }

  async signin(signinDto: SigninDto): Promise<User> {
    const user = await this.usersRepository.findOneBy({
      email: signinDto.email,
    });

    if (!user) throw new BadRequestException('Invalid credentials');
    if (signinDto.password !== user.password)
      throw new BadRequestException('Invalid credentials');

    return user;
  }
}
