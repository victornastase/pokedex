import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../shared/services/pokemons/pokemons.service';
import { Pokemon } from '../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css'],
  providers: [PokemonsService]
})
export class PokemonItemComponent implements OnInit {

  pokemons:Array<Pokemon>;

  constructor(private pokemonService:PokemonsService) { }

  ngOnInit() {
    //this.pokemons = this.pokemonService.getPokemonsListDisplay();
  }

}
