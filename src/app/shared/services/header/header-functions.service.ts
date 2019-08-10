import { Injectable, OnInit } from '@angular/core';

import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class HeaderFunctionsService {

  searchTextVal: EventEmitter<string> = new EventEmitter();
  selectedBtn = new Subject();

  constructor() {}

  getSearchText(event: any) {
    this.searchTextVal.emit(event.target.value);
  }

  sendSelectButtonData(selectedBtn: string) {
    this.selectedBtn.next(selectedBtn);
  }

}
