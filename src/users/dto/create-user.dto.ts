import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

export class CreateUserDto {
  @IsString({ message: 'Username must be a string' })
  @IsNotEmpty({ message: 'Username is required' })
  @MaxLength(24, { message: 'Username must be at most 24 characters' })
  username: string;

  @IsEmail({}, { message: 'Email must be a valid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsOptional()
  profile?: CreateProfileDto | null | undefined;
}
