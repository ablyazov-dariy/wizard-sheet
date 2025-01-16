import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTableHeadComponent } from './game-table-head.component';

describe('GameTableHeadComponent', () => {
  let component: GameTableHeadComponent;
  let fixture: ComponentFixture<GameTableHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTableHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
