import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { IsJSON } from "class-validator";

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

    @ApiProperty()
    @IsString()
    @IsJSON()
    readonly abilities: string;

    @ApiProperty()
    @IsString()
    @IsJSON()
    readonly pokemon_types: string;

    @ApiProperty()
    @IsNumber()
    readonly user_id: number;
}
