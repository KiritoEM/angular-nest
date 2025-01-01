import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/shared/button/button.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonComponent, MatIcon],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
