import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "../../helpers/constants";

@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private http: HttpClient) { }

    getUser(id: number): Observable<any> {
        return this.http.get(`${API_URL}/user/${id}`);
    }
}