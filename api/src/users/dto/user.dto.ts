import { OmitType } from "@nestjs/mapped-types";
import { UserEntity } from "../entity/user.entity";

export class CreateUserDto extends OmitType(UserEntity, ['id']) { }