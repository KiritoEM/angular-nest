import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    controllers: [PokemonController],
    imports : [PrismaModule],
    providers: [PokemonService],
    exports: [PokemonService]
})
export class PokemonModule { }
