import { TestBed } from '@angular/core/testing';

import { PrayerResponseService } from './prayer-response.service';

describe('PrayerResponseService', () => {
  let service: PrayerResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrayerResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
