import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardNavComponent } from '../../components/features/dashboard/dashboard-nav/dashboard-nav.component';

@Component({
  selector: 'app-dashboard-layout',
  imports: [RouterOutlet, DashboardNavComponent],
  templateUrl: './dashboard-layout.component.html',
})
export class DashboardLayoutComponent {

}
