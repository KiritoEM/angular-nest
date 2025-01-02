import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_URL } from "../../helpers/constants";
import { UserModel } from "../models/user.model";
import { Observable } from "rxjs";
import { AddPokemonDTO } from "../models/pokemon.model";

@Injectable({
    providedIn: "root"
})
export class PokemonService {

    constructor(private http: HttpClient) { }

    getOne(id: number): Observable<any> {
        return this.http.get(`${API_URL}/pokemon/${id}`);
    }

    getAllPokemon(): Observable<any> {
        return this.http.get(`${API_URL}/pokemon/getAll`);
    }

    addPokemon(pokemonData: AddPokemonDTO, file: File): Observable<any> {
        const abilities = [
            {
                name: pokemonData.ability1,
                description: pokemonData.descriptionAbility1
            },
            {
                name: pokemonData.ability2,
                description: pokemonData.descriptionAbility2
            },
            {
                name: pokemonData.ability3,
                description: pokemonData.descriptionAbility3
            }
        ]

        const pokemonDataToSend = {
            name: pokemonData.name,
            description: pokemonData.description,
            abilities: JSON.stringify(
                abilities
            ),
            pokemon_types: JSON.stringify(pokemonData.types.map((type) => ({ name: type })))
        }

        const formData = new FormData();

        formData.append("pokemon", file, file.name);

        formData.append("name", pokemonDataToSend.name);
        formData.append("description", pokemonDataToSend.description);
        formData.append("abilities", pokemonDataToSend.abilities);
        formData.append("pokemon_types", pokemonDataToSend.pokemon_types);

        return this.http.post(`${API_URL}/pokemon/create`, formData);
    }
}