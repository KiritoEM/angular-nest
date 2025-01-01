import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Ability, Pokemon, PokemonType } from "./types";

@Component({
  selector: 'app-pokemon-card',
  imports: [NgFor, NgIf],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() image_url: string = "";
  @Input() createdAt!: Date;
  @Input() abilities: Ability[] = [];
  @Input() pokemon_types: PokemonType[] = [];
isLast: any;
}
