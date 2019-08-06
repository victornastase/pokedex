import { Injectable } from '@angular/core';

import pokemonsJson from '../../../../assets/pokemons.json'

@Injectable()
export class PokemonsService {
  pokemons: any;

  constructor() {
    this.pokemons = pokemonsJson
   }

}
