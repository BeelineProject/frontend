import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficSurveyComponent } from './traffic-survey.component';

describe('TrafficSurveyComponent', () => {
  let component: TrafficSurveyComponent;
  let fixture: ComponentFixture<TrafficSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
