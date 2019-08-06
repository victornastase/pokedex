import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/services/pokemons/pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers:[PokemonsService]
})
export class PokemonListComponent implements OnInit {

  pokemons:any;

  constructor(private pokemonService:PokemonsService) { }

  ngOnInit() {
    this.pokemons = this.pokemonService.pokemons;
    console.log(this.pokemons);
    //console.log(JSON.stringify(this.pokemons));
    console.log(this.pokemons.constructor.name);
    //console.log(this.pokemons.)
  }

}
