import { PipeTransform, Pipe } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Pipe({
    name:'typeFilter'
})
export class TypePipe implements PipeTransform {

    transform(pokemons: any[], type:string): Array<Pokemon> {
        if(!type) return pokemons;

        if(type === 'Type') return pokemons;

        return pokemons.filter((pokemon: Pokemon) => {
            let check: boolean = false;
            for(let pokemonType of pokemon.getTypes()) {
                if(type === pokemonType) {
                    check = true;
                }
            }
            return check;
        });
    }

}