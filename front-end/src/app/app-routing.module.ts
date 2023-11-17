import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokedexComponent } from './pokedex/pokedex.component';

const routes: Routes = [

  { path: 'pokemon-details', component: PokemonDetailsComponent },
  { path: 'pokedex', component: PokedexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
