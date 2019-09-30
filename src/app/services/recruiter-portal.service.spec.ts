import { TestBed } from '@angular/core/testing';

import { RecruiterPortalService } from './recruiter-portal.service';

describe('RecruiterPortalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecruiterPortalService = TestBed.get(RecruiterPortalService);
    expect(service).toBeTruthy();
  });
});
