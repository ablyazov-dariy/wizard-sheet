import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameService } from '../../services/game/game.service';
import { GameTableFootComponent } from './game-table-foot/game-table-foot.component';
import { GameTableHeadComponent } from './game-table-head/game-table-head.component';
import { GameTableBodyComponent } from './game-table-body/game-table-body.component';

@Component({
  selector: 'app-game-table',
  imports: [
    FormsModule,
    GameTableFootComponent,
    GameTableHeadComponent,
    ReactiveFormsModule,
    GameTableBodyComponent,
  ],
  templateUrl: './game-table.component.html',
  styleUrl: './game-table.component.scss',
})
export class GameTableComponent {
  constructor(protected game: GameService) {}
}
