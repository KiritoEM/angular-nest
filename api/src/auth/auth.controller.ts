import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/libs/exception-filters/http-exception.filter';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
@UseFilters(HttpExceptionFilter)
export class AuthController {

    constructor(
        private authService: AuthService) { }

    @Post("signup")
    signUp(@Body() signupDTO: CreateUserDto) {
        return this.authService.createUser(signupDTO);
    }
}
