import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty() @IsEmail() readonly email: string;

    @ApiProperty()
    @IsNotEmpty() @IsString() readonly username: string;

    @ApiProperty()
    @IsNotEmpty() @IsString() readonly password: string;
}