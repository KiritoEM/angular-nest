import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService, private jwtService: JwtService) { }
    async createUser(userData: CreateUserDto) {
        const user = await this.usersService.create(userData);

        if (!user) {
            throw new NotFoundException('User not created');
        }

        return { data: user, token: this.jwtService.signAsync({ id: user.id }) };
    }
}
