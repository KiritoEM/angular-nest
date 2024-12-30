import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { JWT_EXPIRES_IN } from 'src/helpers/constants';

@Module({
  imports: [UsersService,
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: JWT_EXPIRES_IN }
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
