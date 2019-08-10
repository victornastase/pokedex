import { Directive, HostListener, HostBinding, ElementRef} from '@angular/core';

@Directive({
    selector:'[appFavPokemon]'
})
export class FavoriteHeart {
    @HostBinding('class') cssClass:string;

    @HostListener('click') onClick() {
        if(this.cssClass == 'fa fa-heart-o') {
            this.cssClass = 'fa fa-heart';
        } else {
            this.cssClass = 'fa fa-heart-o';
        }
    }

    constructor(private el: ElementRef) {
        this.cssClass = 'fa fa-heart-o';
    }

}