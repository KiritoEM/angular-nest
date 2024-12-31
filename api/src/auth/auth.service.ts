import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from 'src/users/dto/user.dto';
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

    async login(userData: LoginUserDto) {
        const user = await this.usersService.findOne(userData.email);

        if (!user) {
            throw new NotFoundException("User not found !!!")
        }

        const isValidPassword = await bcrypt.compare(userData.password, user.password);
        if (!isValidPassword) {
            throw new ForbiddenException("Invalid password !!!");
        }

        return { data: user, token: await this.jwtService.signAsync({ id: user.id }) };
    }
}
