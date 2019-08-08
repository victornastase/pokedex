import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon.model';
import { PokemonsService } from '../shared/services/pokemons/pokemons.service';
import { HeaderFunctionsService } from '../shared/services/header/header-functions.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers:[PokemonsService, HeaderFunctionsService]
})
export class PokemonListComponent implements OnInit {

  pokemonsList: Array<Pokemon>;

  searchText: string;

  constructor(private pokemonService: PokemonsService, private headerService: HeaderFunctionsService) { }

  ngOnInit() {
    this.pokemonsList = this.pokemonService.getPokemonsListDisplay();

    this.headerService.searchTextVal.subscribe(
      (text: any) => {
        this.searchText = text;
        console.log(text);
      }
    );

  }

}
