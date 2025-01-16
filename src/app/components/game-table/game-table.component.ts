import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameService } from '../../services/game/game.service';
import { GameTableFootComponent } from '../game-table-foot/game-table-foot.component';
import { GameTableHeadComponent } from '../game-table-head/game-table-head.component';
import { NgClass } from '@angular/common';
import { GameStarterComponent } from '../game-starter/game-starter.component';

@Component({
  selector: 'app-game-table',
  imports: [
    FormsModule,
    GameTableFootComponent,
    GameTableHeadComponent,
    ReactiveFormsModule,
    NgClass,
    GameStarterComponent,
  ],
  templateUrl: './game-table.component.html',
  styleUrl: './game-table.component.scss',
})
export class GameTableComponent {
  constructor(protected game: GameService) {}
}
