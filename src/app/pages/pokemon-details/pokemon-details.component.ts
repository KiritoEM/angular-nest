import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../../components/shared/cards/pokemon-card/types';
import { ActivatedRoute } from '@angular/router';
import { API_URL, POKEMON_AVALAIBLE_TYPES } from '../../helpers/constants';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  imports: [NgFor, NgStyle],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) { }

  pokemon: Pokemon | null = null;
  isLoading: boolean = true;
  id!: string;
  typeColorMap: Record<string, string> = POKEMON_AVALAIBLE_TYPES;

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get("pokemonId") as string
        console.log("id: ", this.id)
      },
      error: (err) => {
        console.error(err);
      }
    })

    this.pokemonService.getOne(parseInt(this.id)).subscribe({
      next: (data: any) => {
        console.log(data.pokemon);
        this.pokemon = data.pokemon;

        setTimeout(() => {
          this.isLoading = false;
        }, 1200)
      },

      error: (err) => {
        console.error(err);
      }
    });
  }

  formatImageName(imageURL: string | undefined) {
    return `${API_URL}/static${imageURL}`
  }

  getTypeColor(type: string) {
    return this.typeColorMap[type.toLowerCase()] || "#A8A77A";
  }
}
