import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  imports: [NgFor],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {

}
