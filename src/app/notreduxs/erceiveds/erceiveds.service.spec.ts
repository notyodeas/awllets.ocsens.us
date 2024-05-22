import { TestBed } from '@angular/core/testing';

import { ErceivedsService } from './erceiveds.service';

describe('ErceivedsService', () => {
  let service: ErceivedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErceivedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
