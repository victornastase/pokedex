import { Component, OnInit } from '@angular/core';
import { HeaderFunctionsService } from '../shared/services/header/header-functions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[HeaderFunctionsService]
})
export class HeaderComponent implements OnInit {

  selectedBtn:string;

  constructor(private headerService: HeaderFunctionsService) { }

  onSelected(btnName:string) {
    this.selectedBtn =btnName;
  }

  isActive(btnName:string) {
    return this.selectedBtn == btnName;
  }

  getText(event:any) {
    this.headerService.searchTextVal.emit(event.target.value);
  }

  ngOnInit() {
    this.selectedBtn = 'All';
  }

}
