import { TestBed } from '@angular/core/testing';

import { ScouterService } from './scouter.service';

describe('ScouterService', () => {
  let service: ScouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
