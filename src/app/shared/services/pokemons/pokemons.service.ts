import { Injectable } from '@angular/core';

import pokemonsJson from '../../../../assets/pokemons.json'
import { Pokemon } from '../../models/pokemon.model.js';
import { HeaderFunctionsService } from '../header/header-functions.service.js';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  pokemons: any;

  favoriteList: Array<Pokemon>;

  baseURL:string = 'https://img.pokemondb.net/artwork/large/';

  types: string[] = [
    'Type',
    'Normal',
    'Fire',
    'Water',
    'Electric',
    'Grass',
    'Ice',
    'Fighting',
    'Poison',
    'Ground',
    'Flying',
    'Psychic',
    'Bug',
    'Rock',
    'Ghost',
    'Dragon',
    'Dark',
    'Steel',
    'Fairy'
  ];

  constructor() {
    this.pokemons = pokemonsJson;
    console.log(this.pokemons);
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

      let model:Pokemon = new Pokemon(name, pokemon.types, image, false, pokemon.maxCP, pokemon.maxHP, pokemon.height.minimum, pokemon.height.maximum, pokemon.weight.minimum, pokemon.weight.maximum);

      modelList.push(model);
    }
    console.log(modelList);
    return modelList;
   }

   addToFavorites(pokemon: Pokemon) {
     this.favoriteList.push(pokemon);
   }

   removeFromFavorites(pokemon: Pokemon) {
     let index: number = this.favoriteList.indexOf(pokemon, 0);
     if(index > -1)
      this.favoriteList.splice(index,1);
   }

   getDisplayList(selectedBtn: string): Array<Pokemon> {
     if(selectedBtn === 'All') {

        let pokemonList:Array<Pokemon> = this.getPokemonsListModel();

        if(this.favoriteList.length > 0) {
          let index: number = -1;
          for(let fav of this.favoriteList) {
            index = pokemonList.findIndex( (poke: Pokemon) => poke.name === fav.name);
            pokemonList[index] = fav;
          }
          return pokemonList;
        }
        return pokemonList;
     } 
      return this.favoriteList;
   }
   
}
