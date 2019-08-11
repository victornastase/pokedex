import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './shared/services/pokemons/pokemons.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'pokedex';

  showPokemon: boolean;

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit(): void {
    this.showPokemon = false;

    this.pokemonService.changePage.subscribe(
      (showPokemon: boolean) => this.showPokemon = showPokemon 
    );
  }

}
