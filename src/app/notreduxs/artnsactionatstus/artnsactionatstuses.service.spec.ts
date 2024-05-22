import { TestBed } from '@angular/core/testing';

import { ArtnsactionatstusesService } from './artnsactionatstuses.service';

describe('ArtnsactionatstusesService', () => {
  let service: ArtnsactionatstusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtnsactionatstusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
