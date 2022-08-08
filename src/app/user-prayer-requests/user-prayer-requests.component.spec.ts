import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrayerRequestsComponent } from './user-prayer-requests.component';

describe('UserPrayerRequestsComponent', () => {
  let component: UserPrayerRequestsComponent;
  let fixture: ComponentFixture<UserPrayerRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPrayerRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPrayerRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
