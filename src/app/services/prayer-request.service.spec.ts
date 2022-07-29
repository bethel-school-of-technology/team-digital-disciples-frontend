import { TestBed } from '@angular/core/testing';

import { PrayerRequestService } from './prayer-request.service';

describe('PrayerRequestService', () => {
  let service: PrayerRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrayerRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
