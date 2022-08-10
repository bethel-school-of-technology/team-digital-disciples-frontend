import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrespondedPrayerRequestsComponent } from './unresponded-prayer-requests.component';

describe('UnrespondedPrayerRequestsComponent', () => {
  let component: UnrespondedPrayerRequestsComponent;
  let fixture: ComponentFixture<UnrespondedPrayerRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnrespondedPrayerRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnrespondedPrayerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
