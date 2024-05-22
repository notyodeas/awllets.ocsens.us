import { TestBed } from '@angular/core/testing';

import { NotguardsService } from './notguards.service';

describe('NotguardsService', () => {
  let service: NotguardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotguardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
