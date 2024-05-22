import { TestBed } from '@angular/core/testing';

import { AttackedsEmmbersCeivesService } from './attackeds-emmbers-ceives.service';

describe('AttackedsEmmbersCeivesService', () => {
  let service: AttackedsEmmbersCeivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttackedsEmmbersCeivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
