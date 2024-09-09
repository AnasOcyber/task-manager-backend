import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { SigninDto } from './dtos/signin.dto';
import { SignupDto } from './dtos/signup.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async register(signupDto: SignupDto): Promise<User> {
    const generatedSalt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(signupDto.password, generatedSalt);

    const user = this.usersRepository.create({
      ...signupDto,
      password: hashedPassword,
    });

    return await this.usersRepository.save(user);
  }

  async login(signinDto: SigninDto): Promise<User> {
    const user = await this.usersRepository.findOneBy({
      email: signinDto.email,
    });
    if (!user) throw new BadRequestException('Invalid credentials');

    const isValid = await bcrypt.compare(signinDto.password, user.password);
    if (!isValid) throw new BadRequestException('Invalid credentials');

    return user;
  }
}
