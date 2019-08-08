import { Injectable } from '@angular/core';

import { EventEmitter } from '@angular/core';

@Injectable()
export class HeaderFunctionsService {
  
  searchTextVal = new EventEmitter<string>();

  constructor() { }

}
