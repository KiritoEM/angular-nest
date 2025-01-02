import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SignupDTO } from "./signup.dto";
import { Observable } from 'rxjs';
import { API_URL } from "../../helpers/constants";

@Injectable({ providedIn: 'root' })
export class SignupService {
    constructor(private http: HttpClient) { }

    signup(signupData: SignupDTO): Observable<any> {
        return this.http.post(`${API_URL}/auth/signup`, { ...signupData })
    }
}