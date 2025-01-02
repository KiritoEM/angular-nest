import { Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { TOKEN_KEY } from "../../helpers/constants";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface UserJWTPayload extends JwtPayload {
    id: number;
}

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

    isTokenValid(token: string) {
        const decoded = jwtDecode<JwtPayload>(token);
        const now = Math.floor(Date.now() / 1000);

        return decoded.exp ? decoded.exp > now : false;
    }

    getId(token: string) {
        const decoded = jwtDecode<UserJWTPayload>(token);
        const id = Number(decoded.id);

        return id ? id : null;
    }
}