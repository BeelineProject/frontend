import { TestBed } from '@angular/core/testing';

import { RouteCheckingService } from './route-checking.service';

describe('RouteCheckingService', () => {
  let service: RouteCheckingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteCheckingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
