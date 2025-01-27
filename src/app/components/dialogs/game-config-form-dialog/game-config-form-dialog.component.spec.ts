import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameConfigFormDialogComponent } from './game-config-form-dialog.component';

describe('GameConfigFormDialogComponent', () => {
  let component: GameConfigFormDialogComponent;
  let fixture: ComponentFixture<GameConfigFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameConfigFormDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameConfigFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
