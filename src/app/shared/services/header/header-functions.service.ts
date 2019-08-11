import { Injectable, OnInit } from '@angular/core';

import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class HeaderFunctionsService {

  searchTextVal: EventEmitter<string> = new EventEmitter();
  typeTextVal = new Subject();

  selectedBtn = new Subject();
  isGrid = new Subject();
  
  constructor() {}

  sendSearchText(event: any) {
    this.searchTextVal.emit(event.target.value);
  }

  sendSelectButtonData(selectedBtn: string) {
    this.selectedBtn.next(selectedBtn);
  }

  sendTypeText(type: string) {
    this.typeTextVal.next(type);
  }

  sendGridType(isGrid: boolean) {
    console.log('service send: ', isGrid);
    this.isGrid.next(isGrid);
  }

}
