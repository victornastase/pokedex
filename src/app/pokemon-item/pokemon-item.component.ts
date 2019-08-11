import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonsService } from '../shared/services/pokemons/pokemons.service';
import { Pokemon } from '../shared/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css'],
  providers: [PokemonsService]
})
export class PokemonItemComponent implements OnInit, OnDestroy {

  pokemon: Pokemon;

  constructor(private pokemonService:PokemonsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.pokemon = this.pokemonService.findPokemonByName(this.route.snapshot.params['name']);
  }

  ngOnDestroy(): void {
    this.pokemonService.sendChangePage(false);
  }

}
