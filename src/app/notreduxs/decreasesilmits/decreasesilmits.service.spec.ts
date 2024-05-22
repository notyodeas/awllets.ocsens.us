import { TestBed } from '@angular/core/testing';

import { DecreasesilmitsService } from './decreasesilmits.service';

describe('DecreasesilmitsService', () => {
  let service: DecreasesilmitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecreasesilmitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
