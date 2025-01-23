import { Component, inject, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { GameService } from '@services/game/game.service';
import { EndGameConfirmDialogComponent } from '@components/end-game-confirm-dialog/end-game-confirm-dialog.component';

import { take } from 'rxjs';

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
  readonly dialog = inject(MatDialog);
  private gameService = inject(GameService);

  get showEndGame() {
    return this.gameService.gameFormArray.length;
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
}
