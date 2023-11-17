import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokedexComponent } from './pokedex/pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    MenucomponentComponent,
    PokemonDetailsComponent,
    PokedexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
