import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-game-table-foot',
  imports: [NgOptimizedImage],
  templateUrl: './game-table-foot.component.html',
  styleUrl: './game-table-foot.component.scss',
})
export class GameTableFootComponent {
  public results = input.required<number[]>();
}
