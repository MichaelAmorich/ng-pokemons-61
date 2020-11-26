import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

    private pokemonsUrl = 'api/pokemons';

    constructor(private http: HttpClient) { }

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl);
    }

    getPokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${id}`;
        return this.http.get<Pokemon>(url);
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions);
    }

    deletePokemon(pokemon: Pokemon) : Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${pokemon.id}`;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        return this.http.delete<Pokemon>(url, httpOptions);
    }

    searchPokemons(term: string) : Observable<Pokemon[]> {
        if (!term.trim())
            return of([])

        return this.http.get<Pokemon[]>(`api/pokemons?name=${term}`);
    }

    getPokemonTypes(): Array<string> {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }
}