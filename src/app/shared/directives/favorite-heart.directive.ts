import { Directive, HostListener, HostBinding, ElementRef, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Directive({
    selector:'[appFavPokemon]'
})
export class FavoriteHeart {
    @HostBinding('class') cssClass:string;

    @HostListener('click') onClick() {
        if(this.cssClass == 'fa fa-heart-o') {
            this.cssClass = ' fa fa-heart';
        } else {
            this.cssClass = 'fa fa-heart-o';
        }
    }

    constructor(private el: ElementRef){
        this.cssClass = 'fa fa-heart-o';
    }

}