import { Component } from '@angular/core';

import { GameTableComponent } from '@components/game-table/game-table.component';

@Component({
  selector: 'app-root',
  imports: [GameTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
