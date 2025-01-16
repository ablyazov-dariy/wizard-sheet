import { TestBed } from '@angular/core/testing';

import { GameFormService } from './game-form.service';

describe('GameFormService', () => {
  let service: GameFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
