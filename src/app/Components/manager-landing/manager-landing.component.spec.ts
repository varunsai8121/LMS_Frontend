import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLandingComponent } from './manager-landing.component';

describe('ManagerLandingComponent', () => {
  let component: ManagerLandingComponent;
  let fixture: ComponentFixture<ManagerLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerLandingComponent]
    });
    fixture = TestBed.createComponent(ManagerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
