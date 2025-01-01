import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { MatIcon } from '@angular/material/icon';
import { PokemonCardComponent } from '../../components/shared/cards/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonComponent, MatIcon, PokemonCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
