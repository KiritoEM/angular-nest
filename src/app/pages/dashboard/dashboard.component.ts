import { Component, Inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { MatIcon } from '@angular/material/icon';
import { PokemonCardComponent } from '../../components/shared/cards/pokemon-card/pokemon-card.component';
import { CommonModule, NgFor } from '@angular/common';
import { DashboardService } from './dashboard.service';
import { Pokemon } from '../../components/shared/cards/pokemon-card/types';
import { API_URL } from '../../helpers/constants';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ButtonComponent, MatIcon, PokemonCardComponent, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  pokemons: Pokemon[] = [];
  isLoading: boolean = true;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getAllPokemon().subscribe({
      next: (data: any) => {
        console.log(data.allPokemons);
        this.pokemons = data.allPokemons;

        setTimeout(() => {
          this.isLoading = false;
        }, 1200)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  formatImageName(imageURL: string) {
    return `${API_URL}/static${imageURL}`
  }
}
