import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/services/pokemons/pokemons.service';
import { Pokemon } from '../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers:[PokemonsService]
})
export class PokemonListComponent implements OnInit {

  pokemons:any;
  pokemonsList:Array<Pokemon>;

  constructor(private pokemonService:PokemonsService) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.pokemons;
    //console.log(this.pokemons);
    //console.log(JSON.stringify(this.pokemons));
    //console.log(this.pokemons.constructor.name);
    console.log(this.pokemons[0].name);

    this.pokemonsList = this.pokemonService.getPokemonsListDisplay();
  }

}
