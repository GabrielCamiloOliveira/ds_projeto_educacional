import { TestBed } from '@angular/core/testing';

import { SharedExpressionService } from './shared-expression.service';

describe('SharedExpressionService', () => {
  let service: SharedExpressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedExpressionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
