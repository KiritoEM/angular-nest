import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl, IsDate, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class Ability {
    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly description: string;
}

class PokemonType {
    @ApiProperty()
    @IsNumber()
    readonly id: number;

    @ApiProperty()
    @IsString()
    readonly name: string;
}

export class PokemonEntity {
    @ApiProperty()
    @IsNumber()
    readonly id: number;

    @ApiProperty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsString()
    readonly description: string;

    @ApiProperty()
    @IsUrl()
    readonly image_url: string;

    @ApiProperty()
    @IsDate()
    @Type(() => Date)
    readonly createdAt: Date;

    @ApiProperty({ type: [Ability] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Ability)
    readonly abilities: Ability[];

    @ApiProperty({ type: [PokemonType] })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => PokemonType)
    readonly pokemon_types: PokemonType[];

    @ApiProperty()
    @IsNumber()
    readonly user_id: number;
}
