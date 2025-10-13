import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString({ message: 'First name must be a string' })
  @IsOptional({ message: 'First name is optional' })
  firstName?: string;

  @IsString({ message: 'Last name must be a string' })
  @IsOptional({ message: 'Last name is optional' })
  lastName?: string;

  @IsString({ message: 'Gender must be a string' })
  @IsOptional({ message: 'Gender is optional' })
  gender?: string;

  @IsDate({ message: 'Date of birth must be a date' })
  @IsOptional()
  dateOfBirth?: Date;

  @IsString({ message: 'Bio must be a string' })
  @IsOptional({ message: 'Bio is optional' })
  bio?: string;

  @IsString({ message: 'Avatar URL must be a string' })
  @IsOptional({ message: 'Avatar URL is optional' })
  avatarUrl?: string;
}
