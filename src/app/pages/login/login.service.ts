import { HttpClient } from "@angular/common/http";
import { Inject, inject, Injectable } from "@angular/core";
import { API_URL } from "../../helpers/constants";
import { LoginUserDto } from "./login.dto";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
    constructor(@Inject(HttpClient) private http: HttpClient) { }

    login(loginData: LoginUserDto): Observable<any> {
        return this.http.post(`${API_URL}/login`, { ...loginData })
    }
}