import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { SignupDto } from 'src/auth/dtos/signup.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(signupDto: SignupDto): Promise<User | undefined> {
    const user = this.usersRepository.create(signupDto);
    return await this.usersRepository.save(user);
  }

  async findOne(email: string): Promise<User | undefined> {
    const user = await this.usersRepository.findOneBy({ email });
    if (!user) throw new BadRequestException('Invalid credentials');
    return user;
  }
}
