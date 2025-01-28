import { Component, inject, input, linkedSignal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { GameService } from '@services/game/game.service';
import { EndGameConfirmDialogComponent } from '@components/dialogs/end-game-confirm-dialog/end-game-confirm-dialog.component';

import { take } from 'rxjs';
import { GameConfigFormDialogComponent } from '@components/dialogs/game-config-form-dialog/game-config-form-dialog.component';

@Component({
  selector: 'app-game-table-head',
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './game-table-head.component.html',
  styleUrl: './game-table-head.component.scss',
})
export class GameTableHeadComponent {
  public nameControls = input.required<FormControl<string | null>[]>();
  public showAlertInput = input.required<number>({
    alias: 'showAlert',
  });

  public showAlert = linkedSignal(() => this.showAlertInput());

  readonly dialog = inject(MatDialog);
  private gameService = inject(GameService);

  get showEndGame() {
    return this.gameService.form.length;
  }

  endGame() {
    const dialogRef = this.dialog.open(EndGameConfirmDialogComponent, {
      width: 'min(100%, 500px)',
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        if (result) this.gameService.endGame();
      });
  }

  editConfig() {
    const dialogRef = this.dialog.open(GameConfigFormDialogComponent, {
      width: 'min(100%, 500px)',
    });

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe(result => {
        if (result) this.gameService.endGame();
      });
  }

  closeAlert() {
    this.showAlert.set(0);
  }
}
