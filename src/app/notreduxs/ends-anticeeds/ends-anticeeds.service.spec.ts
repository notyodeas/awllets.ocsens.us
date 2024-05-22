import { TestBed } from '@angular/core/testing';

import { EndsAnticeedsService } from './ends-anticeeds.service';

describe('EndsAnticeedsService', () => {
  let service: EndsAnticeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndsAnticeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
