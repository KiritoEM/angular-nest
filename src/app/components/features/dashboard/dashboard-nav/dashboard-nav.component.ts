import { Component, Inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../shared/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { DropdownComponent } from '../../../shared/dropdown/dropdown.component';
import { TokenService } from '../../../../core/services/token.service';
import { UserService } from '../../../../core/services/user.service';
import { User } from './types';
import { NgIf } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-dashboard-nav',
  imports: [MatIconModule, ButtonComponent, RouterLink, DropdownComponent, NgIf, NgxSkeletonLoaderModule],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.scss'
})
export class DashboardNavComponent implements OnInit {
  contentLoaded: any;

  constructor(private router: Router, private tokenService: TokenService, private userService: UserService) { }
  user: User | null = null;
  isLoading: boolean = true;

  getUser() {
    const idFromPayload = this.tokenService.getId(this.tokenService.getToken() as string);

    this.userService.getUser(idFromPayload as number).subscribe({
      next: (data) => {
        console.log(data.user);
        this.user = data.user;

        setTimeout(() => {
          this.isLoading = false;
        }, 1000)
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.getUser();
  }

  navigateToAdd() {
    this.router.navigate(["/dashboard/add-pokemon"])
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate(["/"])
  }
}
