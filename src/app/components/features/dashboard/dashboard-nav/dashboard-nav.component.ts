import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../shared/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-nav',
  imports: [MatIconModule, ButtonComponent],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.scss'
})
export class DashboardNavComponent {

  constructor(private router: Router) { }

  navigateToAdd() {
    this.router.navigate(["/dashboard/add-pokemon"])
  }
}
