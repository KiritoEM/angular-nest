import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { MatIcon } from '@angular/material/icon';
import { PokemonCardComponent } from '../../components/shared/cards/pokemon-card/pokemon-card.component';
import { POKEMONS_MOCK } from '../../helpers/__mock__/pokemons.mock';
import { Pokemon } from '../../components/shared/cards/pokemon-card/types';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ButtonComponent, MatIcon, PokemonCardComponent, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  pokemons: Pokemon[] = POKEMONS_MOCK;

  NgOnInit(): void {
    console.log(this.pokemons);
  }
}
