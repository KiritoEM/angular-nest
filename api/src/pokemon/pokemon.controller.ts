import { Body, Controller, Get, Inject, Post, Req, Res, UseGuards } from '@nestjs/common';
import { CreatePokemonDto } from './dto/pokemon.dto';
import { Response } from 'express';
import { PokemonService } from './pokemon.service';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('pokemon')
@UseGuards(AuthGuard)
export class PokemonController {
    constructor(private pokemonService: PokemonService) { }

    @Post('create')
    async addNewPokemon(@Body() pokemonDto: CreatePokemonDto, @Req() req: Request, @Res() res: Response): Promise<Response> {
        if (!(req as any).files) {
            return res.status(404).json("No image uploaded !!!");
        }

        const pokemon = await this.pokemonService.create(pokemonDto, parseInt(req["user"].id), (req as any).files.pokemon);

        return res.status(201).json({ message: "Pokemon added successfully !!!", pokemon });
    }

    @Get('getAll')
    async getAllPokemon(@Res() res: Response) {
        const allPokemons = await this.pokemonService.getAll();

        return res.status(201).json({ message: "All Pokemons fetched successfully !!!", allPokemons });
    }
}
