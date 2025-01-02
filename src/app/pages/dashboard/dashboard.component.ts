import { Component, Inject, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { MatIcon } from '@angular/material/icon';
import { PokemonCardComponent } from '../../components/shared/cards/pokemon-card/pokemon-card.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { DashboardService } from './dashboard.service';
import { Pokemon } from '../../components/shared/cards/pokemon-card/types';
import { API_URL } from '../../helpers/constants';
import { SearchService } from '../../core/services/search.service';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ButtonComponent, MatIcon, PokemonCardComponent, NgFor, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  pokemons: Pokemon[] = [];
  isLoading: boolean = true;
  filteredPokemons: Pokemon[] = [];
  isSearch: boolean = false;
  isSearchEmpty: boolean = false;
  searchValue: string = "";
  isEmpty: boolean = false;

  constructor(private dashboardService: DashboardService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.dashboardService.getAllPokemon().subscribe({
      next: (data: any) => {
        this.pokemons = data.allPokemons;
        this.filteredPokemons = [...this.pokemons];

        this.isEmpty = this.filteredPokemons.length === 0;

        setTimeout(() => {
          this.isLoading = false;
        }, 1200)
      },
      error: (err) => {
        console.error(err);
      }
    });

    this.searchService.search$.subscribe((value) => {
      if (value.length > 0) {
        this.isSearch = true;
        this.searchValue = value;
      };

      this.filteredPokemons = this.pokemons.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()));

      this.isSearchEmpty = this.filteredPokemons.length === 0;
    })
  }

  formatImageName(imageURL: string) {
    return `${API_URL}/static${imageURL}`
  }
}
