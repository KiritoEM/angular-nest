import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { API_URL } from "../../helpers/constants";

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    constructor(private http: HttpClient) { }

    getOne(id: number) {
        return this.http.get(`${API_URL}/pokemon/${id}`);
    }
}