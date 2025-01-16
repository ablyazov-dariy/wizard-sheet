import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTableBodyComponent } from './game-table-body.component';

describe('GameTableBodyComponent', () => {
  let component: GameTableBodyComponent;
  let fixture: ComponentFixture<GameTableBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameTableBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameTableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
