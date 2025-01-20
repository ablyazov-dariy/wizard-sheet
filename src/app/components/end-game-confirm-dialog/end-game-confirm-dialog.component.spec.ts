import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndGameConfirmDialogComponent } from './end-game-confirm-dialog.component';

describe('EndGameConfirmDialogComponent', () => {
  let component: EndGameConfirmDialogComponent;
  let fixture: ComponentFixture<EndGameConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndGameConfirmDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndGameConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
