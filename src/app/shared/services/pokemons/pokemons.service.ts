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
      let name:string = pokemon.name;
      let image:string = '';
      
      if(name == 'Mr. Mime') {
        image = this.baseURL + 'mr-mime.jpg';
      } else if(name.includes('Farfetch')) { 
        image = this.baseURL + 'farfetchd.jpg';
      } else {
        image = this.baseURL + name.toLowerCase() + '.jpg';
      }

      let model:Pokemon = new Pokemon(name, pokemon.types, image);
      //console.log('Pokemon:', model);
      modelList.push(model);
    }

    return modelList;
   }

   
}
