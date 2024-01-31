import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MenuDificuldadeComponent } from './menu-dificuldade/menu-dificuldade.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjudaComponent } from './ajuda/ajuda.component';
import { BatalhaComponent } from './batalha/batalha.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { CadastroFormComponent } from './auth/cadastro-form/cadastro-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUsuarioComponent } from './singular-components/new-usuario/new-usuario.component';
import { PokemonComponent } from './pokedex/pokemon/pokemon.component';
import { PokemonListComponent } from './pokedex/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './pokedex/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenucomponentComponent,
    PokemonDetailsComponent,
    PokedexComponent,
    MenuDificuldadeComponent,
    AjudaComponent,
    BatalhaComponent,
    LoginComponent,
    LoginFormComponent,
    CadastroFormComponent,
    NewUsuarioComponent,
    PokemonComponent,
    PokemonListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
