import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from "@nestjs/jwt";
import { JWT_EXPIRES_IN } from './helpers/constants';
import { PokemonService } from './pokemon/pokemon.service';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [PrismaModule, JwtModule.register({
    global: true,
    secret: process.env.SECRET_KEY,
    signOptions: { expiresIn: JWT_EXPIRES_IN }
  }),
    AuthModule,
    UsersModule,
    PokemonModule
  ],
  controllers: [AppController],
  providers: [AppService, PokemonService],
})
export class AppModule { }
