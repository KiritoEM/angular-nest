import { OmitType, PickType } from "@nestjs/mapped-types";
import { UserEntity } from "../entity/user.entity";

export class CreateUserDto extends OmitType(UserEntity, ['id']) { }

export class LoginUserDto extends PickType(UserEntity, ['email', 'password']) { }