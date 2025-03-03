import { Component, inject } from '@angular/core';
import { GameConfigService } from '@services/game-config/game-config.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-game-config-form-dialog',
  imports: [ReactiveFormsModule, MatDialogClose],
  templateUrl: './game-config-form-dialog.component.html',
  styleUrl: './game-config-form-dialog.component.scss',
})
export class GameConfigFormDialogComponent {
  gameConfigService = inject(GameConfigService);
}
