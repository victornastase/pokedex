import { TestBed } from '@angular/core/testing';

import { HeaderFunctionsService } from './header-functions.service';

describe('HeaderFunctionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderFunctionsService = TestBed.get(HeaderFunctionsService);
    expect(service).toBeTruthy();
  });
});
