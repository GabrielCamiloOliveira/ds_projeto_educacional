import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemonList: any[] = [];

  constructor(
    private pokeapiService: PokeapiService,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList(): void {
    const pokemonCount = 151;

    for (let i = 1; i <= pokemonCount; i++) {
      const pokemonId = i;
      if (this.authService.getPokemonList().some(achievement => achievement.id === pokemonId)) {
        //verifica se a lista de pokémons do usuário possui o pokémon
        this.pokeapiService.getPokemonDetails(i).subscribe(
          (data) => {
            this.pokemonList.push(data);
          },
          (error) => {
            console.error(`Error fetching details for Pokemon ${i}:`, error);
          }
        );
      }
    }
  }
}
