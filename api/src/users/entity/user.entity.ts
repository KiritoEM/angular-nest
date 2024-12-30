import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { MinLength } from "class-validator";
import { IsEmail } from "class-validator";
import { IsNotEmpty, IsString } from "class-validator";

export class UserEntity {
    @ApiProperty()
    @IsNotEmpty() @IsNumber() readonly id: number;

    @ApiProperty()
    @IsNotEmpty() @IsEmail() readonly email: string;

    @ApiProperty()
    @IsNotEmpty() @IsString() readonly username: string;

    @ApiProperty()
    @IsNotEmpty() @IsString() @MinLength(8) readonly password: string;
}