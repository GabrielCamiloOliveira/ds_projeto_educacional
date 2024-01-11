import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonDetails(pokemonId: number): Observable<any> {
    const url = `${this.baseUrl}/pokemon/${pokemonId}`;
    return this.http.get(url);
  }
}
