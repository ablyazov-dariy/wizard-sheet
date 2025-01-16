import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTableFootComponent } from './game-table-foot.component';

describe('GameTableFootComponent', () => {
  let component: GameTableFootComponent;
  let fixture: ComponentFixture<GameTableFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTableFootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTableFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
