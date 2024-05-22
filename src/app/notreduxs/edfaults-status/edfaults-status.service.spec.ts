import { TestBed } from '@angular/core/testing';

import { EdfaultsStatusService } from './edfaults-status.service';

describe('EdfaultsStatusService', () => {
  let service: EdfaultsStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdfaultsStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
