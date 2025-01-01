import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { TokenService } from "../services/token.service";

@Injectable({
    providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
    constructor(private tokenService: TokenService, private router: Router) { }

    canActivate(): boolean {
        const token = this.tokenService.getToken();

        if (token && this.tokenService.isTokenValid(token)) {
            this.router.navigate(['/dashboard']);
            return false;
        }

        return true;
    }
}