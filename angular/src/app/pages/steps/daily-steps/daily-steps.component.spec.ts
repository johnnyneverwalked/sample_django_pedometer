import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyStepsComponent } from './daily-steps.component';

describe('DailyStepsComponent', () => {
  let component: DailyStepsComponent;
  let fixture: ComponentFixture<DailyStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
