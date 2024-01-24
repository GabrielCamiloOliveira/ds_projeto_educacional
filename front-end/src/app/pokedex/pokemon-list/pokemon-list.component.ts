import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] = [];
  isLoading: boolean = false;
  loadedPokemons = 0;
  batchSize = 151; // Quantidade de pokémons na lista

  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit(): void {
    this.loadPokemonList();
  }

  loadPokemonList() {
    this.isLoading = true;
    this.pokemonService.getPokemons(this.loadedPokemons, this.batchSize)
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemonList = [...this.pokemonList, ...pokemons];
        this.loadedPokemons += this.batchSize;
        this.isLoading = false;
      });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition + windowHeight >= documentHeight) {
      this.loadPokemonList();
    }
  }
}