import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteCheckingComponent } from './route-checking.component';

describe('RouteCheckingComponent', () => {
  let component: RouteCheckingComponent;
  let fixture: ComponentFixture<RouteCheckingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteCheckingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
