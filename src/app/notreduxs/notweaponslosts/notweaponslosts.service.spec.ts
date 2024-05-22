import { TestBed } from '@angular/core/testing';

import { NotweaponslostsService } from './notweaponslosts.service';

describe('NotweaponslostsService', () => {
  let service: NotweaponslostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotweaponslostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
