import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameFormComponent } from '../game-form/game-form.component';

@Component({
  selector: 'app-game-table',
  imports: [FormsModule, GameFormComponent],
  templateUrl: './game-table.component.html',
  styleUrl: './game-table.component.scss',
})
export class GameTableComponent {}
