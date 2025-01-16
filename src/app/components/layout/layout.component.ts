import { Component } from '@angular/core';
import { GameTableComponent } from '../game-table/game-table.component';

@Component({
  selector: 'app-layout',
  imports: [GameTableComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
