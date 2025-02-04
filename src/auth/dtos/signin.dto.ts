import { OmitType } from '@nestjs/mapped-types';
import { SignupDto } from './signup.dto';

export class SigninDto extends OmitType(SignupDto, ['firstName'] as const) {}
