import { PipeTransform, Pipe } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {

    transform(pokemons: any[], searchText:string): Array<Pokemon> {
        if(!searchText) return pokemons;

        searchText = searchText.toLowerCase();
        console.log(searchText);
        return pokemons.filter( (pokemon: Pokemon) => {
            return pokemon.name.toLowerCase().includes(searchText);
        });
    }

}