import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "../helpers/constants";
import { UserModel } from "../models/user.model";

export type LoginUserDto = Pick<UserModel, "email" | "password">
export type SignupDTO = Omit<UserModel, "id">

@Injectable({
    providedIn: "root"
})
export class AuthService {
    constructor(private http: HttpClient) { }

    login(loginData: LoginUserDto): Observable<any> {
        return this.http.post(`${API_URL}/auth/signin`, { ...loginData })
    }

    signup(signupData: SignupDTO): Observable<any> {
        return this.http.post(`${API_URL}/auth/signup`, { ...signupData })
    }
}