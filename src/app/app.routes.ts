import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './core/guard/auth.guard';
import { RedirectGuard } from './core/guard/redirect.guard';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
    { path: "", canActivate: [RedirectGuard], component: HomeComponent },
    { path: "login", canActivate: [RedirectGuard], component: LoginComponent },
    {
        path: "dashboard",
        canActivate: [AuthGuard],
        component: DashboardLayoutComponent,
        children: [
            { path: "", component: DashboardComponent }
        ]
    }
];
