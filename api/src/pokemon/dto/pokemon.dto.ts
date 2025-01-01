import { OmitType, PickType } from "@nestjs/mapped-types";
import { PokemonEntity } from "../entity/pokemon.entity";

export class CreatePokemonDto extends OmitType(PokemonEntity, ['id', 'createdAt', 'image_url', 'user_id']) { }