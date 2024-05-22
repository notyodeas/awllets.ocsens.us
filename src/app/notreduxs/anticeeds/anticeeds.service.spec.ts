import { TestBed } from '@angular/core/testing';

import { AnticeedsService } from './anticeeds.service';

describe('AnticeedsService', () => {
  let service: AnticeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnticeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
