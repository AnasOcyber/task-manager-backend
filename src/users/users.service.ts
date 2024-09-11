import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDto } from 'src/auth/dtos/signup.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(signupDto: SignupDto): Promise<User | undefined> {
    const existingUser = await this.usersRepository.findOneBy({
      email: signupDto.email,
    });
    if (existingUser) throw new BadRequestException('User already exists');

    const user = this.usersRepository.create(signupDto);
    return await this.usersRepository.save(user);
  }

  async findOne(email: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) throw new BadRequestException('Invalid credentials');
    return user;
  }
}
