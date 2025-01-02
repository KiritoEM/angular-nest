import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Ability, Pokemon, PokemonType } from "./types";
import { POKEMON_AVALAIBLE_TYPES } from '../../../../helpers/constants';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-pokemon-card',
  imports: [NgFor, NgIf, NgStyle, NgxSkeletonLoaderModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent implements OnInit {
  @Input({ required: true }) name: string = "";
  @Input({ required: true }) description: string = "";
  @Input({ required: true }) image_url: string = "";
  @Input({ required: true }) createdAt!: Date;
  @Input({ required: true }) abilities: Ability[] = [];
  @Input({ required: true }) pokemon_types: PokemonType[] = [];

  @Input({ required: true }) isLoading!: boolean;

  ngOnInit(): void {
  }

  typeColorMap: Record<string, string> = POKEMON_AVALAIBLE_TYPES;

  getTypeColor(type: string) {
    return this.typeColorMap[type.toLowerCase()] || "#A8A77A";
  }
}
