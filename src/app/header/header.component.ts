import { Component, OnInit } from '@angular/core';
import { HeaderFunctionsService } from '../shared/services/header/header-functions.service';
import { PokemonsService } from '../shared/services/pokemons/pokemons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedBtn:string;

  constructor(private headerService: HeaderFunctionsService, private pokemonService: PokemonsService) { }

  onSelected(btnName:string) {
    this.selectedBtn = btnName;
    this.headerService.sendSelectButtonData(btnName);
  }

  isActive(btnName:string) {
    return this.selectedBtn == btnName;
  }

  getText(event:any) {
    this.headerService.getSearchText(event);
  }

  ngOnInit() {
    this.selectedBtn = 'All';
  }

}
