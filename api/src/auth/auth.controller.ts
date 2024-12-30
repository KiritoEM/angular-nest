import { Controller, Post, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/libs/exception-filters/http-exception.filter';

@Controller('auth')
@UseFilters(HttpExceptionFilter)
export class AuthController {
    @Post("signup")
    signUp() {
        
    }
}
