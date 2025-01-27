import { Component } from '@angular/core';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-end-game-confirm-dialog',
  imports: [MatDialogClose],
  templateUrl: './end-game-confirm-dialog.component.html',
  styleUrl: './end-game-confirm-dialog.component.scss',
})
export class EndGameConfirmDialogComponent {}
