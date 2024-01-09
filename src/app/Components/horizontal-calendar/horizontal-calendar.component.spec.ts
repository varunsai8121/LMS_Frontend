import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCalendarComponent } from './horizontal-calendar.component';

describe('HorizontalCalendarComponent', () => {
  let component: HorizontalCalendarComponent;
  let fixture: ComponentFixture<HorizontalCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalCalendarComponent]
    });
    fixture = TestBed.createComponent(HorizontalCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
