import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon.model';
import { PokemonsService } from '../shared/services/pokemons/pokemons.service';
import { HeaderFunctionsService } from '../shared/services/header/header-functions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonsList: Array<Pokemon>;

  searchText: string;
  typeText: string;
  isGrid: boolean;

  constructor(private pokemonService: PokemonsService, private headerService: HeaderFunctionsService, private router: Router) {}

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

    this.headerService.isGrid.subscribe(
      (isGrid: boolean) => {
        console.log('List know: ', isGrid);
        this.isGrid = isGrid;
      }
    );
    this.isGrid=true;

  }

  addToFavorites(pokemon: Pokemon) {
    pokemon.setFavorite(!pokemon.getFavorite());
    pokemon.getFavorite() ? this.pokemonService.addToFavorites(pokemon) : this.pokemonService.removeFromFavorites(pokemon);
  }

  goToPokemon(pokemon: Pokemon) {
    this.pokemonService.sendChangePage(true);
    this.router.navigate([pokemon.name]);
  }
  
}
