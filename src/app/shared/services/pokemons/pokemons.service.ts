import { Injectable } from '@angular/core';

import pokemonsJson from '../../../../assets/pokemons.json'
import { Pokemon } from '../../models/pokemon.model.js';

@Injectable()
export class PokemonsService {
  pokemons: any;
  baseURL:string = 'https://img.pokemondb.net/artwork/large/';

  constructor() {
    this.pokemons = pokemonsJson;
   }

   getPokemonsListDisplay() {
    let modelList:Array<Pokemon> = new Array<Pokemon>();
    for(let pokemon of this.pokemons) {
      let model:Pokemon = new Pokemon(pokemon.name, pokemon.types, this.baseURL + pokemon.name.toLowerCase() + '.jpg');
      //console.log('Pokemon:', model);
      modelList.push(model);
    }
    return modelList;
   }
}
