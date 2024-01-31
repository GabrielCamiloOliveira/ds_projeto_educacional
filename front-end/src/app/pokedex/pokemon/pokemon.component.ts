import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon = {} as Pokemon;
  isSvgImage: boolean = false

  formatPokemonId(id: number): string {
    return id.toString().padStart(3, '0');
  }

  ngOnInit(): void {
    // Verifica se a imagem é SVG
    this.isSvgImage = this.pokemon.imageUrl.endsWith('.svg');
  }

  getTypesClass(): string {
    return this.pokemon.types.map(type => 'type-' + type.toLowerCase()).join(' ');
  }
  
}
