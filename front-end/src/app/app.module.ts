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

@NgModule({
  declarations: [
    AppComponent,
    MenucomponentComponent,
    PokemonDetailsComponent,
    PokedexComponent,
    MenuDificuldadeComponent,
    AjudaComponent,
    BatalhaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
