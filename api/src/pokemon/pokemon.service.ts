import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/pokemon.dto';
import { Pokemon, PrismaClient } from '@prisma/client';
import path from 'path';
import { uploadFile } from 'src/helpers/file';

export const POKEMON_PATH_UPLOAD = path.join(__dirname, "../../uploads", "pokemon");

@Injectable()
export class PokemonService {

    constructor(private prisma: PrismaClient) { }

    async create(pokemonData: CreatePokemonDto, userId: number, file: any): Promise<Pokemon | null> {
        const pokemon = await this.prisma.pokemon.create({
            data: {
                name: pokemonData.name,
                description: pokemonData.description,
                user: {
                    connect: {
                        id: userId
                    }
                },
                image_url: `${POKEMON_PATH_UPLOAD}/${file.name}`,
                abilities: {
                    createMany: {
                        data: pokemonData.abilities
                    }
                },
                pokemon_types: {
                    createMany: {
                        data: pokemonData.pokemon_types
                    }
                }
            }
        })

        /*Upload file in path*/
        try {
            uploadFile(file, POKEMON_PATH_UPLOAD)
        }
        catch (err) {
            throw new ForbiddenException("Failed to upload the file", file.name);
        }

        return pokemon;
    }
}
