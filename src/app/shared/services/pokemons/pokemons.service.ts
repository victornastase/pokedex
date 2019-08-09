import { Injectable } from '@angular/core';

import pokemonsJson from '../../../../assets/pokemons.json'
import { Pokemon } from '../../models/pokemon.model.js';
import { HeaderFunctionsService } from '../header/header-functions.service.js';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemons: any;

  favoriteList: Array<Pokemon>;

  baseURL:string = 'https://img.pokemondb.net/artwork/large/';

  constructor(private headerService: HeaderFunctionsService) {
    this.pokemons = pokemonsJson;
    this.favoriteList = new Array<Pokemon>();
   }

   getPokemonsListModel(): Array<Pokemon> {
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

      modelList.push(model);
    }

    return modelList;
   }

   getDisplayList(selectedBtn: string): Array<Pokemon> {
     if(selectedBtn === 'All') {
      return this.getPokemonsListModel();
     } 
      return this.favoriteList;
   }
   
}
