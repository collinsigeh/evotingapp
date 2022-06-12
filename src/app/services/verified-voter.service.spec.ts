import { TestBed } from '@angular/core/testing';

import { VerifiedVoterService } from './verified-voter.service';

describe('VerifiedVoterService', () => {
  let service: VerifiedVoterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifiedVoterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
