import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerResponseComponent } from './prayer-response.component';

describe('PrayerResponseComponent', () => {
  let component: PrayerResponseComponent;
  let fixture: ComponentFixture<PrayerResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
