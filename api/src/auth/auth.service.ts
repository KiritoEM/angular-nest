import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/user.dto';

@Injectable()
export class AuthService {
    createUser(userData: CreateUserDto) {
        
    }
}
