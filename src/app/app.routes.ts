import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './core/guard/auth.guard';
import { RedirectGuard } from './core/guard/redirect.guard';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AddPokemonComponent } from './pages/add-pokemon/add-pokemon.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PokemonDetailsComponent } from './pages/pokemon-details/pokemon-details.component';

export const routes: Routes = [
    { path: "", canActivate: [RedirectGuard], component: LoginComponent },
    { path: "signup", canActivate: [RedirectGuard], component: SignupComponent },
    {
        path: "dashboard",
        canActivate: [AuthGuard],
        component: DashboardLayoutComponent,
        children: [
            { path: "", component: DashboardComponent },
            { path: "add-pokemon", component: AddPokemonComponent },
            { path: "pokemon/:pokemonId", component: PokemonDetailsComponent },
        ]
    },
    { path: "**", component: NotFoundComponent }
];
