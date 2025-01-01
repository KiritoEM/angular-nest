import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-dashboard-nav',
  imports: [MatIconModule, ButtonComponent],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.scss'
})
export class DashboardNavComponent {

}
