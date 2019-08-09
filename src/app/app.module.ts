import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';

import { FavoriteHeart } from './shared/directives/favorite-heart.directive';

import { SearchPipe } from './shared/pipes/search-filter.pipe';
import { HeaderFunctionsService } from './shared/services/header/header-functions.service';
import { PokemonsService } from './shared/services/pokemons/pokemons.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonItemComponent,
    
    FavoriteHeart,

    SearchPipe
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [HeaderFunctionsService, PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
