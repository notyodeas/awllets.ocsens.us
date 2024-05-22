import { TestBed } from '@angular/core/testing';

import { CeivedsService } from './ceiveds.service';

describe('CeivedsService', () => {
  let service: CeivedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeivedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
