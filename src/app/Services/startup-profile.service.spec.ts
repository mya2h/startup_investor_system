import { TestBed } from '@angular/core/testing';

import { StartupProfileService } from './startup-profile.service';

describe('StartupProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StartupProfileService = TestBed.get(StartupProfileService);
    expect(service).toBeTruthy();
  });
});
