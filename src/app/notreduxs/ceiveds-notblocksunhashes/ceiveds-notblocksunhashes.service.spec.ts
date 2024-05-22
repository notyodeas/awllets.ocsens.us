import { TestBed } from '@angular/core/testing';

import { CeivedsNotblocksunhashesService } from './ceiveds-notblocksunhashes.service';

describe('CeivedsNotblocksunhashesService', () => {
  let service: CeivedsNotblocksunhashesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeivedsNotblocksunhashesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
