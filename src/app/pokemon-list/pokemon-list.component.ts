import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon.model';
import { PokemonsService } from '../shared/services/pokemons/pokemons.service';
import { HeaderFunctionsService } from '../shared/services/header/header-functions.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonsList: Array<Pokemon>;

  searchText: string;
  typeText: string;

  constructor(private pokemonService: PokemonsService, private headerService: HeaderFunctionsService) {}

  ngOnInit() {
    this.pokemonsList = this.pokemonService.getPokemonsListModel();

    this.headerService.searchTextVal.subscribe(
      (text: string) => {
        this.searchText = text;
      }
    );

    this.headerService.selectedBtn.subscribe(
      (btn: string) => {
        this.pokemonsList = this.pokemonService.getDisplayList(btn);
      }
    );

    this.headerService.typeTextVal.subscribe(
      (type: string) => {
        this.typeText = type;
      }
    );

  }

  addToFavorites(pokemon: Pokemon) {
    pokemon.setFavorite(!pokemon.getFavorite());
    pokemon.getFavorite() ? this.pokemonService.addToFavorites(pokemon) : this.pokemonService.removeFromFavorites(pokemon);
  }
  
}
