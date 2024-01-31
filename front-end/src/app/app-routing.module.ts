import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MenuDificuldadeComponent } from './menu-dificuldade/menu-dificuldade.component';
import { BatalhaComponent } from './batalha/batalha.component';
import { BatalhaGuard } from './guards/batalha.guard';
import { AjudaComponent } from './ajuda/ajuda.component';
import { LoginComponent } from './auth/login/login.component';
import { AppComponent } from './app.component';
import { CadastroFormComponent } from './auth/cadastro-form/cadastro-form.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Configurando a rota padrão
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroFormComponent },
  { path: 'home', component: AppComponent },
  { path: 'pokemon-details', component: PokemonDetailsComponent }, //usado apenas para testar a API
  { path: 'pokedex', component: PokedexComponent },
  { path: 'menu-dificuldade', component: MenuDificuldadeComponent },
  { path: 'batalha', component: BatalhaComponent, canActivate: [BatalhaGuard] },
  { path: 'ajuda', component: AjudaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
