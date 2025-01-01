import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/pokemon.dto';
import * as path from 'path';
import { uploadFile } from 'src/helpers/file';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pokemon } from '@prisma/client';

export const POKEMON_PATH_UPLOAD = path.join(__dirname, "../../uploads", "pokemon");
const ABSOLUTE_PATH_UPLOAD = "/pokemon";

@Injectable()
export class PokemonService {

    constructor(private prisma: PrismaService) { }

    async create(pokemonData: CreatePokemonDto, userId: number, file: any): Promise<Pokemon | null> {
        const abilities = JSON.parse(pokemonData.abilities);
        const pokemonTypes = JSON.parse(pokemonData.pokemon_types);

        const pokemon = await this.prisma.pokemon.create({
            data: {
                name: pokemonData.name,
                description: pokemonData.description,
                user: {
                    connect: {
                        id: userId
                    }
                },
                image_url: `${ABSOLUTE_PATH_UPLOAD}/${file.name}`,
                abilities: {
                    create: abilities.map((ability: any) => ({
                        ability: {
                            connectOrCreate: {
                                where: { name: ability.name },
                                create: {
                                    name: ability.name,
                                    description: ability.description,
                                },
                            },
                        },
                    })),
                },
                pokemon_types: {
                    create: pokemonTypes.map((pokemonType: any) => ({
                        pokemon_type: {
                            connectOrCreate: {
                                where: { name: pokemonType.name },
                                create: {
                                    name: pokemonType.name,
                                },
                            },
                        },
                    })),
                },
            }
        })

        /*
        Upload file in path
        */
        try {
            uploadFile(file, POKEMON_PATH_UPLOAD)
        }
        catch (err) {
            throw new ForbiddenException("Failed to upload the file", file.name);
        }

        return pokemon;
    }

    async getAll(): Promise<Pokemon[] | []> {
        return await this.prisma.pokemon.findMany({
            include: {
                abilities: {
                    select: {
                        ability: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                            },
                        },
                    },
                },
                pokemon_types: {
                    select: {
                        pokemon_type: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        }).then((pokemons) => {
            return pokemons.map((pokemon) => ({
                ...pokemon,
                abilities: pokemon.abilities.map((a) => a.ability),
                pokemon_types: pokemon.pokemon_types.map((t) => t.pokemon_type)
            }))
        });
    }
}
