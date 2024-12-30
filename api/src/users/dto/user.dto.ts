import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsEmail } from "class-validator";
import { IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "../entity/user.entity";

export class CreateUserDto extends OmitType(UserEntity, ['id']) { }