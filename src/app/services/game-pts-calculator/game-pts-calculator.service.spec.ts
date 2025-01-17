import { TestBed } from '@angular/core/testing';

import { GamePtsCalculatorService } from './game-pts-calculator.service';

describe('GamePtsCalculatorService', () => {
  let service: GamePtsCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamePtsCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
