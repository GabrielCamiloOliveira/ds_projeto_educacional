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

  //selecionar um pokemon em um determinado intervalo
  getPokemonRandomInRange(startId: number, endId: number): Observable<any> {
    const randomId = this.getRandomInt(startId, endId);
    return this.getPokemonDetails(randomId);
  }

  // Seleciona um Pokémon aleatório de uma lista de IDs
   getPokemonRandomInList(idList: number[]): Observable<any> {
    const randomIndex = this.getRandomInt(0, idList.length - 1);
    const randomId = idList[randomIndex];
    return this.getPokemonDetails(randomId);
  }
    
  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomPokemonId(pokemonIds: number[]): number {
    const randomIndex = Math.floor(Math.random() * pokemonIds.length);
    return pokemonIds[randomIndex];
  }

  getPokemonById(pokemonId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${pokemonId}`);
  }
  
}
