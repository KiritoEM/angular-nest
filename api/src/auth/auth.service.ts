import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService) { }
    async createUser(userData: CreateUserDto) {
        if (this.usersService.findOne(userData.email)) {
            throw new ForbiddenException("User already exists");
        }

        const user = await this.usersService.create(
            {
                ...userData,
                password: await bcrypt.hash(userData.password, 10)
            }
        );

        if (!user) {
            throw new NotFoundException('User not created');
        }

        return { data: user, token: await this.jwtService.signAsync({ id: user.id }) };
    }
}
