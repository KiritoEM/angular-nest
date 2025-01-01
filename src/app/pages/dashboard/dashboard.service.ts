import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { API_URL } from "../../helpers/constants";

@Injectable({
    providedIn: "root"
})
export class DashboardService {
    constructor(private http: HttpClient) { }

    getAllPokemon() {
        return this.http.get(`${API_URL}/pokemon/getAll`);
    }
}