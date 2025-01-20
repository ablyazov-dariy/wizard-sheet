import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-end-game-confirm-dialog',
  imports: [
    MatButton,
    MatDialogClose,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './end-game-confirm-dialog.component.html',
  styleUrl: './end-game-confirm-dialog.component.scss',
})
export class EndGameConfirmDialogComponent {}
