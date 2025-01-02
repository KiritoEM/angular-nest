export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    pokemons: Pokemon[];
}

export interface Pokemon {
user: any;
    id: number;
    name: string;
    description: string;
    image_url: string;
    createdAt: Date;
    abilities: Ability[];
    pokemon_types: PokemonType[];
    user_id: number;
}

export interface Ability {
    id: number;
    name: string;
    description: string;
}

export interface PokemonType {
    id: number;
    name: string;
}
