import { TestBed } from '@angular/core/testing';

import { AtsteraService } from './atstera.service';

describe('AtsteraService', () => {
  let service: AtsteraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtsteraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
