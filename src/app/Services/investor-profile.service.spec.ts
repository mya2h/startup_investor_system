import { TestBed } from '@angular/core/testing';

import { InvestorProfileService } from './investor-profile.service';

describe('InvestorProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestorProfileService = TestBed.get(InvestorProfileService);
    expect(service).toBeTruthy();
  });
});
