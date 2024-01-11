import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { batalhaGuard } from './batalha.guard';

describe('batalhaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => batalhaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
