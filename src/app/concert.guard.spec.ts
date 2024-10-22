import { TestBed } from '@angular/core/testing';

import { ConcertGuard } from './concert.guard';

describe('ConcertGuard', () => {
  let guard: ConcertGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConcertGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
