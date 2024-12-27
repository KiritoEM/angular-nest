import { Component } from '@angular/core';
import { PokemonCardComponent } from './pages/pokemon-card/pokemon-card.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemon-app';
}
