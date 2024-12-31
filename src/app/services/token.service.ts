import { Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { TOKEN_KEY } from "../helpers/constants";

@Injectable({ providedIn: 'root' })
export class TokenService {

    constructor(private cookieService: CookieService) { }

    getToken(): string | null {
        return this.cookieService.get(TOKEN_KEY) || null;
    }

    setToken(token: string): void {
        this.cookieService.set(TOKEN_KEY, token);
    }

    removeToken(): void {
        this.cookieService.delete(TOKEN_KEY, '/');
    }
}