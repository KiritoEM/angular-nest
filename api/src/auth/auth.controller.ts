import { Body, Controller, Post, Res, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/libs/exception-filters/http-exception.filter';
import { CreateUserDto, LoginUserDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("auth")
@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService) { }

    @Post("signup")
    async signUp(@Body() signupDTO: CreateUserDto, @Res() res: Response): Promise<Response> {
        const user = await this.authService.createUser(signupDTO);

        const { password, ...userData } = user.data;

        return res.status(200).json({ user: userData, token: user.token });
    }

    @Post("signin")
    async signIn(@Body() loginDTO: LoginUserDto, @Res() res: Response): Promise<Response> {
        const user = await this.authService.login(loginDTO);

        const { password, ...userData } = user.data;

        return res.status(200).json({ user: userData, token: user.token });
    }
}
