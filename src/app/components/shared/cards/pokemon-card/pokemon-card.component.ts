import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Ability, Pokemon, PokemonType } from "./types";
import { POKEMON_AVALAIBLE_TYPES } from '../../../../helpers/constants';

@Component({
  selector: 'app-pokemon-card',
  imports: [NgFor, NgIf, NgStyle],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent implements OnInit {
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() image_url: string = "";
  @Input() createdAt!: Date;
  @Input() abilities: Ability[] = [];
  @Input() pokemon_types: PokemonType[] = [];

  ngOnInit(): void {
    console.log(this.abilities)
  }

  typeColorMap: Record<string, string> = POKEMON_AVALAIBLE_TYPES;

  getTypeColor(type: string) {
    return this.typeColorMap[type.toLowerCase()] || "#A8A77A";
  }
}
