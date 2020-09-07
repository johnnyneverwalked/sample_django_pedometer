import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepHistoryComponent } from './step-history.component';

describe('StepHistoryComponent', () => {
  let component: StepHistoryComponent;
  let fixture: ComponentFixture<StepHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
