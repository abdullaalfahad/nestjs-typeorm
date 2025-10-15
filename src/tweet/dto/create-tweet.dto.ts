import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  imageUrl?: string;

  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsInt({ each: true })
  @IsOptional()
  @IsArray()
  hashtags?: number[];
}
