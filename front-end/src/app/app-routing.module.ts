import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MenuDificuldadeComponent } from './menu-dificuldade/menu-dificuldade.component';
import { BatalhaComponent } from './batalha/batalha.component';
import { BatalhaGuard } from './guards/batalha.guard';

const routes: Routes = [

  { path: 'pokemon-details', component: PokemonDetailsComponent }, //usado apenas para testar a API
  { path: 'pokedex', component: PokedexComponent },
  { path: 'menu-dificuldade', component: MenuDificuldadeComponent },
  { path: 'batalha', component: BatalhaComponent, canActivate: [BatalhaGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
