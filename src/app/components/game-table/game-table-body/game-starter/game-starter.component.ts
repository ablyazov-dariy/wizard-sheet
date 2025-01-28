import { Component } from '@angular/core';
import { GameService } from '@services/game/game.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-game-starter',
  imports: [NgOptimizedImage],
  templateUrl: './game-starter.component.html',
  styleUrl: './game-starter.component.scss',
})
export class GameStarterComponent {
  constructor(protected game: GameService) {}
}
