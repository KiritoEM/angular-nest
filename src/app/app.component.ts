import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'pokemon-app';
}
