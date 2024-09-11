import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsString()
  @MinLength(3)
  readonly firstName: string;

  @IsEmail()
  readonly email: string;

  @IsString() // FIXME: replace this with @IsStrongPassword() decorator
  readonly password: string;
}
