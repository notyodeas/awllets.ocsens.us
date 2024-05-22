import { TestBed } from '@angular/core/testing';

import { NotweaponsService } from './notweapons.service';

describe('NotweaponsService', () => {
  let service: NotweaponsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotweaponsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
