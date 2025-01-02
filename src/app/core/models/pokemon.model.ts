export interface PokemonModel {
    id: number,
    name: string,
    description: string,
    image_url: string,
    createdAt: Date,
    abilities: Ability[],
    pokemon_types: PokemonType[],
    user_id: number
}

interface Ability {
    id: number,
    name: string,
    description: string
}

interface PokemonType {
    id: number,
    name: string
}

export interface AddPokemonDTO {
    name: string;
    description: string;
    ability1: string;
    descriptionAbility1: string;
    ability2: string;
    descriptionAbility2: string;
    ability3: string;
    descriptionAbility3: string;
    types: string[];
}
