import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString({ message: "First name must be a string" })
    @IsNotEmpty({ message: "First name is required" })
    firstName: string;

    @IsString({ message: "Last name must be a string" })
    @IsNotEmpty({ message: "Last name is required" })
    lastName: string;

    @IsEmail({}, { message: "Email must be a valid email" })
    @IsNotEmpty({ message: "Email is required" })
    email: string;

    @IsString({ message: "Gender must be a string" })
    @IsOptional({ message: "Gender is optional" })
    gender?: string;

    @IsString({ message: "Password must be a string" })
    @IsNotEmpty({ message: "Password is required" })
    password: string;
}
