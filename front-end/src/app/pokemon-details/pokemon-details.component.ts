import { Component, OnInit, SimpleChanges } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  pokemonId = 1; // ID do Pokémon para teste
  pokemonDetails: any;

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.getPokemonDetails();
  }

  getPokemonDetails() {
    this.pokeapiService.getPokemonDetails(this.pokemonId).subscribe(
      (data) => {
        this.pokemonDetails = data;
        console.log('Pokemon Details:', this.pokemonDetails);
      },
      (error) => {
        console.error('Error fetching Pokemon details:', error);
      }
    );
  }

}
