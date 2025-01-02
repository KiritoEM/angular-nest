import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../../shared/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { DropdownComponent } from '../../../shared/dropdown/dropdown.component';
import { TokenService } from '../../../../core/services/token.service';
import { UserService } from '../../../../core/services/user.service';
import { User } from './types';
import { NgIf } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-dashboard-nav',
  imports: [MatIconModule, ButtonComponent, RouterLink, DropdownComponent, NgIf, NgxSkeletonLoaderModule],
  templateUrl: './dashboard-nav.component.html',
  styleUrl: './dashboard-nav.component.scss'
})
export class DashboardNavComponent implements OnInit {
  contentLoaded: any;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private userService: UserService,
    private searchService: SearchService
  ) { }
  user: User | null = null;
  isLoading: boolean = true;

  // @Output() value = new EventEmitter<string>();

  onInputChange(event: Event) {
    const inputValue = (event?.target as HTMLInputElement).value;
    this.searchService.setSearch(inputValue);
  }

  getUser() {
    const idFromPayload = this.tokenService.getId(this.tokenService.getToken() as string);

    this.userService.getUser(idFromPayload as number).subscribe({
      next: (data) => {
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
