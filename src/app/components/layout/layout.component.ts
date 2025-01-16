import { Component } from '@angular/core';
import { GameFormComponent } from '../game-form/game-form.component';

@Component({
  selector: 'app-layout',
  imports: [GameFormComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
